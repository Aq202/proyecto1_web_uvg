import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotificationConfigMenu.module.css';
import MenuOptionItem from '../MenuOptionItem/MenuOptionItem';

function NotificationConfigMenu({ chanelName }) {
  return (
    <div className={styles.notificationConfigMenu}>
      <MenuOptionItem title="Ocultar esta notificación">
        <svg display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="m3.85 3.15-0.7 0.7 3.04 3.05c-1.88 1.21-3.36 2.99-4.19 5.1 1.57 3.99 5.45 6.82 10 6.82 1.77 0 3.44-0.43 4.92-1.2l3.23 3.23 0.71-0.71-17.01-16.99zm9.95 11.35c-0.51 0.37-1.13 0.59-1.8 0.59-1.7 0-3.09-1.39-3.09-3.09 0-0.67 0.22-1.29 0.59-1.8l4.3 4.3zm-1.8 3.32c-3.9 0-7.35-2.27-8.92-5.82 0.82-1.87 2.18-3.36 3.83-4.38l1.88 1.88c-0.54 0.69-0.88 1.56-0.88 2.5 0 2.25 1.84 4.09 4.09 4.09 0.95 0 1.81-0.34 2.5-0.88l1.67 1.67c-1.27 0.61-2.69 0.94-4.17 0.94zm-0.51-9.87c0.17-0.02 0.34-0.05 0.51-0.05 2.25 0 4.09 1.84 4.09 4.09 0 0.17-0.02 0.34-0.05 0.51l-1.01-1.01c-0.21-1.31-1.24-2.33-2.55-2.55l-0.99-0.99zm-2.37-2.36c0.92-0.26 1.88-0.41 2.88-0.41 4.55 0 8.43 2.83 10 6.82-0.58 1.47-1.48 2.78-2.61 3.85l-0.72-0.72c0.93-0.87 1.71-1.92 2.25-3.13-1.57-3.55-5.02-5.82-8.92-5.82-0.7 0-1.39 0.08-2.06 0.22l-0.82-0.81z" />
          </g>
        </svg>
      </MenuOptionItem>
      <MenuOptionItem title={`No notificar nada de ${chanelName}`} />
    </div>
  );
}

export default NotificationConfigMenu;

NotificationConfigMenu.propTypes = {
  chanelName: PropTypes.string.isRequired,
};
