import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import NavbarButton from '../NavbarButton/NavbarButton';

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <div className={styles.inputContainer}>
          {false && (
          <svg className={styles.searchIcon} display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m20.87 20.17-5.59-5.59c1.07-1.23 1.72-2.83 1.72-4.58 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-0.65 4.58-1.71l5.59 5.59 0.7-0.71zm-10.87-4.17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </g>
          </svg>
          )}
          <input type="text" placeholder="Buscar" />
        </div>
        <button className={styles.searchButton} type="button">
          <svg display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m20.87 20.17-5.59-5.59c1.07-1.23 1.72-2.83 1.72-4.58 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-0.65 4.58-1.71l5.59 5.59 0.7-0.71zm-10.87-4.17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </g>
          </svg>
        </button>
        <NavbarButton className={styles.talkButton}>
          <svg display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07v-5.86c0-1.7-1.34-3.07-3-3.07zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5h-1c0 3.24 2.39 5.93 5.5 6.41v2.59h2v-2.59c3.11-0.48 5.5-3.17 5.5-6.41z" />
            </g>
          </svg>
        </NavbarButton>
      </div>
    </div>
  );
}

export default SearchBar;
