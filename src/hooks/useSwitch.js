import { useState } from 'react';

/**
 *
 * @param defaultValue Boolean. Valor inicial del switch. Default false.
 * @returns [switchState, changeSwitch]
 */
function ComponentName(defaultValue) {
  const [switchState, setSwitchState] = useState(defaultValue || false);

  const changeSwitch = () => setSwitchState((val) => !val);

  return [switchState, changeSwitch];
}

export default ComponentName;
