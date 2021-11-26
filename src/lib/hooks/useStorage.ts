import { useState } from 'react';

/**
 * A hook that is a wrapper around localStorage, but works in a similar fashion to `useState`.
 * Think of it as a persistent state.
 *
 * @param key Key of the value to be stored in localStorage.
 * @param initialValue The initial value, used if the key does not exist yet.
 * @returns An array consisting of the value for the key, and a setter method.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (newValue: T) => {
    if (typeof newValue === 'undefined') return;
    setStoredValue(newValue);
    window.localStorage.setItem(
      key,
      typeof newValue !== 'string' ? JSON.stringify(newValue) : newValue
    );
  };

  return [storedValue, setValue];
}
