import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchMenuItem.module.css';

function SearchMenuItem({ text }) {
  return (
    <li className={styles.menuItem}>
      <span className={styles.loadIcon} />
      <span className={styles.text}>{text}</span>
      <a href="/">Eliminar</a>
    </li>
  );
}

export default SearchMenuItem;

SearchMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};

SearchMenuItem.defaultProps = {

};
