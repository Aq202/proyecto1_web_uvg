import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './CategoriesBar.module.css';

function CategoriesBar() {
  const categories = [
    'Todo',
    'Música',
    'Mixes',
    'En directo',
    'Videojuegos',
    'Javascript',
    'Breaking Bad',
  ];
  const [selected, setSelected] = useState('Todo');
  return (
    <div className={styles.categoriesBar}>
      <div className={styles.list}>
        {categories.map((el) => (
          <button
            type="button"
            className={`${styles.item} ${selected === el ? styles.selected : ''}`}
            key={el}
            onClick={() => setSelected(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesBar;

CategoriesBar.propTypes = {};

CategoriesBar.defaultProps = {};
