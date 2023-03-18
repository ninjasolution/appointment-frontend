import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './users.scss';

const Users = () => {
    return (
        <div className='users-page-container'>
            <div className='detail-container'>
                <div className='topbar-container'>
                    <Link className='action-back' to='/users/sign-in'>
                        <span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.28 19.28a.75.75 0 01-1.06 0l-7-7a.751.751 0 01-.072-.083h-.001A.742.742 0 012 11.753v-.004-.004a.748.748 0 01.22-.526l7-7 .084-.073a.75.75 0 01.976.073l.073.084a.75.75 0 01-.073.976L4.561 11H20.75l.102.007a.75.75 0 01-.102 1.493H4.561l5.72 5.72.072.084a.75.75 0 01-.073.976z" fill="#101928"></path></svg></span>
                    </Link>
                </div>
                <Outlet />
            </div>
            <div className='image-container'>
                <img src="/assets/img/c3eb1084bb926eef9095.jpg" alt="background" />
            </div>
        </div>
    )
}

export default Users;