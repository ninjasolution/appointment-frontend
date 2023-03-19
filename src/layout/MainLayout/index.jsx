import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ItemDetailsModal from '../ItemDetailsModal';
import ItemInfoModal from '../ItemInfoModal';
import LeftBar from '../../component/leftbar/Leftbar';
import Topbar from '../../component/topbar/Topbar';
import './layout.scss';

function MainLayout(props) {

    const navigate = useNavigate();
    const [detailModalState, setDetailModalState] = useState(false);
    const [infoModalState, setInfoModalState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard', { replace: true });
        }, 100);
    }, []);

    
    return (
        <div className='main-layout'>
            { detailModalState && <ItemDetailsModal />}
            { infoModalState && <ItemInfoModal /> }
            <Topbar />
            <div className='main-layout-container'>
                <LeftBar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;