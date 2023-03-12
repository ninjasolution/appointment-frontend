import React from 'react';
import './taxes.scss';

const TaxesPage = () => {
    return (
        <div className='taxes-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Taxes</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add new</button>
                    </div>
                </div>
                <div className='details-title'>
                    <span>Tax rates</span>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-detail'>
                            <span className='item-name'>Uqeuur</span>
                            <span className='item-content'>54%</span>
                        </div>
                    </div>
                    <div className='item-spliter'></div>
                    <div className='content-item'>
                        <div className='item-detail'>
                            <span className='item-name'>AQuafd</span>
                            <span className='item-content'>34%</span>
                        </div>
                    </div>
                    <div className='item-spliter'></div>
                    <div className='content-item'>
                        <div className='item-detail'>
                            <span className='item-name'>Qooir</span>
                            <span className='item-content'>13%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaxesPage;