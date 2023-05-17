import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import styles from './SuscribedChannelsList.module.css';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import ChannelItem from '../ChannelItem/ChannelItem';

function SuscribedChannelsList() {
  const { callApi, result } = useYoutubeApi();

  useEffect(() => {
    callApi(7);
  }, []);

  return (
    <div className={styles.channelList}>
      {result?.map((item) => (
        <ChannelItem name={item.channelName} picture={item.channelPictures.default.url} />
      ))}
    </div>
  );
}

export default SuscribedChannelsList;

SuscribedChannelsList.propTypes = {};

SuscribedChannelsList.defaultProps = {};
