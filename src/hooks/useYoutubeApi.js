import { useEffect, useState } from 'react';
import { items } from '@helpers/apiData.json';
import useCount from './useCount';

function useYoutubeApi() {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [start, setStart] = useState(0);
  const [maxResults, setMaxResults] = useState();
  const [count, next] = useCount();

  useEffect(() => {
    if (!maxResults) return;
    setStart((str) => str + maxResults);
    setResult(items.slice(start, start + maxResults));
  }, [maxResults, count]);

  const callApi = async (max = 5) => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      setMaxResults(max);
      next();
    } catch (ex) {
      setError({ status: ex?.status, message: ex?.statusText ?? 'Ocurrió un error.' });
    } finally {
      setLoading(false);
    }
  };

  return {
    callApi,
    result,
    error,
    loading,
  };
}

export default useYoutubeApi;
