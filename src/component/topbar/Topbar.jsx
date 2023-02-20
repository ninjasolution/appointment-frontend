import React from 'react';
import './topbar.scss';

const Topbar = () => {
    return (
        <div className='topbar-layout'>
            <div className='logo'>
                <div></div>
                fresha
            </div>
            <div className='actions'>
                <div className='action-item'>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM3 14.5C3 8.149 8.149 3 14.5 3S26 8.149 26 14.5 20.851 26 14.5 26 3 20.851 3 14.5Z" fill="#000"></path><path fillRule="evenodd" clipRule="evenodd" d="M21.217 21.218a1 1 0 0 1 1.414 0l6.075 6.075a1 1 0 0 1-1.414 1.414l-6.075-6.075a1 1 0 0 1 0-1.414Z" fill="#000"></path></svg>
                </div>
                <div className='action-item'>
                </div>
                <div className='action-item'>
                </div>
                <div className='profile'>D</div>
            </div>
        </div>
    )
}

export default Topbar;