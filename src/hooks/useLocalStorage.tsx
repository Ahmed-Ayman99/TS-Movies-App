import { type SetStateAction, type Dispatch, useEffect, useState } from "react";

const useLocalStorage = <T,>(
  initialState: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] => {
  // global state
  const [value, setValue] = useState<T>(() => {
    const watched = localStorage.getItem(key);
    return watched ? JSON.parse(watched) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
