import React from 'react';
import { Link } from 'react-router-dom';
import './done.scss';

const ConfigDonePage = () => {
    return (
        <div className='configure-done-container'>
            <div className='topbar-container'>
                <div className='action-left'>
                    <div className='action-close' onClick={() => window.location.href = '/clients/automated-messages'}>
                        <span><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg></span>
                    </div>
                </div>
            </div>
            <div className='detail-container'>
                <div className='logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 80 80"><path d="M56.2 5c-5.7-3.3-12.1-5-18.7-5C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75 75 58.2 75 37.5c0-6.6-1.7-13.1-5.1-18.8"></path><path d="M18.5 38.5L31 51c.4.4 1 .4 1.4 0 0 0 0-.1.1-.1L63.8 12"></path></svg>
                </div>
                <div className='title'>
                    <span>Your 72 hour appointment reminder automated message is set up</span>
                </div>
                <div className='content-details'>
                    <div className='content-title'>Automated message details</div>
                    <div className='content-item'>
                        <span className='item-logo'><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><path clip-rule="evenodd" d="m16.02139,2.60155c-7.42016,0 -13.43567,5.99244 -13.43567,13.38412s6.01552,13.38412 13.43567,13.38412s13.43567,-5.99244 13.43567,-13.38412s-6.01552,-13.38412 -13.43567,-13.38412zm-15.87853,13.38412c0,-8.73618 7.1087,-15.81761 15.87853,-15.81761s15.87853,7.08141 15.87853,15.81761s-7.1087,15.81761 -15.87853,15.81761s-15.87853,-7.08141 -15.87853,-15.81761z"></path><path clip-rule="evenodd" d="M16.139 6a1.139 1.198 0 0 1 1.139 1.198v7.19h6.833a1.139 1.198 0 1 1 0 2.398H16.14A1.139 1.198 0 0 1 15 15.587V7.198A1.139 1.198 0 0 1 16.139 6z"></path></svg></span>
                        <span className='content'>Automatically sends to all clients 72 hours ahead of their upcoming appointment.</span>
                    </div>
                    <div className='content-item'>
                        <span className='item-logo'><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.7 4.2c-.2-.3-.5-.6-.8-.7-.3-.2-.7-.2-1.1-.2-.4 0-.7.2-1 .5C19.5 8.9 13.1 9 13 9H8c-1.6 0-3.1.6-4.2 1.8C2.7 12 2 13.4 2 15s.6 3.1 1.8 4.2c.9.9 2.1 1.5 3.4 1.7l1.5 5.9c.1.3.2.6.4.8.2.2.5.4.8.5.3.1.6.2.9.1.3 0 .6-.1.9-.3l1.4-.9c.3-.2.5-.4.7-.7.2-.3.2-.6.2-.9V21c2 .2 6.9 1.2 11.7 5.2.3.2.6.4 1 .5h.3c.3 0 .6-.1.8-.2.3-.2.6-.4.8-.7.2-.3.3-.7.3-1.1V5.3c.1-.4 0-.8-.2-1.1ZM4 15c0-1.1.4-2.1 1.2-2.8C6 11.5 6.9 11 8 11h4v8H8c-1.1 0-2.1-.4-2.8-1.2C4.4 17.1 4 16.1 4 15Zm6.6 11.4L9.3 21H12v4.5l-1.4.9ZM27 24.7c-5.3-4.5-10.8-5.5-13-5.7v-8.1c2.2-.2 7.7-1.2 13-5.7v19.5Z" fill="#101928"></path></svg></span>
                        <span className='content'>Sent by</span>
                    </div>
                    <div className='content-item'>
                        <span className='item-logo'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7V5.75C9 5.33579 9.33579 5 9.75 5C10.1642 5 10.5 5.33579 10.5 5.75V7H21V5.75C21 5.33579 21.3358 5 21.75 5C22.1642 5 22.5 5.33579 22.5 5.75V7H24.75C26.2688 7 27.5 8.23122 27.5 9.75V12.75V24.75C27.5 26.2688 26.2688 27.5 24.75 27.5H6.75C5.23122 27.5 4 26.2688 4 24.75V12.75V9.75C4 8.23122 5.23122 7 6.75 7H9ZM5.5 13.5V24.75C5.5 25.4404 6.05964 26 6.75 26H24.75C25.4404 26 26 25.4404 26 24.75V13.5H5.5ZM26 12H5.5V9.75C5.5 9.05964 6.05964 8.5 6.75 8.5H9V8.75C9 9.16421 9.33579 9.5 9.75 9.5C10.1642 9.5 10.5 9.16421 10.5 8.75V8.5H21V8.75C21 9.16421 21.3358 9.5 21.75 9.5C22.1642 9.5 22.5 9.16421 22.5 8.75V8.5H24.75C25.4404 8.5 26 9.05964 26 9.75V12Z" fill="#101928"></path></svg></span>
                        <span className='content'>Clients who book their own appointments online may still receive messages. <Link to='https://support.fresha.com/hc/en-us/articles/5829627232274'>Learn more</Link></span>
                    </div>
                </div>
                <div className='action-done'>
                    <button onClick={() => window.location.href = '/clients/automated-messages'}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default ConfigDonePage;