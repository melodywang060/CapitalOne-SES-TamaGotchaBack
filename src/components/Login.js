import React, {useRef} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Budget from './Budget';
import './Login.css';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    function checkFieldsAndCont()  {
        var isEmail = email.current.value
        var isPassword = password.current.value
        if (isEmail === '' || isPassword === '') return
        console.log(isEmail + " " + isPassword)
        isEmail = null
        isPassword = null
        navigate('/Budget', {replace: false})
    }

  return (
    <div>
        <label className='title'>Tomagotcha Back!</label>
        <input ref={email} className="email" type="text"/>
        <label className='enterEmail'> Email </label>
        <input ref={password} className="password" type="text"/>
        <label className='enterPassword'> Password </label>
        <button onClick={checkFieldsAndCont} className='submit'>Submit</button>
    </div>
  )
}

export default Login