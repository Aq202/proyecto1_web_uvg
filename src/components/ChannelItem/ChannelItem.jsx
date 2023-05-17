import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChannelItem.module.css';

function ChannelItem({ picture, name }) {
  return (
    <a href="/" className={styles.optionItemContainer}>
      <div className={`${styles.optionItem}`}>
        <img src={picture} alt="channel picture" />
        <span className={styles.name}>{name}</span>
        <span className={styles.circle} />
      </div>
    </a>
  );
}

export default ChannelItem;

ChannelItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ChannelItem.defaultProps = {
};
