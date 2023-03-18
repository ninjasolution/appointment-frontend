import React from 'react';
import { Link } from 'react-router-dom';
import './rules.scss';

const ConfigRulesPage = () => {
    return (
        <div className='configure-rules-container'>
            <div className='topbar-container'>
                <div className='action-left'>
                    <div className='action-close' onClick={() => window.location.href = '/clients/automated-messages'}>
                        <span><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg></span>
                    </div>
                    {/* <span className='action-previous' onClick={() => window.location.href = '/onboarding/partner_service_types'}>Previous</span> */}
                </div>
                <div className='action-right'>
                    <button className='action-remove' onClick={() => window.location.href = '/clients/automated-messages'}>Remove</button>
                    <button className='action-next' onClick={() => window.location.href = '/clients/automated-messages/configure/channels'}>Next step</button>
                </div>
            </div>
            <div className='progress-container'>
                <div className='progress-percent'></div>
            </div>
            <div className='detail-container'>
                <span className='small-title'>Appointment reminder automated message</span>
                <div className='container-title'>
                    <span className='title'>Set up automation rules</span>
                    <span className='title-content'>Adjust when the message sends to your clients. <Link to='http://support.fresha.com'>Learn more</Link></span>
                </div>
                <div className='content-container'>
                    <div className='content-item'>
                        <div className='item-title'>
                            <span className='title'>Trigger</span>
                            <span className='title-content'>Automatically sends to all clients ahead of their upcoming appointment.</span>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='item-title'>
                            <span className='title'>Reminder timeframe</span>
                            <span className='title-content'>Choose how far in advance your automated messages are sent to clients.</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Reminder advance notice</span>
                            <select className='form-select'>
                                <option value="72">72 hours</option>
                                <option value="48">48 hours</option>
                                <option value="3">3 hours</option>
                                <option value="2">2 hours</option>
                                <option value="1">1 hour</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigRulesPage;