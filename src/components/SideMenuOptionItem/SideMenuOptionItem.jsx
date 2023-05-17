import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideMenuOptionItem.module.css';

function SideMenuOptionItem({ children, title, selected }) {
  return (
    <a href="/" className={styles.optionItemContainer}>
      <div className={`${styles.optionItem} ${selected ? styles.selected : ''}`}>
        <div className={styles.iconContainer}>{children}</div>
        <span>{title}</span>
      </div>
    </a>
  );
}

export default SideMenuOptionItem;

SideMenuOptionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

SideMenuOptionItem.defaultProps = {
  selected: false,
};
