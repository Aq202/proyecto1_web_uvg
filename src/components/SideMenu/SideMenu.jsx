import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SideMenu.module.css';
import SideMenuOptionItem from '../SideMenuOptionItem/SideMenuOptionItem';
import MenuHr from '../MenuHr/MenuHr';
import SuscribedChannelsList from '../SuscribedChannelsList/SuscribedChannelsList';
import SideMenuLinks from '../SideMenuLinks/SideMenuLinks';

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <SideMenuOptionItem title="Inicio" selected>
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path className="style-scope yt-icon" d="M4,10V21h6V15h4v6h6V10L12,3Z" />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Shorts">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon" width="24" height="24">
            <path
              className="style-scope yt-icon"
              d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Suscripciones">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <MenuHr />

      <SideMenuOptionItem title="Mi biblioteca">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Historial">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Mis vídeos">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Ver más tarde">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Vídeos que me gustan">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m18.77 11h-4.23l1.52-4.94c0.32-1.03-0.52-2.06-1.68-2.06-0.58 0-1.14 0.24-1.52 0.65l-5.86 6.35h-4v10h14.43c1.06 0 1.98-0.67 2.19-1.61l1.34-6c0.27-1.24-0.78-2.39-2.19-2.39zm-11.77 9h-3v-8h3v8zm12.98-6.83-1.34 6c-0.1 0.48-0.61 0.83-1.21 0.83h-9.43v-8.61l5.6-6.06c0.19-0.21 0.48-0.33 0.78-0.33 0.26 0 0.5 0.11 0.63 0.3 0.07 0.1 0.15 0.26 0.09 0.47l-1.52 4.94-0.4 1.29h5.58c0.41 0 0.8 0.17 1.03 0.46 0.13 0.15 0.26 0.4 0.19 0.71z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Mostrar más">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m12 15.7-6.4-6.3 0.7-0.7 5.6 5.6 5.6-5.6 0.7 0.7-6.2 6.3z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <MenuHr />

      <h3>Suscripciones</h3>

      <SuscribedChannelsList />

      <MenuHr />

      <h3>Explorar</h3>

      <SideMenuOptionItem title="Tendencias">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m14.72 17.84c-0.32 0.27-0.83 0.53-1.23 0.66-1.34 0.33-2.41-0.34-2.62-0.46-0.21-0.11-0.78-0.38-0.78-0.38s0.35-0.11 0.41-0.13c1.34-0.54 1.89-1.24 2.09-2.11 0.2-0.84-0.16-1.56-0.31-2.39-0.12-0.69-0.11-1.28 0.12-1.9 0.02-0.05 0.12-0.43 0.12-0.43s0.11 0.35 0.13 0.41c0.71 1.51 2.72 2.18 3.07 3.84 0.03 0.15 0.05 0.3 0.05 0.46 0.03 0.89-0.37 1.85-1.05 2.43zm-2.32-13.5c-0.12 0.08-0.22 0.15-0.31 0.22-2.99 2.31-2.91 5.93-2.31 8.55l0.02 0.06c0.06 0.35-0.05 0.7-0.28 0.96-0.24 0.26-0.58 0.41-0.95 0.41-0.44 0-0.85-0.2-1.22-0.6-0.67-0.73-1.17-1.57-1.5-2.46-0.36 0.77-0.75 1.98-0.67 3.19 0.04 0.51 0.12 1 0.25 1.43 0.18 0.6 0.43 1.16 0.75 1.65 1.05 1.66 2.88 2.82 4.78 3.05 0.42 0.05 0.85 0.08 1.26 0.08 1.34 0 3.25-0.27 4.74-1.57 1.77-1.56 2.35-3.99 1.44-6.06-0.04-0.1-0.06-0.14-0.09-0.19l-0.04-0.08c-0.21-0.42-0.47-0.81-0.75-1.14-0.24-0.3-0.48-0.56-0.79-0.83-0.3-0.27-0.64-0.51-1-0.77-0.46-0.33-0.93-0.67-1.38-1.09-1.37-1.32-2.05-3.04-1.95-4.81m2.01-2.34s-0.2 0.2-0.56 0.99c-0.66 1.92-0.15 3.95 1.34 5.39 0.73 0.69 1.61 1.17 2.36 1.84 0.32 0.29 0.62 0.59 0.89 0.93 0.36 0.42 0.66 0.89 0.91 1.38 0.05 0.1 0.1 0.2 0.14 0.3 1.12 2.55 0.36 5.47-1.73 7.31-1.53 1.33-3.54 1.86-5.54 1.86-0.47 0-0.95-0.03-1.41-0.09-2.29-0.28-4.42-1.66-5.63-3.57-0.39-0.6-0.68-1.26-0.88-1.93-0.16-0.54-0.25-1.1-0.29-1.67-0.12-1.88 0.67-3.63 1.08-4.31 0.41-0.69 1.55-2.18 1.55-2.18s0 0.03-0.01 0.09c-0.22 1.77 0.37 3.54 1.59 4.88 0.15 0.17 0.27 0.22 0.34 0.22 0.06 0 0.09-0.04 0.08-0.09-0.85-3.76-0.27-7.35 2.71-9.65 0.59-0.46 1.51-0.94 1.98-1.18s1.08-0.52 1.08-0.52z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Música">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m12 4v9.38c-0.73-0.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-8h6v-4h-7zm-3 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5v-2h5v2z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Videojuegos">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m10 12h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm7 0.5c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5 0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5zm3-3c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5 0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5zm-3.03-4.35-4.5 2.53-0.49 0.27-0.49-0.27-4.5-2.53-3.99 2.24v6.43l8.98 5.04 8.98-5.04v-6.43l-3.99-2.24m0-1.15 4.99 2.8v7.6l-9.98 5.6-9.98-5.6v-7.6l4.99-2.8 4.99 2.8 4.99-2.8z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Deportes">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m17 3v7.51l-0.01 0.46c-0.05 2.13-1.33 3.97-3.25 4.7h-0.02l-0.06 0.02-0.66 0.26v4.05h1v1h1-5v-1h1v-4.05l-0.66-0.24-0.08-0.03h-0.01c-1.92-0.73-3.2-2.57-3.25-4.7v-7.98h10zm1-1h-12v3h-2v6h2.01c0.06 2.53 1.62 4.78 3.96 5.64 0.01 0 0.02 0 0.03 0.01v2.35h-1v1h-1v2h8v-2h-1v-1h-1v-2.35c0.01 0 0.02 0 0.03-0.01 2.33-0.86 3.9-3.1 3.96-5.64h2.01v-6h-2v-3zm0 8v-4h1v4h-1zm-13 0v-4h1v4h-1z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Aprendizaje">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M16,21h-2.28c-0.35,0.6-0.98,1-1.72,1s-1.38-0.4-1.72-1H8v-1h8V21z M20,10c0,2.96-1.61,5.54-4,6.92V19H8v-2.08 C5.61,15.54,4,12.96,4,10c0-4.42,3.58-8,8-8S20,5.58,20,10z M15,18v-1.66l0.5-0.29C17.66,14.8,19,12.48,19,10c0-3.86-3.14-7-7-7 s-7,3.14-7,7c0,2.48,1.34,4.8,3.5,6.06L9,16.34V18H15z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <MenuHr />

      <h3>Más de YouTube</h3>

      <SideMenuOptionItem title="YouTube Premium">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <g className="style-scope yt-icon" fill="none" fillRule="evenodd">
              <path className="style-scope yt-icon" d="M1 1h21.77v22H1z" />
              <g className="style-scope yt-icon" fillRule="nonzero">
                <path
                  className="style-scope yt-icon"
                  d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                  fill="#F00"
                />
                <path className="style-scope yt-icon" d="m9.68 8.9v6.18l5.84-3.1" fill="#FAFAFA" />
                <path
                  className="style-scope yt-icon"
                  d="M9.68 8.88l5.13 3.48.73-.38"
                  fill="#000"
                  fillOpacity=".12"
                />
                <path
                  className="style-scope yt-icon"
                  d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                  fill="#FFF"
                  fillOpacity=".2"
                />
                <path
                  className="style-scope yt-icon"
                  d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                  fill="#3E2723"
                  fillOpacity=".2"
                />
                <path
                  className="style-scope yt-icon"
                  d="M9.68 15.08v.1l5.84-3.08v-.12"
                  fill="#FFF"
                  fillOpacity=".2"
                />
                <path
                  className="style-scope yt-icon"
                  d="M9.68 8.9v-.13l5.84 3.1v.1"
                  fill="#3E2723"
                  fillOpacity=".2"
                />
                <path
                  className="style-scope yt-icon"
                  transform="translate(1 4.208)"
                  d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                  fill="url(#youtube_round__a)"
                  fillOpacity=".1"
                />
              </g>
            </g>
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="YouTube Studio">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
              fill="red"
            />
            <path
              className="style-scope yt-icon"
              d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
              fill="#fff"
            />
            <path
              className="style-scope yt-icon"
              d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
              fill="red"
            />
            <path className="style-scope yt-icon" d="M9.88 15.25 15.5 12 9.88 8.75z" fill="#fff" />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="YouTube Music">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <circle className="style-scope yt-icon" cx="12" cy="12" r="10" fill="#f00" />
            <polygon className="style-scope yt-icon" points="10 14.65 10 9.35 15 12" fill="#fff" />
            <path
              className="style-scope yt-icon"
              d="m12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-1c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
              fill="#fff"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="YouTube Kids">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          style={{ fill: 'black' }}
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m21.39 13.19v-0.22c-0.01-0.86-0.5-5-0.78-5.74-0.32-0.85-0.76-1.5-1.31-1.91-0.9-0.67-1.66-0.82-2.6-0.84h-0.02c-0.4 0-3.01 0.32-5.2 0.62-2.2 0.3-4.95 0.7-5.6 0.94-0.9 0.33-1.62 0.77-2.19 1.33-1.05 1.04-1.18 2.11-1.04 3.51 0.1 1.09 0.69 5.37 1.02 6.35 0.45 1.32 1.33 2.12 2.47 2.24 0.28 0.03 0.55 0.05 0.82 0.05 1 0 1.8-0.21 2.72-0.46 1.45-0.39 3.25-0.87 6.97-0.87h0.09 0.02c0.91 0 3.14-0.2 4.16-2.07 0.52-1 0.49-2.21 0.47-2.93z"
              fill="#f00"
            />
            <path
              className="style-scope yt-icon"
              d="m21.99 13.26c0-0.08 0-0.16-0.01-0.24-0.01-0.92-0.54-5.32-0.83-6.11-0.34-0.91-0.81-1.59-1.4-2.03-0.94-0.71-1.76-0.86-2.75-0.88h-0.02c-0.43 0-3.21 0.34-5.54 0.66s-5.25 0.75-5.95 1c-0.96 0.35-1.73 0.82-2.33 1.42-1.12 1.1-1.25 2.25-1.11 3.74 0.11 1.16 0.73 5.71 1.08 6.75 0.48 1.41 1.41 2.25 2.63 2.38 0.3 0.03 0.58 0.05 0.87 0.05 1.07 0 1.91-0.23 2.89-0.49 1.54-0.41 3.46-0.93 7.41-0.93h0.1 0.02c0.97 0 3.34-0.21 4.42-2.2 0.57-1.06 0.54-2.35 0.52-3.12zm-1.4 2.65c-0.82 1.51-2.75 1.68-3.56 1.68h-0.1c-4.09 0-6.07 0.53-7.67 0.96-0.95 0.25-1.7 0.45-2.63 0.45-0.25 0-0.5-0.01-0.76-0.04-1.04-0.11-1.54-0.99-1.79-1.71-0.3-0.88-0.91-5.21-1.04-6.53-0.14-1.47 0.06-2.18 0.82-2.93 0.5-0.5 1.15-0.89 1.97-1.19 0.17-0.06 1.1-0.32 5.74-0.95 2.63-0.36 5.07-0.64 5.42-0.65 0.83 0.02 1.43 0.13 2.17 0.69 0.43 0.32 0.79 0.86 1.06 1.58 0.22 0.58 0.76 4.78 0.77 5.77l0.01 0.25c0.01 0.67 0.04 1.79-0.41 2.62z"
            />
            <path
              className="style-scope yt-icon"
              d="m11.59 14.76c-0.48 0.36-0.8 0.45-1.01 0.45-0.16 0-0.25-0.05-0.3-0.08-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1c-0.04-0.31-0.26-2.1-0.38-3.16l-0.09-0.73c-0.04-0.28-0.1-0.75 0.24-1 0.32-0.23 0.75-0.09 0.96-0.03 0.53 0.17 3.6 1.23 4.59 1.73 0.21 0.09 0.67 0.28 0.68 0.83 0.01 0.5-0.38 0.74-0.53 0.82l-3.65 2.47z"
            />
            <path
              className="style-scope yt-icon"
              d="m10.3 9.89s0.5 4.08 0.51 4.19c0.06-0.04 3.79-2.58 3.79-2.58-0.89-0.43-3.53-1.36-4.3-1.61z"
              fill="#FFF"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <MenuHr />

      <SideMenuOptionItem title="Configuración">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.22-5 0.55 2.2 0.13 0.51 0.5 0.18c0.61 0.23 1.19 0.56 1.72 0.98l0.4 0.32 0.5-0.14 2.17-0.62 1.22 2.11-1.63 1.59-0.37 0.36 0.08 0.51c0.05 0.32 0.08 0.64 0.08 0.98s-0.03 0.66-0.08 0.98l-0.08 0.51 0.37 0.36 1.63 1.59-1.22 2.11-2.17-0.62-0.5-0.14-0.4 0.32c-0.53 0.43-1.11 0.76-1.72 0.98l-0.5 0.18-0.13 0.51-0.55 2.24h-2.44l-0.55-2.2-0.13-0.51-0.5-0.18c-0.6-0.23-1.18-0.56-1.72-0.99l-0.4-0.32-0.5 0.14-2.17 0.62-1.21-2.12 1.63-1.59 0.37-0.36-0.08-0.51c-0.05-0.32-0.08-0.65-0.08-0.98s0.03-0.66 0.08-0.98l0.08-0.51-0.37-0.36-1.63-1.59 1.22-2.11 2.17 0.62 0.5 0.14 0.4-0.32c0.53-0.44 1.11-0.77 1.72-0.99l0.5-0.18 0.13-0.51 0.54-2.21h2.44m0.78-1h-4l-0.74 2.96c-0.73 0.27-1.4 0.66-2 1.14l-2.92-0.83-2 3.46 2.19 2.13c-0.06 0.37-0.09 0.75-0.09 1.14s0.03 0.77 0.09 1.14l-2.19 2.13 2 3.46 2.92-0.83c0.6 0.48 1.27 0.87 2 1.14l0.74 2.96h4l0.74-2.96c0.73-0.27 1.4-0.66 2-1.14l2.92 0.83 2-3.46-2.19-2.13c0.06-0.37 0.09-0.75 0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13-2-3.46-2.92 0.83c-0.6-0.48-1.27-0.87-2-1.14l-0.74-2.96z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Historial de denuncias">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m13.18 4 0.4 2h5.42v7h-5.18l-0.4-2h-7.42v-7h7.18m0.82-1h-9v18h1v-9h6.6l0.4 2h7v-9h-5.6l-0.4-2z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Ayuda">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m15.36 9.96c0 1.09-0.67 1.67-1.31 2.24-0.53 0.47-1.03 0.9-1.16 1.6l-0.04 0.2h-1.75l0.03-0.28c0.14-1.17 0.8-1.76 1.47-2.27 0.52-0.4 1.01-0.77 1.01-1.49 0-0.51-0.23-0.97-0.63-1.29-0.4-0.31-0.92-0.42-1.42-0.29-0.59 0.15-1.05 0.67-1.19 1.34l-0.05 0.28h-1.75l0.06-0.42c0.2-1.4 1.15-2.53 2.42-2.87 1.05-0.29 2.14-0.08 2.98 0.57 0.85 0.64 1.33 1.62 1.33 2.68zm-3.36 8.04c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <SideMenuOptionItem title="Enviar sugerencias">
        <svg
          className="style-scope yt-icon"
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="style-scope yt-icon">
            <path
              className="style-scope yt-icon"
              d="m13 14h-2v-2h2v2zm0-9h-2v6h2v-6zm6-2h-14v16.59l3.59-3.59h10.41v-13m1-1v15h-11l-5 5v-20h16z"
            />
          </g>
        </svg>
      </SideMenuOptionItem>

      <MenuHr />

      <SideMenuLinks
        links={[
          'Información',
          'Prensa',
          'Derechos de autor',
          'Contactar',
          'Creadores',
          'Publicidad',
          'Desarrolladores',
        ]}
      />

      <SideMenuLinks
        links={[
          'Términos',
          'Privacidad',
          'Política y seguridad',
          'Cómo funciona YouTube',
          'Probar funciones nuevas',
        ]}
      />

      <span className={styles.privacyAlert}>© 2023 Google LLC</span>
    </div>
  );
}

export default SideMenu;

SideMenu.propTypes = {};

SideMenu.defaultProps = {};
