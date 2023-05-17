import React from 'react';
// import PropTypes from 'prop-types';
import Navbar from '@components/Navbar';
import styles from './App.module.css';
import VideosContainer from '../VideosContainer/VideosContainer';
import SideMenu from '../SideMenu/SideMenu';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <SideMenu />
      <VideosContainer />
    </div>
  );
}

export default App;
