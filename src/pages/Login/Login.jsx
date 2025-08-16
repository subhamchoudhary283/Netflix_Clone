
import './Login.css'
import logo from '../../assets/logo.png';
import { use, useState } from 'react';
import { login,signup } from '../../firebase';
import nerflix_spinner from "../../assets/netflix_spinner.gif";


const Login = () => {

  const [signState,setsignState]=useState('Sign In');

  // store forms data in state variable
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  //now we have to connect the state variables with the input fields  -->  value={email} onChange={(e)=>{e.target.value}}
  const [loading,setLoading]=useState(false);

  // next create a function for the user authentication
  const user_auth=async(e)=>{
    e.preventDefault(); // to prevent the page from reloading on form submission
    setLoading(true);
    if(signState === "Sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
    setLoading(false);
  }
  // now connect the user_auth function with the submit function
  
  return (
    loading?<div className='login-spinner'>
      <img src={nerflix_spinner} alt="Loading..." />
    </div>:
    <div className='login'>
      <img src={logo} alt="Logo" className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
          <button type='submit'>{signState}</button>
          <div className='form-help'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>setsignState("Sign Up")}>Sign Up</span></p>:<p>Already have account? <span onClick={()=>setsignState("Sign In")}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
