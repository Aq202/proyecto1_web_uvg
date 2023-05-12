import React from 'react';
// import PropTypes from 'prop-types';
import randomString from '@helpers/randomString';
import styles from './SearchOptionsMenu.module.css';
import SearchMenuItem from '../SearchMenuItem';

const options = ['cómo aprender JS en 1 minuto', 'graduarme en computación sin saber programar', 'cómo hacer 10 labs de web en 1 día', 'videos motivacionales', 'por qué angular es mejor que react?', 'chatgpt me dejará sin chamba'];
function SearchOptionsMenu() {
  return (
    <ul className={styles.searchOptionsContainer}>
      {options.map((val) => <SearchMenuItem text={val} key={randomString(10)} />)}
    </ul>
  );
}

export default SearchOptionsMenu;

SearchOptionsMenu.propTypes = {

};

SearchOptionsMenu.defaultProps = {

};
