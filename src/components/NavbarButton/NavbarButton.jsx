import React from 'react';
import PropTypes from 'prop-types';
import { animated } from '@styles/buttonAnimation.module.css';
import styles from './NavbarButton.module.css';

function NavbarButton({
  children, title, className, onClick, containerClass,
}) {
  return (
    <div className={`${styles.container} ${containerClass}`}>
      <button
        className={`${styles.navButton} ${animated} ${className}`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
      {title && <span className={styles.title}>{title}</span>}
    </div>
  );
}

export default NavbarButton;

NavbarButton.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  containerClass: PropTypes.string,
};

NavbarButton.defaultProps = {
  title: null,
  className: '',
  onClick: null,
  containerClass: '',
};
