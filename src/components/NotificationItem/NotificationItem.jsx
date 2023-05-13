import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './NotificationItem.module.css';
import NavbarButton from '../NavbarButton/NavbarButton';
import NotificationConfigMenu from '../NotificationConfigMenu/NotificationConfigMenu';
import useSwitch from '../../hooks/useSwitch';
import useOutsideClick from '../../hooks/useOutsideClick';
import 'moment/dist/locale/es';

moment.locale('es');
function NotificationItem({
  channelPicture, title, date, videoPicture, channelName,
}) {
  const [isConfigMenuVisible, toogleConfigMenuVisible] = useSwitch(false);
  const configMenuRef = useOutsideClick(toogleConfigMenuVisible, isConfigMenuVisible);

  return (
    <div className={styles.notificationItem}>
      <a href="/" className={styles.notificationItemContainer}>
        <div className={styles.imageContainer}>
          <span className={styles.circle} />
          <img
            src={channelPicture}
            alt="perfil"
          />
        </div>
        <div className={styles.body}>
          <h2>{`${channelName} ha subido ${title}`}</h2>
          <span>{moment(date).fromNow()}</span>
        </div>
        <div className={styles.miniatura}>
          <img src={videoPicture} alt="miniatura" />
        </div>
      </a>
      <NavbarButton
        onClick={toogleConfigMenuVisible}
        subMenu={
          isConfigMenuVisible && (
            <NotificationConfigMenu chanelName={channelName} />
          )
        }
        refProp={configMenuRef}
        className={styles.configButton}
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
  );
}

export default NotificationItem;

NotificationItem.propTypes = {
  channelPicture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  videoPicture: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {};
