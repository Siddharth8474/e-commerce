import React,{useState} from 'react'
import './Style1/Login.css'
import { useLocation,useNavigate } from 'react-router-dom';

const Login = ({users,setLoggedInUser}) => {

    const [userdata,setUserData]=useState({
        username:'',
        password:''
    });

    const [message,setMessage]=useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) =>{
      setUserData({...userdata,[event.target.name]:event.target.value})
    }


    const handleClick = () =>{
       // console.log(userdata)
      const {username,password}=userdata

      if(!username || !password){
        setMessage('both field are requried')
        return;
      }

      const user = users.find(user => user.username === username && user.password === password)

      if(user){
        setLoggedInUser(user)
        setMessage('login successfull')

        if(location.state && location.state.redirectTo){
          navigate(location.state.redirectTo,{state:{product:location.state.product}})
        }
        else{
          navigate('/')
        }
      }
      else{
        setMessage('invailid username or password')
      }

      setUserData({
        username:'',
        password:''
      })

    }


  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2>Login</h2>
        <div className='input-container'>
         <input 
            type='text'
            placeholder='username'
            className='login-input'
            name='username'
            onChange={handleChange}
         />

         <input 
         type='password'
         placeholder='password'
         className='login-input'
         name='password'
         onChange={handleChange}
         />
          {message && <div>{message}</div>}
         <button type='button' className='login-button' onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login