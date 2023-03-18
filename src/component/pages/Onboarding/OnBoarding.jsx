import React from 'react';
import { Outlet } from 'react-router-dom';
import './onboarding.scss';

const OnBoarding = () => {
    return (
        <div className='onboarding-container'>
            <Outlet />
        </div>
    )
}

export default OnBoarding;