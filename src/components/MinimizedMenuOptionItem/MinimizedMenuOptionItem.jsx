import React from 'react';
import PropTypes from 'prop-types';
import styles from './MinimizedMenuOptionItem.module.css';

function MinimizedMenuOptionItem({ children, title }) {
  return (
    <a href="/" className={styles.optionItemContainer}>
      <div className={`${styles.optionItem}`}>
        <div className={styles.iconContainer}>{children}</div>
        <span>{title}</span>
      </div>
    </a>
  );
}

export default MinimizedMenuOptionItem;

MinimizedMenuOptionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

MinimizedMenuOptionItem.defaultProps = {
};
