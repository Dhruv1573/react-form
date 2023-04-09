import { useState } from 'react'
import InputField from './form-fields/Input'
function App() {
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const formField=[
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      label:'Username',
      errorMessage:
                "Username should be 3-15 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,15}$",
      autoComplete: "off",
  },
  {
      id:2,
      name:'email',
      type:'text',
      placeholder:'Email',
      label:'Email',
      errorMessage: "It should be valid email address!",
      required: true,
      pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$",
      autoComplete: "off",
  },
  {
      id:3,
      name:'password',
      type:'password',
      placeholder:'Password',
      label:'Password',
      errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      autoComplete: "off",
  },
  {
      id:4,
      name:'confirmPassword',
      type:'password',
      placeholder:'Confirm Password',
      label:'Confirm Password',
      errorMessage: "Password don't match!",
      required: true,
      pattern: values.password,
      autoComplete: "off",
  },
]
  const onChange=(e)=>{
      // console.log(e.target.value)
      setValues({...values,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
        {formField.map(field=>(
          <InputField key={field.id} {...field} onChange={onChange} value={values[field.name]}/>
        ))}
        <button className='button'>Submit</button>
    </form>
  )
}

export default App;
