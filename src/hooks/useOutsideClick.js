import { useRef, useEffect } from 'react';

const useOutsideClick = (callback, addListener) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    if (addListener) document.addEventListener('click', handleClick, true);
    else document.removeEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, addListener]);

  return ref;
};

export default useOutsideClick;
