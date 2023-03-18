import React from 'react';
import { Link } from 'react-router-dom';
import '../users.scss';

const SignInPage = () => {
    return (
        <div className='signin-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Fresha for business</span>
                    <span className='title-content'>Create an account or log in to manage your Fresha business.</span>
                </div>
                <div className='input-container'>
                    <input type="text" placeholder='Enter your email address' />
                    <span className='group-hint'></span>
                </div>
                <button className='action-continue'>Continue</button>
                <div className='spliter'>
                    <div></div>
                    <span>OR</span>
                    <div></div>
                </div>
                <button className='action-google'>
                    <span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.061 12.381c0-.557-.045-1.117-.141-1.664h-7.728v3.154h4.426a3.792 3.792 0 01-1.638 2.49v2.047h2.64c1.55-1.427 2.441-3.534 2.441-6.027z" fill="#5384EC"></path><path d="M12.193 20.386c2.21 0 4.073-.726 5.43-1.978l-2.64-2.047c-.734.5-1.683.783-2.787.783-2.138 0-3.95-1.442-4.6-3.38H4.872v2.11a8.194 8.194 0 007.32 4.512z" fill="#35A753"></path><path d="M7.593 13.763a4.907 4.907 0 010-3.137v-2.11H4.87a8.2 8.2 0 000 7.357l2.722-2.11z" fill="#FBBB07"></path><path d="M12.193 7.243a4.452 4.452 0 013.143 1.228l2.338-2.34a7.874 7.874 0 00-5.481-2.13 8.191 8.191 0 00-7.321 4.515l2.72 2.11c.648-1.941 2.463-3.383 4.6-3.383z" fill="#EB4334"></path></svg></span>
                    Continue with Google
                </button>
                <button className='action-apple'>
                    <span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.517 5.032c-.64.773-1.713 1.353-2.57 1.353-.096 0-.192-.012-.252-.025a1.667 1.667 0 01-.037-.338c0-.99.495-1.957 1.038-2.573.687-.809 1.833-1.413 2.786-1.449.024.109.036.242.036.374 0 .979-.422 1.957-1.001 2.658zM10.323 20.64c-.43.185-.838.36-1.39.36-1.182 0-2.002-1.087-2.943-2.416C4.892 17.014 4 14.586 4 12.291c0-3.696 2.4-5.653 4.764-5.653.69 0 1.32.254 1.88.479.45.18.854.343 1.207.343.307 0 .69-.152 1.136-.328.623-.247 1.369-.542 2.205-.542.53 0 2.473.048 3.751 1.884a.967.967 0 01-.046.031c-.314.208-1.992 1.318-1.992 3.593 0 2.814 2.448 3.817 2.532 3.841l-.015.046c-.08.249-.464 1.438-1.287 2.648-.808 1.16-1.664 2.343-2.943 2.343-.63 0-1.031-.178-1.446-.362-.442-.196-.9-.4-1.665-.4-.77 0-1.278.22-1.758.426z" fill="#000"></path></svg></span>
                    Continue with Apple
                </button>
                <div className='custom-group'>
                    <span className='custom-title'>Customer booking?</span>
                    <span className='custom-content'>If you are a customer wishing to book a service</span>
                    <Link className='custom-link'>sign up as a customer</Link>
                </div>
            </div>
            <div className='footer-container'>
                <div className='logo-container'>
                    <div className='logo'>
                        <div></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 102 30.1"><path fill="#060911" d="M75.8 8.9h3.4v7c1.1-1.6 3.5-2.1 5.4-1.3 1.9.8 2.5 2.1 2.6 2.3.2.4.3.9.4 1.3.5 3.1-.5 6.2.4 9.2h-3.3c-.9-2.1-.4-4.5-.4-6.8 0-.6 0-1.3-.3-1.9-.4-.8-1.3-1.4-2.2-1.4-.9 0-1.8.5-2.2 1.3-.4.7-.4 1.5-.4 2.3v6.5h-3.4V8.9zM62.5 20.6c.1-3.7-2.3-6.5-5.8-6.4-2.4 0-4.5 1.2-5.6 3.3-1.2 2.3-1.1 5.4.4 7.5 2.2 3 6.6 3.6 10.8 1.6l-1.1-2.7c-3.5 1.5-7.3 1.1-7.6-2h8.9v-1.3zm-8.8-1.3c.2-.7.6-1.2 1.1-1.6 1-.8 2.8-.9 3.8-.1.5.4.8.9 1 1.7h-5.9zM42.8 19s0-2-1.6-2h-3.7v10.4h-3.4V17h-2.6v-2.8h2.6v-2.3c0-1.9 1.8-4.9 5.8-4.9s5.5 3.4 5.5 3.4l-2.6 1.8s-.7-2.1-2.9-2.1c-1 0-2.4.7-2.4 2.3v1.7h5.2c2.3 0 2.9 1.8 2.9 1.8.9-2 3.9-1.8 4.6-1.7v2.7c-2.1-.1-4.1 1.1-4.1 3.5v6.9h-3.4l.1-8.3zM73.6 21c-1.1-1.1-3.7-1.4-5.4-1.7-.8-.2-1.5-.4-1.5-1.2 0-1 1-1.3 2-1.3s2.1.4 2.6 1.3l2.6-1.4c-1.4-2.5-5.4-3.1-7.9-2-.8.3-1.4.8-1.8 1.4-1 1.3-.9 3.5.3 4.6.6.6 1.6 1 2.9 1.3l2.4.5c.9.2 1.6.4 1.6 1.3 0 1.1-1.2 1.4-2.3 1.4-2.7 0-3.3-2.6-3.3-2.6l-3.1 1c.2.8 1.3 4.3 6.3 4.3 2.9 0 5.4-1.1 5.4-4.1.1-1.4-.2-2.2-.8-2.8zM101.3 25c-.6 0-1.1-.4-1.1-1.2 0-.4-.1-1.9-.1-2.3 0-2.2.1-4.4-1.5-5.9-1.7-1.7-5.6-1.9-7.8-.5-.8.5-1.5 1.1-2 1.8l2 2c.8-1.3 1.9-1.9 3.2-1.9 1.2-.1 2.3.5 2.6 1.7-2.7.7-6.1 1-7.6 3.7-.7 1.3-.5 3 .5 4.1.8.9 2.1 1.2 3.3 1.2 1.9 0 3.7-.4 4.9-2.1.6 1.4 1.9 2.1 3.5 2.1.2 0 .5-.1.7-.1V25h-.6zm-4.6-2.7c.1 1.9-1.5 3-3.2 3-.9 0-1.6-.4-1.6-1.4 0-1 .8-1.4 1.8-1.6l2.9-.8.1.8z"></path></svg>
                    </div>
                </div>
                <div className='footer-link'>
                    <div className='language'>
                        <span>🇬🇧</span>
                        <Link>English</Link>
                    </div>
                    <div className='footer-spliter'></div>
                    <div className='support'>
                        <span><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M12.584 13.29A6.973 6.973 0 018 15a6.973 6.973 0 01-4.584-1.71l1.965-1.964c.72.568 1.63.907 2.619.907.989 0 1.898-.339 2.62-.907l1.964 1.965zM1 8c0 1.753.644 3.355 1.71 4.584l1.964-1.965a4.215 4.215 0 01-.907-2.62c0-.988.339-1.897.907-2.618L2.709 3.416A6.973 6.973 0 001 8zm2.416-5.29A6.973 6.973 0 018 1c1.753 0 3.356.644 4.584 1.71l-1.965 1.964A4.215 4.215 0 008 3.767c-.989 0-1.899.339-2.62.907L3.417 2.709zm9.875 9.874A6.973 6.973 0 0015 8a6.973 6.973 0 00-1.71-4.584l-1.964 1.965c.568.72.907 1.63.907 2.619 0 .989-.339 1.898-.907 2.619l1.965 1.965zM8 16A8 8 0 108 0a8 8 0 000 16zM4.767 8a3.233 3.233 0 116.466 0 3.233 3.233 0 01-6.466 0z" fill="#037aff"></path></svg></span>
                        <Link>Support</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;