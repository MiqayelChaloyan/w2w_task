import {useState, useEffect} from 'react';

const useDelayDebounce = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);

  let delayDebounceFn = null;

  useEffect(() => {
    return () => {
      if (delayDebounceFn) {
        clearTimeout(delayDebounceFn);
      }
    };
  }, []);

  const handleInputText = inputText => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }

    delayDebounceFn = setTimeout(() => {
      setValue(inputText);
      delayDebounceFn = null;
    }, delay);
  };

  return [value, handleInputText];
};

export default useDelayDebounce;
