import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuHr.module.css';

function MenuHr({ className }) {
  return (
    <hr className={`${styles.line} ${className}`} />
  );
}

export default MenuHr;

MenuHr.propTypes = {
  className: PropTypes.string,
};

MenuHr.defaultProps = {
  className: '',
};
