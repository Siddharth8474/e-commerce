import React,{useState} from'react';
import './Style1/Signup.css'
import { Link } from 'react-router-dom';

const Signup = ({users,setUsers}) => {

 //const [users,setUsers]=useState([])
 const [userData,setUserData]=useState({
  username:'',
  password:''
 })

 const [message,setMessage]=useState()


 const handleChange = (event) =>{
  setUserData({...userData,[event.target.name]:event.target.value})
 }

 const handleClick = () =>{
  
  const {username,password}=userData

  if(!username || !password){
    setMessage('both field are required');
    return;
  }
  

  const existingUser = users.find((user) => user.username === username)
   if(existingUser){
    setMessage('username already exist')
    return
   }

   console.log(userData)

   setUsers([...users,{username,password}])
    alert('signup successful')
 }

  return (
    <div className='signup-container'>
    <div className='signup-card'>
     <h2>Sign Up</h2>
     <div className='input-container'>
      <input 
         type='text'
         placeholder='Username'
         className='signup-input'
         name='username'
         onChange={handleChange}
      />

      <input
       type='password'
       placeholder='password'
       className='signup-input' 
       name='password'
       onChange={handleChange}
      />
      {message && <div>{message}</div>}

     <button type='button' className='signup-button' onClick={handleClick}>Signup</button>
     </div>

     <p className='login-link'>
      already have an account <Link to='/'>Login</Link>
     </p>
      {/* <Login users={users} /> */}
    </div>
    </div>
   
  )
}

export default Signup