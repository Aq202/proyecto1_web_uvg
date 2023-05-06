import React from 'react';
// import PropTypes from 'prop-types';
import Navbar from '@components/Navbar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
    </div>
  );
}

export default App;
