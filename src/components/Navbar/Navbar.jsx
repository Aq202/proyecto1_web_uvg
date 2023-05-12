import React from 'react';
// import PropTypes from 'prop-types';
import MenuButton from '@components/MenuButton';
import YoutubeLogo from '@components/YoutubeLogo';
import styles from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import NewVideoButton from '../NewVideoButton/NewVideoButton';
import NotificationsButton from '../NotificationsButton/NotificationsButton';
import ProfileImage from '../ProfileImage/ProfileImage';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttonsContainer}>
        <MenuButton />
        <YoutubeLogo />
      </div>
      <SearchBar />
      <div className={`${styles.buttonsContainer} ${styles.secondContainer}`}>
        <NewVideoButton />
        <NotificationsButton />
        <ProfileImage />
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {

};

Navbar.defaultProps = {

};