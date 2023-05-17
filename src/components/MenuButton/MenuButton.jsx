import React from 'react';
import PropTypes from 'prop-types';
import NavbarButton from '../NavbarButton/NavbarButton';

function MenuButton({ onClick }) {
  return (
    <NavbarButton onClick={onClick}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" />
        </g>
      </svg>
    </NavbarButton>
  );
}

export default MenuButton;

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
