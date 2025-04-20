import { useState, useCallback } from "react";

// The hook returns the boolean value and a function to toggle it
const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
};

export default useToggle;
