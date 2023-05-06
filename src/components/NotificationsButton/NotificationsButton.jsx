import React from 'react';
import useSwitch from '@hooks/useSwitch';
import NavbarButton from '../NavbarButton/NavbarButton';

function NotificationsButton() {
  const [selected, toogleSelected] = useSwitch(false);
  return (
    <NavbarButton onClick={toogleSelected} title="Notificaciones">
      {!selected ? (
        <svg
          display="block"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm10-2.65v1.65h-16v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98v-0.38c0-1.42 1.49-2.5 2.99-1.76 0.65 0.32 1.01 1.03 1.01 1.76v0.39c2.44 0.75 4 3.06 4 5.98v5.15l2 1.87zm-1 0.42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-0.53-2.64-0.5-3.84 0.03-1.88 0.76-3.03 2.64-3.03 5.07v5.47l-2 1.88v0.23h14v-0.23z" />
          </g>
        </svg>
      ) : (
        <svg
          display="block"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm10-2.65v1.65h-16v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98v-0.38c0-1.42 1.49-2.5 2.99-1.76 0.65 0.32 1.01 1.03 1.01 1.76v0.39c2.44 0.75 4 3.06 4 5.98v5.15l2 1.87z"
            />
          </g>
        </svg>
      )}
    </NavbarButton>
  );
}

export default NotificationsButton;
