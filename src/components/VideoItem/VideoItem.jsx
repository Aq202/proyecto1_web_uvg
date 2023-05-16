import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './VideoItem.module.css';
import NavbarButton from '../NavbarButton/NavbarButton';
import 'moment/dist/locale/es';
import VideoConfigMenu from '../VideoConfigMenu/VideoConfigMenu';
import useSwitch from '../../hooks/useSwitch';
import useOutsideClick from '../../hooks/useOutsideClick';

moment.locale('es');

function VideoItem({
  channelPicture, title, date, videoPicture, channelName,
}) {
  const [menuButtonSelected, toogleSelected] = useSwitch(false);
  const menuRef = useOutsideClick(toogleSelected, menuButtonSelected);

  return (
    <div className={styles.videoItem}>
      <div className={styles.imageContainer}>
        <img src={videoPicture} alt="Video image" />
        <span className={styles.duration}>10:10</span>
      </div>

      <div className={styles.infoContainer}>
        <img className={styles.channelImage} src={channelPicture} alt="Channel img" />
        <div className={styles.dataContainer}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.horizontalData}>
            <span>{channelName}</span>
            <svg
              className={styles.verifiedIcon}
              display="block"
              pointerEvents="none"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-2.2 15.3-4.2-4.1 1.4-1.4 2.8 2.7 7.2-7.1 1.4 1.4-8.6 8.5z" />
              </g>
            </svg>
          </div>
          <div className={styles.horizontalData}>
            <span>135K visualizaciones</span>
            <span className={styles.circle} />
            <span>{moment(date).fromNow()}</span>
          </div>
        </div>
        <NavbarButton
          className={styles.moreButton}
          subMenu={menuButtonSelected && <VideoConfigMenu />}
          onClick={toogleSelected}
          refProp={menuRef}
        >
          <svg
            display="block"
            pointerEvents="none"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m12 16.5c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5zm-1.5-4.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5-1.5 0.67-1.5 1.5zm0-6c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5-1.5 0.67-1.5 1.5z" />
            </g>
          </svg>
        </NavbarButton>
      </div>
    </div>
  );
}

export default VideoItem;

VideoItem.propTypes = {
  channelPicture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  videoPicture: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};
