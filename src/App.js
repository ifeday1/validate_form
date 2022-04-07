
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
const [values, setValues]= useState({
  username:"",
  email:"",
  birthday:"",
  password:"",
  confirmPassword:"",
});

const inputs= [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't include any specical charater!",
    label:"Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required:true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"it should be a vaild email address",
    label:"Email",
    required:true,
  },

  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    label:"Birthday",
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
errorMessage:"password should be 8-20 charaters and include at least 1 letter, 1 number and 1 special charater",
    label:"Password",
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required:true,
  },
  {
    id:5,
    name:"confirmPassword",
    type:"password",
    placeholder:"confirm Password",
    errorMessage:"password don't match",
    label:"confirm Password",
    pattern:values.password,
    required:true,
  },
  

  
]

const hnadleSubmit= (e)=>{
  e.preventDefault();
}
const onChange = (e) => {
  setValues({...values, [e.target.name]: e.target.value })
}
console.log(values)
  return (
    <div className="app">
      <form onSubmit={hnadleSubmit}>
      <h1>Register</h1>
      {inputs.map((input)=>(
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
    
      
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
