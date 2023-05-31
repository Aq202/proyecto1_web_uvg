import React from 'react';
import {
  render,
} from '@testing-library/react';
import App from './App';

describe('Verificar interfaz.', () => {
  it('Verificar que aparezca el navbar.', async () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('navbar')).toBeVisible();
  });
});
