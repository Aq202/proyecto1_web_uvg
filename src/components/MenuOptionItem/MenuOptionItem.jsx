import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuOptionItem.module.css';

function MenuOptionItem({ children, title, showArrow }) {
  return (
    <a href="/" className={styles.optionItemContainer}>
      <div className={`${styles.optionItem} ${showArrow ? styles.itemWithArrow : ''}`}>
        <div className={styles.iconContainer}>{children}</div>
        <span>{title}</span>
        {showArrow && (
        <div className={styles.arrowContainer}>
          <svg display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m9.4 18.4-0.7-0.7 5.6-5.6-5.7-5.7 0.7-0.7 6.4 6.4-6.3 6.3z" />
            </g>
          </svg>
        </div>
        )}
      </div>
    </a>
  );
}

export default MenuOptionItem;

MenuOptionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  showArrow: PropTypes.bool,
};

MenuOptionItem.defaultProps = {
  showArrow: false,
};
