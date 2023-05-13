import { useState } from 'react';

function useYoutubeApi() {
  const [pageToken, setPageToken] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const callApi = async (maxResults = 5) => {
    setResult(null);
    setError(null);
    setLoading(true);
    const key = 'AIzaSyBiCXcNDjPQa0NB8zVA6T732V08gQsic2M';
    const part = 'id,snippet';

    const params = new URLSearchParams({ key, part, maxResults });
    if (pageToken) params.append('pageToken', pageToken);

    try {
      const uri = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;
      const res = await fetch(uri);

      if (!res.ok) throw res;

      const apiResult = await res.json();

      const completeResult = await Promise.all(
        apiResult.items.map(async (item) => {
          const {
            snippet: {
              channelId, publishedAt, title, channelTitle, thumbnails: videoPictures,
            },
          } = item;
          const channelParams = new URLSearchParams({
            key, part, fields: 'items(snippet(thumbnails))', id: channelId,
          });
          const channelUri = `https://www.googleapis.com/youtube/v3/channels?${channelParams.toString()}`;

          const channelRes = await fetch(channelUri);
          if (!channelRes.ok) throw channelRes;
          const channelResult = await channelRes.json();
          const { snippet: { thumbnails: channelPictures } } = channelResult.items[0];

          return {
            channelName: channelTitle, channelPictures, videoPictures, title, date: publishedAt,
          };
        }),
      );

      setResult(completeResult);
      setPageToken(apiResult?.nextPageToken);
    } catch (ex) {
      setError({ status: ex?.status, message: ex?.statusText ?? 'Ocurrió un error.' });
    } finally {
      setLoading(false);
    }
  };

  return {
    callApi, result, error, loading,
  };
}

export default useYoutubeApi;
