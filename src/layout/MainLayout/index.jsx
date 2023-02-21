import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LeftBar from '../../component/leftbar/Leftbar';
import Topbar from '../../component/topbar/Topbar';
import './layout.scss';

function MainLayout() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard', { replace: true });
        }, 100);
    }, []);

    return (
        <div className='main-layout'>
            <Topbar />
            <div className='main-layout-container'>
                <LeftBar/>
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout;
