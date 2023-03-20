import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../users.scss';

const ForgotPasswordPage = () => {

    const [sentEmailState, setSentEmailState] = useState(false);
    const user = useSelector(s => s.globals.setupUser)

    useEffect(() => {
        setSentEmailState(false);
    }, []);

    return (
        <div className='forgot-password-container'>
            <div className='group-container'>
                {
                    sentEmailState ?
                        <>
                            <div className='success-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 80 80"><path d="M56.2 5c-5.7-3.3-12.1-5-18.7-5C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75 75 58.2 75 37.5c0-6.6-1.7-13.1-5.1-18.8"></path><path d="M18.5 38.5L31 51c.4.4 1 .4 1.4 0 0 0 0-.1.1-.1L63.8 12"></path></svg>
                            </div>
                            <span className='success-title'>Reset email sent!</span>
                            <span className='success-content'>Please check your inbox to reset your password. If you didn't receive your email, please check your junk mail folder.</span>
                            <button className='action-continue' onClick={() => window.location.href = '/users/sign-in/password'}>Back to log in</button>
                        </>
                        :
                        <>
                            <div className='title-container'>
                                <span className='title'>Forgot your business account password, Yuri?</span>
                                <span className='title-content'>We’ll send you a secure link to create a new password to</span>
                                <span className='email-content'>{user?.email}</span>
                            </div>
                            <button className='action-continue' onClick={() => setSentEmailState(true)}>Reset password</button>
                            <div className='custom-group'>
                                <span className='custom-title'>Have a customer account?</span>
                                <Link className='custom-link'>Go to Fresha for customers.</Link>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default ForgotPasswordPage;