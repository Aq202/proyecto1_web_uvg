import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import NewVideoButton from './NewVideoButton';

describe('Verificar boton.', () => {
  it('Verificar que aparezca el el titulo.', async () => {
    const { getByTestId, getByText } = render(<NewVideoButton />);

    fireEvent.mouseEnter(getByTestId('newButton'));

    expect(getByText('Crear')).toBeVisible();
  });
});
