import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideMenuLinks.module.css';

function SideMenuLinks({ links }) {
  return (
    <div className={styles.sideMenuLinks}>
      {links?.map((link) => <a href="#" key={link}>{link}</a>)}
    </div>
  );
}

export default SideMenuLinks;

SideMenuLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
