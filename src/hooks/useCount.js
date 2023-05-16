import { useState } from 'react';

/**
 *
 * @param defaultValue Int. Valor inicial.
 * @returns Valor siguiente de la secuencia
 */
function useCount(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0);

  const next = () => setCount((val) => val + 1);

  return [count, next];
}

export default useCount;
