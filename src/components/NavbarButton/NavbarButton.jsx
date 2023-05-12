import React from 'react';
import PropTypes from 'prop-types';
import { animated } from '@styles/buttonAnimation.module.css';
import styles from './NavbarButton.module.css';

function NavbarButton({
  children, subMenu, title, className, onClick, containerClass, refProp,
}) {
  return (
    <div className={`${styles.container} ${containerClass}`} ref={refProp}>
      <button
        className={`${styles.navButton} ${animated} ${className}`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
      {title && <span className={styles.title}>{title}</span>}
      {subMenu}
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
  subMenu: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  refProp: PropTypes.any,
};

NavbarButton.defaultProps = {
  title: null,
  className: '',
  onClick: null,
  containerClass: '',
  subMenu: null,
  refProp: null,
};
