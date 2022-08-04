import React, {useState, useRef} from 'react'
import './Login.css';

const Login = () => {
    const email = useRef();
    const password = useRef();

    function checkFieldsAndCont(e)  {
        const isEmail = email.current.value
        const isPassword = password.current.value
        if (isEmail === '' || isPassword === '') return
        console.log(isEmail + " " + isPassword)
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