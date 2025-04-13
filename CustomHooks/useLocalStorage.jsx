// import React from 'react';
import { useState, useEffect } from 'react';

const useLocalStorage = (key, value) => {
    const [state, setState] = useState(value);
    const storedvalue = localStorage.getItem(key);
    const stringifiedValue = JSON.stringify(value);
    useEffect(()=>{
        storedvalue? setState(JSON.parse(storedvalue)) : localStorage.setItem(key, stringifiedValue)
    },[])

    const update = to =>{
        setState(to);
        localStorage.setItem(key, JSON.stringify(to))
    }
  return [state, update]
}

export default useLocalStorage