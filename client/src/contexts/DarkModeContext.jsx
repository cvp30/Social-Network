import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const DarkContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    Boolean(localStorage.getItem('dark'))
  );

  const changeDarkMode = () => {
    localStorage.setItem('isDarkMode', String(!darkMode));
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');

    else document.documentElement.classList.remove('dark');
  }, [darkMode])

  return (
    <DarkContext.Provider value={{
      darkMode,
      changeDarkMode
    }}>
      {children}
    </DarkContext.Provider>
  )
}

export const DarkMode = () => {
  return useContext(DarkContext);
}

DarkModeContextProvider.propTypes = {
  children: PropTypes.any,
}