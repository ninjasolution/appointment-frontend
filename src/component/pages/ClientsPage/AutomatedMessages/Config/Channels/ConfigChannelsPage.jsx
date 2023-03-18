import React from 'react';
import './channels.scss';

const ConfigChannelsPage = () => {
    return (
        <div className='configure-channels-container'>
            <div className='topbar-container'>
                <div className='action-left'>
                    <div className='action-close' onClick={() => window.location.href = '/clients/automated-messages'}>
                        <span><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg></span>
                    </div>
                    <span className='action-previous' onClick={() => window.location.href = '/clients/automated-messages/configure/rules'}>Previous</span>
                </div>
                <div className='action-right'>
                    <button className='action-remove' onClick={() => window.location.href = '/clients/automated-messages'}>Remove</button>
                    <button className='action-next' onClick={() => window.location.href = '/clients/automated-messages/configure/done'}>Save changes</button>
                </div>
            </div>
            <div className='progress-container'>
                <div className='progress-percent'></div>
            </div>
            <div className='detail-container'>
                <span className='small-title'>Appointment reminder automated message</span>
                <div className='container-title'>
                    <span className='title'>Select channels</span>
                    <span className='title-content'>Choose how the automated message should be sent to your clients.</span>
                </div>
                <div className='content-container'>
                    <div className='content-item'>
                        <div className='content-image'>
                            <div><img src="/assets/img/2e6905a6cba39c03e27d.svg" alt="logo" /></div>
                        </div>
                        <div className='content-details'>
                            <div className='content-title'>
                                <span className='title'>Email</span>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" name="darkmode" />
                                </div>
                            </div>
                            <div className='status success'>
                                <span>FREE</span>
                            </div>
                            <div className='content-summary'>
                                <span>Send this automated message via email. Customise your email with important information for clients.</span>
                            </div>
                            <button className='action-preview'>
                                Preview and edit
                            </button>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='content-image'>
                            <div><img src="/assets/img/2af850025a9549511850.svg" alt="logo" /></div>
                        </div>
                        <div className='content-details'>
                            <div className='content-title'>
                                <span className='title'>App notification</span>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" name="darkmode" disabled />
                                </div>
                            </div>
                            <div className='status success'>
                                <span>FREE</span>
                            </div>
                            <div className='content-summary'>
                                <span>Send this automated message via app notification, to all your clients who use Fresha marketplace app.</span>
                            </div>
                            <button className='action-preview'>
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigChannelsPage;