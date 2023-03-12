import React from 'react';
import './servicecharges.scss';

const ServiceChargesPage = () => {
    return (
        <div className='service-charges-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Service charges</span>
                        <span className='header-sub-title'>Manage any extra charges that apply to services and items sold at checkout.</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-detail'>
                            <span className='item-name'>Querar</span>
                            <span className='item-description'>12% applied on full sale amount</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceChargesPage;