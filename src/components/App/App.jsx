import React from 'react';
// import PropTypes from 'prop-types';
import Navbar from '@components/Navbar';
import styles from './App.module.css';
import VideosContainer from '../VideosContainer/VideosContainer';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <VideosContainer />
    </div>
  );
}

export default App;
