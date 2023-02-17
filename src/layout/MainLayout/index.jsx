import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from '../../component/leftbar/Leftbar';
import Topbar from '../../component/topbar/Topbar';
import './layout.scss';

function MainLayout() {

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
