import React from 'react';
import { DarkMode } from '../../../context/DarkMode';
import { useContext } from 'react';

const Label = (props) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { htmlFor, children } = props;
    return (
        <label htmlFor={htmlFor} className={`block text-slate-700 text-sm font-bold mb-2 ${isDarkMode && "text-white"}`}>
        {children}
      </label>
    )
}

export default Label;