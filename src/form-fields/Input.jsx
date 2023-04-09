import React from 'react'
import "./Style.css"
const InputField = ({label,onChange,...otherProps}) => {
  return (
        
        <div className='inputField'>
        <label>{label}</label>
        <input {...otherProps} onChange={onChange}/>
        <span>Error Mesage</span>
        </div>

  )
}

export default InputField;