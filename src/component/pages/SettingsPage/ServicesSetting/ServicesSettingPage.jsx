import React from 'react';
import { Link } from 'react-router-dom';
import './servicessetting.scss';

const ServicesSettingPage = () => {
    return (
        <div className='services-settings-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Vouchers and services settings</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Save</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-title'>
                            <span className='title-content'>Vouchers</span>
                            <span className='sub-title-content'></span>
                        </div>
                        <div className='item-detail'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Default expiry period</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>14 Days</option>
                                        <option>1 Month</option>
                                        <option>2 Months</option>
                                        <option>3 Months</option>
                                        <option>4 Months</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>
                                        <option>3 Years</option>
                                        <option>5 Years</option>
                                        <option>No Expiry</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSettingPage;