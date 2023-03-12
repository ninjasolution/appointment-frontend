import React from 'react';
import './permissions.scss';

const PermissionsPage = () => {
    return (
        <div className='permissions-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Permissions</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Save changes</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='group'>
                            <div className='check-container'>
                                <div className='form-check' onClick={() => document.getElementById('check-print').click()}>
                                    <input className="form-check-input" id='check-print' type="checkbox" />
                                    <span className='check-content'>Calculate by item sale price before discount</span>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='check-container'>
                                <div className='form-check' onClick={() => document.getElementById('check-show-mobile').click()}>
                                    <input className="form-check-input" id='check-show-mobile' type="checkbox" />
                                    <span className='check-content'>Calculate by item sale price including tax</span>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='check-container'>
                                <div className='form-check' onClick={() => document.getElementById('check-show-address').click()}>
                                    <input className="form-check-input" id='check-show-address' type="checkbox" defaultChecked />
                                    <span className='check-content'>Calculate by service price before membership discount</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermissionsPage;