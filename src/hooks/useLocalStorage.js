
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
      }
      return initialValue;
    });
  
    useEffect(() => {

      if (typeof window !== "undefined") {
        console.log("Saving to localStorage:", value); 
        localStorage.setItem(key, JSON.stringify(value));
      }
    }, [key, value]);
  
    return [value, setValue];
  };
  

export default useLocalStorage