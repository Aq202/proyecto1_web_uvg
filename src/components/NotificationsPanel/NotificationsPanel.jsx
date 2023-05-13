import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './NotificationsPanel.module.css';
import NavbarButton from '../NavbarButton/NavbarButton';
import Spinner from '../Spinner/Spinner';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import NotificationItem from '../NotificationItem/NotificationItem';

function NotificationsPanel() {
  const [notificationsList, setNotificationsList] = useState([]);
  const {
    callApi, result, error,
  } = useYoutubeApi();

  useEffect(() => {
    callApi(5);
  }, []);

  useEffect(() => {
    if (!result) return;
    setNotificationsList((prev) => [...prev, ...result]);
  }, [result]);

  useEffect(() => {
  }, [error]);

  return (
    <div className={styles.notificationsPanel}>
      <div className={styles.header}>
        <span>Notificaciones</span>
        <NavbarButton title="Configuracion">
          <svg
            display="block"
            pointerEvents="none"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.22-5 0.55 2.2 0.13 0.51 0.5 0.18c0.61 0.23 1.19 0.56 1.72 0.98l0.4 0.32 0.5-0.14 2.17-0.62 1.22 2.11-1.63 1.59-0.37 0.36 0.08 0.51c0.05 0.32 0.08 0.64 0.08 0.98s-0.03 0.66-0.08 0.98l-0.08 0.51 0.37 0.36 1.63 1.59-1.22 2.11-2.17-0.62-0.5-0.14-0.4 0.32c-0.53 0.43-1.11 0.76-1.72 0.98l-0.5 0.18-0.13 0.51-0.55 2.24h-2.44l-0.55-2.2-0.13-0.51-0.5-0.18c-0.6-0.23-1.18-0.56-1.72-0.99l-0.4-0.32-0.5 0.14-2.17 0.62-1.21-2.12 1.63-1.59 0.37-0.36-0.08-0.51c-0.05-0.32-0.08-0.65-0.08-0.98s0.03-0.66 0.08-0.98l0.08-0.51-0.37-0.36-1.63-1.59 1.22-2.11 2.17 0.62 0.5 0.14 0.4-0.32c0.53-0.44 1.11-0.77 1.72-0.99l0.5-0.18 0.13-0.51 0.54-2.21h2.44m0.78-1h-4l-0.74 2.96c-0.73 0.27-1.4 0.66-2 1.14l-2.92-0.83-2 3.46 2.19 2.13c-0.06 0.37-0.09 0.75-0.09 1.14s0.03 0.77 0.09 1.14l-2.19 2.13 2 3.46 2.92-0.83c0.6 0.48 1.27 0.87 2 1.14l0.74 2.96h4l0.74-2.96c0.73-0.27 1.4-0.66 2-1.14l2.92 0.83 2-3.46-2.19-2.13c0.06-0.37 0.09-0.75 0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13-2-3.46-2.92 0.83c-0.6-0.48-1.27-0.87-2-1.14l-0.74-2.96z" />
            </g>
          </svg>
        </NavbarButton>
      </div>

      {notificationsList.length === 0 && (
      <div className={styles.initialLoading}>
        <Spinner className={styles.spinner} />
      </div>
      )}

      {notificationsList.length > 0 && (
      <div className={styles.notificationsContainer}>
        {notificationsList.map((notif) => (
          <NotificationItem
            channelName={notif.channelName}
            channelPicture={notif.channelPictures.default.url}
            videoPicture={notif.videoPictures.default.url}
            title={notif.title}
            date={notif.date}
          />
        ))}
      </div>
      )}

    </div>
  );
}

export default NotificationsPanel;

NotificationsPanel.propTypes = {};

NotificationsPanel.defaultProps = {};
