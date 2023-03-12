import React from 'react';
import { Link } from 'react-router-dom';
import './notifications.scss';

const NotificationsPage = () => {
    return (
        <div className='notifications-container'>
            <div className='details'>
                <div className='content-container'>
                    <span id='content-title'>Engage with your clients and keep them up to date</span>
                    <span id='content-sub-title'>Promote client loyalty and reduce no-shows with Fresha’s <Link to='/clients/automated-messages'>automated messages</Link>. Once sent, notifications will appear here on the notifications page.</span>
                    <div className='content-items'>
                        <span className='item'>✔ Keep your clients up to date with reminders and updates to avoid no-shows</span>
                        <span className='item'>✔ Encourage client loyalty and increase reviews with post appointment thank you messages</span>
                        <span className='item'>✔ Ensure your messages are received by sending them over text, email and app notifications</span>
                    </div>
                    <Link id='learn-more' to='https://support.fresha.com/hc/en-us/articles/5500531132306' target='_blank'>
                        Learn more
                    </Link>
                </div>
                <div className='image-container'></div>
            </div>
        </div>
    )
}

export default NotificationsPage;