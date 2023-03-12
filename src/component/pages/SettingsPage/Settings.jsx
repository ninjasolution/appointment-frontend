import React from 'react';
import { Outlet } from 'react-router-dom';
import './settings.scss';

const Settings = () => {
    return (
        <div className='settings-layout'>
            <div className='inner-container' id='inner-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default Settings;