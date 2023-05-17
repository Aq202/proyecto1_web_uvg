import React from 'react';
import Navbar from '@components/Navbar';
import styles from './App.module.css';
import VideosContainer from '../VideosContainer/VideosContainer';
import SideMenu from '../SideMenu/SideMenu';
import SideMenuMinimized from '../SideMenuMinimized/SideMenuMinimized';
import useSwitch from '../../hooks/useSwitch';

function App() {
  const [menuSwitch, toogleMenu] = useSwitch(true);

  return (
    <div className={styles.appContainer}>
      <Navbar menuClickHandler={toogleMenu} />
      { menuSwitch ? <SideMenu /> : <SideMenuMinimized /> }
      <VideosContainer />
    </div>
  );
}

export default App;
