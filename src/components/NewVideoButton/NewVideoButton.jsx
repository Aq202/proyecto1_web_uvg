import React from 'react';
import useSwitch from '@hooks/useSwitch';
import NavbarButton from '../NavbarButton/NavbarButton';
import NewVideoMenu from '../NewVideoMenu/NewVideoMenu';
import useOutsideClick from '../../hooks/useOutsideClick';

function NewVideoButton() {
  const [selected, toogleSelected] = useSwitch(false);
  const ref = useOutsideClick(toogleSelected, selected);
  return (

    <NavbarButton onClick={toogleSelected} title="Crear" refProp={ref} subMenu={selected && <NewVideoMenu />}>
      {selected ? (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M18,8.83V5H2v14h16v-5.83L22,15V7L18,8.83z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z" />
          </g>
        </svg>
      ) : (
        <svg
          display="block"
          pointerEvents="none"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" />
          </g>
        </svg>
      )}
    </NavbarButton>

  );
}

export default NewVideoButton;
