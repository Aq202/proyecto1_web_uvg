import React, { useEffect, useState } from 'react';
import styles from './VideosContainer.module.css';
import VideoItem from '../VideoItem/VideoItem';
import useYoutubeApi from '../../hooks/useYoutubeApi';

function VideosContainer() {
  const [videosList, setVideosList] = useState([]);
  const {
    callApi, result,
  } = useYoutubeApi();

  useEffect(() => {
    callApi(30);
  }, []);

  useEffect(() => {
    if (!result) return;
    setVideosList((prev) => [...prev, ...result]);
  }, [result]);

  return (
    <div className={styles.videosContainer}>
      {videosList.map((video) => (
        <VideoItem
          key={video.id}
          channelName={video.channelName}
          channelPicture={video.channelPictures.default.url}
          videoPicture={video.videoPictures.high.url}
          title={video.title}
          date={video.date}
        />
      ))}
    </div>
  );
}

export default VideosContainer;
