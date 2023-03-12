import React from 'react';
import './tipssettings.scss'; 

const TipsSettingsPage = () => {
    return (
        <div className='tips-settings-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Tips</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Point of Sale tipping</span>
                            <span className='sub-title'>Choose if you would like to ask clients to tip while creating a sale.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-enable-tipping').click()}>
                                        <input className="form-check-input" id='check-enable-tipping' type="checkbox" defaultChecked />
                                        <span className='check-content'>
                                            Enable tipping during Point of Sale checkout
                                            <b>Ask clients to tips whilst checking their sale out in Point of Sale. If this feature is disabled, it is still possible to add a custom tip via the cart menu</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Suggested tip values</span>
                            <span className='sub-title'>The tip values are default options, clients will also be able to add a custom amount.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>1. Tip value</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>5 %</option>
                                        <option>8 %</option>
                                        <option>10 %</option>
                                        <option>15 %</option>
                                        <option>18 %</option>
                                        <option>20 %</option>
                                        <option>25 %</option>
                                        <option>30 %</option>
                                        <option>35 %</option>
                                        <option>40 %</option>
                                        <option>45 %</option>
                                        <option>50 %</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>2. Tip value</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>5 %</option>
                                        <option>8 %</option>
                                        <option>10 %</option>
                                        <option>15 %</option>
                                        <option>18 %</option>
                                        <option>20 %</option>
                                        <option>25 %</option>
                                        <option>30 %</option>
                                        <option>35 %</option>
                                        <option>40 %</option>
                                        <option>45 %</option>
                                        <option>50 %</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>3. Tip value</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>5 %</option>
                                        <option>8 %</option>
                                        <option>10 %</option>
                                        <option>15 %</option>
                                        <option>18 %</option>
                                        <option>20 %</option>
                                        <option>25 %</option>
                                        <option>30 %</option>
                                        <option>35 %</option>
                                        <option>40 %</option>
                                        <option>45 %</option>
                                        <option>50 %</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>4. Tip value</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>5 %</option>
                                        <option>8 %</option>
                                        <option>10 %</option>
                                        <option>15 %</option>
                                        <option>18 %</option>
                                        <option>20 %</option>
                                        <option>25 %</option>
                                        <option>30 %</option>
                                        <option>35 %</option>
                                        <option>40 %</option>
                                        <option>45 %</option>
                                        <option>50 %</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>5. Tip value</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>5 %</option>
                                        <option>8 %</option>
                                        <option>10 %</option>
                                        <option>15 %</option>
                                        <option>18 %</option>
                                        <option>20 %</option>
                                        <option>25 %</option>
                                        <option>30 %</option>
                                        <option>35 %</option>
                                        <option>40 %</option>
                                        <option>45 %</option>
                                        <option>50 %</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Default selection</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>No tip</option>
                                        <option>10 %</option>
                                        <option>18 %</option>
                                        <option>25 %</option>
                                        <option>35 %</option>
                                        <option>45 %</option>
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

export default TipsSettingsPage;