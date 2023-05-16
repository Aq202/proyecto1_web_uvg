import React from 'react';
import styles from './ProfileMenu.module.css';
import MenuHr from '../MenuHr/MenuHr';
import MenuOptionItem from '../MenuOptionItem/MenuOptionItem';

function ProfileMenu() {
  return (
    <div className={styles.profileMenu}>

      <div className={styles.menuHeader}>
        <div className={styles.profileImage}>D</div>
        <div className={styles.headerData}>
          <span>Diego Morales</span>
          <span>@diegomorales9654</span>
          <a href="/">Gestionar tu cuenta de Google</a>
        </div>
      </div>

      <MenuHr className={styles.noMarginHr} />

      <div className={styles.optionsContainer}>

        <MenuOptionItem title="Tu canal">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m3 3v18h18v-18h-18zm1.99 17c0.39-2.62 2.38-5.1 7.01-5.1s6.62 2.48 7.01 5.1h-14.02zm4.01-10c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3.72 3.93c1.86-0.34 3.28-1.97 3.28-3.93 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.96 1.42 3.59 3.28 3.93-4.42 0.25-6.84 2.8-7.28 6v-15.93h16v15.93c-0.44-3.2-2.86-5.75-7.28-6z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuOptionItem title="YouTube Studio">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon" width="24" height="24" enableBackground="new 0 0 24 24">
              <path className="style-scope yt-icon" d="M10,9.35,15,12l-5,2.65ZM12,3a.73.73,0,0,0-.31.06L4.3,7.28A.79.79,0,0,0,4,7.8v8.4a.79.79,0,0,0,.3.52l7.39,4.22a.83.83,0,0,0,.62,0l7.39-4.22a.79.79,0,0,0,.3-.52V7.8a.79.79,0,0,0-.3-.52L12.31,3.06A.73.73,0,0,0,12,3m0-1a1.6,1.6,0,0,1,.8.19l7.4,4.22A1.77,1.77,0,0,1,21,7.8v8.4a1.77,1.77,0,0,1-.8,1.39l-7.4,4.22a1.78,1.78,0,0,1-1.6,0L3.8,17.59A1.77,1.77,0,0,1,3,16.2V7.8a1.77,1.77,0,0,1,.8-1.39l7.4-4.22A1.6,1.6,0,0,1,12,2Zm0,4a.42.42,0,0,0-.17,0l-4.7,2.8A.59.59,0,0,0,7,9.19V14.8a.65.65,0,0,0,.13.37l4.7,2.8A.42.42,0,0,0,12,18a.34.34,0,0,0,.17,0l4.7-2.81A.56.56,0,0,0,17,14.8V9.19a.62.62,0,0,0-.13-.37L12.17,6A.34.34,0,0,0,12,6m0-1a1.44,1.44,0,0,1,.69.17L17.39,8A1.46,1.46,0,0,1,18,9.19V14.8A1.46,1.46,0,0,1,17.39,16l-4.7,2.81A1.44,1.44,0,0,1,12,19a1.4,1.4,0,0,1-.68-.17L6.62,16A1.47,1.47,0,0,1,6,14.8V9.19A1.47,1.47,0,0,1,6.62,8l4.7-2.8A1.4,1.4,0,0,1,12,5Z" />
            </g>
          </svg>
        </MenuOptionItem>
        <MenuOptionItem title="Cambiar de cuenta" showArrow>
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z" />
            </g>
          </svg>

        </MenuOptionItem>

        <MenuOptionItem title="Cerrar Sesión">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuHr />

        <MenuOptionItem title="Compras y suscripciones">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0.45 8.95c-0.67-0.22-1.18-0.47-1.52-0.72-0.34-0.26-0.52-0.57-0.52-0.95 0-0.41 0.15-0.73 0.44-0.98s0.71-0.37 1.24-0.37c0.55 0 1.23 0.15 1.53 0.44 0.18 0.16 0.31 0.38 0.38 0.63h2c-0.07-0.46-0.26-0.88-0.49-1.27-0.33-0.55-0.78-0.98-1.37-1.28-0.35-0.18-0.73-0.28-1.14-0.36v-1.09h-2v1.12c-0.31 0.07-0.62 0.16-0.9 0.29-0.6 0.29-1.06 0.67-1.38 1.17-0.32 0.49-0.48 1.05-0.48 1.68 0 1.21 0.6 2.18 1.8 2.9 0.44 0.26 1.04 0.53 1.79 0.8s1.27 0.53 1.56 0.77 0.43 0.59 0.43 1.05c0 0.42-0.14 0.74-0.43 0.97s-0.69 0.35-1.21 0.35c-1.05 0-1.92-0.37-2.18-1.1h-2c0.08 0.42 0.22 0.81 0.44 1.16 0.35 0.57 0.86 1.02 1.52 1.35 0.33 0.16 0.67 0.28 1.04 0.37v1.12h2v-1.05c0.79-0.11 1.45-0.38 1.97-0.81 0.69-0.57 1.03-1.37 1.03-2.38 0-0.91-0.28-1.67-0.85-2.28s-1.46-1.12-2.7-1.53z" />
            </g>
          </svg>

        </MenuOptionItem>

        <MenuOptionItem title="Tus datos en YouTube">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m12 3.06 7 3.21v4.84c0 1.3-0.25 2.6-0.75 3.86-0.15 0.37-0.33 0.76-0.55 1.17-0.15 0.27-0.31 0.54-0.48 0.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-0.56-3.91-1.97-5.23-3.98-0.17-0.27-0.33-0.54-0.48-0.81-0.22-0.41-0.4-0.79-0.55-1.17-0.48-1.26-0.73-2.56-0.73-3.86v-4.84l7-3.21m0-1.1-8 3.67v5.49c0 1.47 0.3 2.9 0.81 4.22 0.17 0.44 0.37 0.86 0.6 1.28 0.16 0.3 0.34 0.6 0.52 0.88 1.42 2.17 3.52 3.82 5.95 4.44l0.12 0.02 0.12-0.03c2.43-0.61 4.53-2.26 5.95-4.43 0.19-0.29 0.36-0.58 0.52-0.88 0.22-0.41 0.43-0.84 0.6-1.28 0.51-1.33 0.81-2.76 0.81-4.23v-5.48l-8-3.67zm1.08 10.15c-0.32-0.06-0.64-0.11-0.96-0.12 1.6-0.07 2.88-1.37 2.88-2.99 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.62 1.28 2.92 2.88 2.99-0.32 0.01-0.64 0.06-0.96 0.12-2.28 0.47-3.92 2.51-3.92 4.89h10c0-2.38-1.64-4.42-3.92-4.89zm-3.08-3.11c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm1.12 4.09c0.37-0.08 0.64-0.11 0.88-0.11s0.51 0.03 0.88 0.11c1.48 0.3 2.63 1.46 3 2.91h-7.76c0.37-1.45 1.52-2.61 3-2.91z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuHr />

        <MenuOptionItem title="Aspecto: oscuro" showArrow>
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"><g className="style-scope yt-icon"><path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z" className="style-scope yt-icon" /></g></svg>
        </MenuOptionItem>

        <MenuOptionItem title="Idioma: Español" showArrow>
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m12.26 16.18-2.93-2.87c-0.8 0.86-1.64 1.71-2.48 2.54l-2.25 2.25-0.7-0.7 2.25-2.25c0.84-0.84 1.68-1.69 2.48-2.55-1.18-1.23-2.17-2.64-2.9-4.18v-0.02h1.14c0.65 1.26 1.47 2.43 2.44 3.45 1.59-1.81 2.89-3.69 3.43-5.7h-10.66v-1h6.65v-2.15h1v2.15h6.78v1h-2.73c-0.54 2.32-2.01 4.42-3.77 6.42l2.63 2.58c-0.13 0.35-0.25 0.67-0.38 1.03zm9.25 4.83h-0.95l-1.12-3.04h-4.91l-1.11 3.04h-0.96l4.09-10.81h0.87l4.09 10.81zm-2.36-3.81-2.17-5.89-2.17 5.89h4.34z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuOptionItem title="Modo Restringido: desactivado" showArrow>
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m12 20.95q-3.025-0.875-5.013-3.638-1.987-2.762-1.987-6.212v-5.4l7-2.625 7 2.625v5.65q-0.225-0.075-0.5-0.15t-0.5-0.125v-4.7l-6-2.225-6 2.225v4.725q0 1.475 0.438 2.838 0.437 1.362 1.187 2.5 0.75 1.137 1.788 1.987 1.037 0.85 2.212 1.3l0.05-0.025q0.125 0.3 0.3 0.588 0.175 0.287 0.4 0.537-0.1 0.025-0.187 0.063-0.088 0.037-0.188 0.062zm5-3.95q0.625 0 1.062-0.438 0.438-0.437 0.438-1.062t-0.438-1.062q-0.437-0.438-1.062-0.438t-1.062 0.438q-0.438 0.437-0.438 1.062t0.438 1.062q0.437 0.438 1.062 0.438zm0 3q0.8 0 1.438-0.35 0.637-0.35 1.062-0.95-0.575-0.35-1.2-0.525t-1.3-0.175-1.3 0.175-1.2 0.525q0.425 0.6 1.062 0.95 0.638 0.35 1.438 0.35zm0 1q-1.675 0-2.837-1.163-1.163-1.162-1.163-2.837t1.163-2.838q1.162-1.162 2.837-1.162t2.837 1.162q1.163 1.163 1.163 2.838t-1.163 2.837q-1.162 1.163-2.837 1.163zm-5-9.05z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuOptionItem title="Ubicación: Guatemala" showArrow>
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m11.99 1.98c-5.53 0-10.01 4.49-10.01 10.02s4.48 10.02 10.01 10.02c5.54 0 10.03-4.49 10.03-10.02s-4.49-10.02-10.03-10.02zm-3.13 12.52c-0.16-0.82-0.25-1.65-0.25-2.5 0-0.87 0.09-1.72 0.26-2.55h6.27c0.17 0.83 0.26 1.68 0.26 2.55 0 0.85-0.09 1.68-0.25 2.5h-6.29zm6.03 1c-0.54 1.89-1.52 3.64-2.89 5.15-1.37-1.5-2.35-3.25-2.89-5.15h5.78zm-5.77-7.05c0.54-1.87 1.52-3.61 2.88-5.1 1.36 1.49 2.34 3.22 2.88 5.1h-5.76zm7.03 1h4.5c0.24 0.81 0.37 1.66 0.37 2.55 0 0.87-0.13 1.71-0.36 2.5h-4.51c0.15-0.82 0.24-1.65 0.24-2.5 0-0.87-0.09-1.72-0.24-2.55zm4.14-1h-4.38c-0.53-1.97-1.47-3.81-2.83-5.4 3.25 0.4 5.96 2.51 7.21 5.4zm-9.37-5.4c-1.35 1.59-2.3 3.43-2.83 5.4h-4.38c1.24-2.9 3.96-5.01 7.21-5.4zm-7.57 6.4h4.5c-0.15 0.83-0.24 1.68-0.24 2.55 0 0.85 0.09 1.68 0.24 2.5h-4.51c-0.23-0.79-0.36-1.63-0.36-2.5 0-0.89 0.13-1.74 0.37-2.55zm0.34 6.05h4.39c0.52 1.99 1.48 3.85 2.84 5.45-3.27-0.39-6-2.53-7.23-5.45zm9.4 5.45c1.36-1.6 2.32-3.46 2.84-5.45h4.39c-1.24 2.92-3.97 5.05-7.23 5.45z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuOptionItem title="Combinación de teclas">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"><g className="style-scope yt-icon"><path d="M16,16H8v-2h8V16z M16,11h-2v2h2V11z M19,11h-2v2h2V11z M13,11h-2v2h2V11z M10,11H8v2h2V11z M7,11H5v2h2V11z M16,8h-2v2h2V8 z M19,8h-2v2h2V8z M13,8h-2v2h2V8z M10,8H8v2h2V8z M7,8H5v2h2V8z M22,5v14H2V5H22z M21,6H3v12h18V6z" className="style-scope yt-icon" /></g></svg>
        </MenuOptionItem>

        <MenuHr />

        <MenuOptionItem title="Configuración">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.22-5 0.55 2.2 0.13 0.51 0.5 0.18c0.61 0.23 1.19 0.56 1.72 0.98l0.4 0.32 0.5-0.14 2.17-0.62 1.22 2.11-1.63 1.59-0.37 0.36 0.08 0.51c0.05 0.32 0.08 0.64 0.08 0.98s-0.03 0.66-0.08 0.98l-0.08 0.51 0.37 0.36 1.63 1.59-1.22 2.11-2.17-0.62-0.5-0.14-0.4 0.32c-0.53 0.43-1.11 0.76-1.72 0.98l-0.5 0.18-0.13 0.51-0.55 2.24h-2.44l-0.55-2.2-0.13-0.51-0.5-0.18c-0.6-0.23-1.18-0.56-1.72-0.99l-0.4-0.32-0.5 0.14-2.17 0.62-1.21-2.12 1.63-1.59 0.37-0.36-0.08-0.51c-0.05-0.32-0.08-0.65-0.08-0.98s0.03-0.66 0.08-0.98l0.08-0.51-0.37-0.36-1.63-1.59 1.22-2.11 2.17 0.62 0.5 0.14 0.4-0.32c0.53-0.44 1.11-0.77 1.72-0.99l0.5-0.18 0.13-0.51 0.54-2.21h2.44m0.78-1h-4l-0.74 2.96c-0.73 0.27-1.4 0.66-2 1.14l-2.92-0.83-2 3.46 2.19 2.13c-0.06 0.37-0.09 0.75-0.09 1.14s0.03 0.77 0.09 1.14l-2.19 2.13 2 3.46 2.92-0.83c0.6 0.48 1.27 0.87 2 1.14l0.74 2.96h4l0.74-2.96c0.73-0.27 1.4-0.66 2-1.14l2.92 0.83 2-3.46-2.19-2.13c0.06-0.37 0.09-0.75 0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13-2-3.46-2.92 0.83c-0.6-0.48-1.27-0.87-2-1.14l-0.74-2.96z" />
            </g>
          </svg>

        </MenuOptionItem>

        <MenuHr />

        <MenuOptionItem title="Ayuda">
          <svg className="style-scope yt-icon" display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g className="style-scope yt-icon">
              <path className="style-scope yt-icon" d="m15.36 9.96c0 1.09-0.67 1.67-1.31 2.24-0.53 0.47-1.03 0.9-1.16 1.6l-0.04 0.2h-1.75l0.03-0.28c0.14-1.17 0.8-1.76 1.47-2.27 0.52-0.4 1.01-0.77 1.01-1.49 0-0.51-0.23-0.97-0.63-1.29-0.4-0.31-0.92-0.42-1.42-0.29-0.59 0.15-1.05 0.67-1.19 1.34l-0.05 0.28h-1.75l0.06-0.42c0.2-1.4 1.15-2.53 2.42-2.87 1.05-0.29 2.14-0.08 2.98 0.57 0.85 0.64 1.33 1.62 1.33 2.68zm-3.36 8.04c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10z" />
            </g>
          </svg>
        </MenuOptionItem>

        <MenuOptionItem title="Enviar sugerencias">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"><g className="style-scope yt-icon"><path d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z" className="style-scope yt-icon" /></g></svg>
        </MenuOptionItem>
      </div>

    </div>
  );
}

export default ProfileMenu;
