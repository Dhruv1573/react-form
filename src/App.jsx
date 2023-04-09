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
      required:true
  },
  {
      id:2,
      name:'email',
      type:'text',
      placeholder:'Email',
      label:'Email',
      required:true
  },
  {
      id:3,
      name:'password',
      type:'password',
      placeholder:'Password',
      label:'Password',
      required:true
  },
  {
      id:4,
      name:'confirmPassword',
      type:'password',
      placeholder:'Confirm Password',
      label:'Confirm Password',
      required:true
  },
]
  const onChange=(e)=>{
      console.log(e.target.value)
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
