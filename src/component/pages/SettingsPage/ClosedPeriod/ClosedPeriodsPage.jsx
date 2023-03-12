import React from 'react';
import './closedperiods.scss';

const ClosedPeriodsPage = () => {
    return (
        <div className='closed-period-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Closed periods</span>
                        <span className='header-sub-title'>Set the period when your business is closed.</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add closed period</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-detail'>
                            <span className='item-period'>Wed, 8 Mar 2023 - Fri, 31 Mar 2023</span>
                            <span className='item-location'>Location: All locations</span>
                            <span className='item-description'>Description: Quoorer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClosedPeriodsPage;