import React from 'react';
import PropTypes from 'prop-types';
import NavbarButton from '../NavbarButton/NavbarButton';

function ClearButton({ onClick, className }) {
  return (
    <NavbarButton onClick={onClick} title="Crear" containerClass={className}>
      <svg display="block" pointerEvents="none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m12.7 12 6.6 6.6-0.7 0.7-6.6-6.6-6.6 6.6-0.7-0.7 6.6-6.6-6.7-6.6 0.7-0.7 6.6 6.6 6.6-6.6 0.7 0.7-6.5 6.6z" />
        </g>
      </svg>
    </NavbarButton>
  );
}

export default ClearButton;

ClearButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ClearButton.defaultProps = {
  onClick: null,
  className: '',
};
