import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error('Failed to read from localStorage:', err);
      // Here should be some notification mechanism and sending error logs to monitoring service

      return initialValue;
    }
  });

  const saveValue = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
      // Here should be some notification mechanism and sending error logs to monitoring service
    }
  };

  return { value, saveValue };
};
