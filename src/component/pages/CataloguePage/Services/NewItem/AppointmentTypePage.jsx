import React from 'react';
import { Link } from 'react-router-dom';
import '../services.scss';

const AppointmentTypePage = () => {
    return (
        <div className='appointment-type-container'>
            <div className='topbar'>
                <Link className='topbar-close' to='/catalogue/services'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
            </div>
            <div className='choose-container'>
                <div className='choose-title'>
                    <span>Choose a service type</span>
                </div>
                <div className='choose-group'>
                    <Link className='choose-item' to='/catalogue/services/add/form'>
                        <div className='item-detail'>
                            <span className='item-title'>Single Service</span>
                            <span className='item-content'>Services which can be booked individually</span>
                        </div>
                        <span className='item-logo'>
                            <svg width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 11.5v14.111a.89.89 0 0 1-.889.889H5a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1h6.667a1 1 0 0 1 .6.2l3.466 2.6a1 1 0 0 0 .6.2H27a1 1 0 0 1 1 1Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                    </Link>
                    <Link className='choose-item' to='/catalogue/services/add/form'>
                        <div className='item-detail'>
                            <span className='item-title'>Package</span>
                            <span className='item-content'>Multiple services booked together in one appointment</span>
                        </div>
                        <span className='item-logo'>
                            <svg width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 14.5v11.111a.89.89 0 0 1-.889.889H5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h5.667a1 1 0 0 1 .6.2l3.466 2.6a1 1 0 0 0 .6.2H24a1 1 0 0 1 1 1Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 14.5v11.111a.89.89 0 0 1-.889.889H5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h5.667a1 1 0 0 1 .6.2l3.466 2.6a1 1 0 0 0 .6.2H24a1 1 0 0 1 1 1Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10.5v-3a1 1 0 0 1 1-1h5.667a1 1 0 0 1 .6.2l3.466 2.6a1 1 0 0 0 .6.2H28a1 1 0 0 1 1 1v11.111a.889.889 0 0 1-.889.889H25" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AppointmentTypePage;