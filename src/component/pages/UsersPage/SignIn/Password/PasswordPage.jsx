import React from 'react';
import { Link } from 'react-router-dom';
import '../../users.scss';

const PasswordPage = () => {
    return (
        <div className='signin-password-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Welcome back to your business account, Yuri</span>
                    <span className='title-content'>Enter your password to log in as</span>
                    <span className='email-content'>inozemtsev1996@gmail.com</span>
                </div>
                <div className='group'>
                    <span className='group-title'>Password</span>
                    <div className='input-container'>
                        <input type="password" placeholder='Enter a password' />
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='custom-group'>
                    <Link className='custom-link' to='/users/forgot-password'>Forgor your password?</Link>
                </div>
                <button className='action-continue'>Log in</button>
            </div>
        </div>
    )
}

export default PasswordPage;