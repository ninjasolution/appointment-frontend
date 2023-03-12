import React from 'react';
import './invoices.scss';

const InvoicesPage = () => {
    return (
        <div className='invoices-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Receipt template</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Save</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Sale receipt settings</span>
                            <span className='sub-title'>Customize the content displayed on sales receipts issued to your clients</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-print').click()}>
                                        <input className="form-check-input" id='check-print' type="checkbox" />
                                        <span className='check-content'>Automatically print receipts upon sale completion</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-show-mobile').click()}>
                                        <input className="form-check-input" id='check-show-mobile' type="checkbox" defaultChecked />
                                        <span className='check-content'>Show client mobile and email on sale receipt</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-show-address').click()}>
                                        <input className="form-check-input" id='check-show-address' type="checkbox" defaultChecked />
                                        <span className='check-content'>Show client address on sale receipt</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Receipt title</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" value='Sale' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Receipt custom line 1</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Receipt custom line 2</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Receipt footer</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoicesPage;