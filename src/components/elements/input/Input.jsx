import { forwardRef } from "react";
import { DarkMode } from "../../../context/DarkMode";
import { useContext } from "react";

const Input = forwardRef( (props, ref) => {
   const { type, placeholder,name } = props;
   const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
return(
   <input 
   type={type} 
   className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-30 ${isDarkMode && "bg-slate-900 text-white"}`} 
   placeholder={placeholder} 
   name={name}
   id={name}
   ref={ref}/>
)
});

export default Input;