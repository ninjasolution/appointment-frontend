import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../../../../services/AuthService';
import '../../users.scss';

const PasswordPage = () => {

    const user = useSelector(s => s.globals.setupUser)
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate();

    const signinHandler = () => {
        signin(user.email, password)
        .then(res => {
            navigate("/")
        })
    }

    return (
        <div className='signin-password-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Welcome back to your business account, Yuri</span>
                    <span className='title-content'>Enter your password to log in as</span>
                    <span className='email-content'>{user?.email}</span>
                </div>
                <div className='group'>
                    <span className='group-title'>Password</span>
                    <div className='input-container'>
                        <input type="password" placeholder='Enter a password' value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='custom-group'>
                    <Link className='custom-link' to='/users/forgot-password'>Forgor your password?</Link>
                </div>
                <button className='action-continue' onClick={signinHandler}>Log in</button>
            </div>
        </div>
    )
}

export default PasswordPage;