export const createStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue;

  const setStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getStorage = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  return [initialValue, setStorage, getStorage];
};