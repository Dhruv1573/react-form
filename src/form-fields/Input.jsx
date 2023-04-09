import React,{useState} from 'react'
import "./Style.css"
const InputField = ({label,onChange,errorMessage,...otherProps}) => {
  const [focused,setFocused]=useState(false);
  return (
      <div className='inputField'>
        <label>{label}</label>
        <input {...otherProps} 
               onChange={onChange} 
               onBlur={()=>setFocused(true)}
               focused={focused.toString()}
               onFocus={()=>otherProps.name==="confirmPassword" && setFocused(true)}
              ></input>
        <span>{errorMessage}</span>
      </div>
  );
}

export default InputField;