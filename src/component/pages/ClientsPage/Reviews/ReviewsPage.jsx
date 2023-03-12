import React from 'react';
import './reviews.scss';
import { Link } from 'react-router-dom';

const ReviewsPage = () => {
    return (
        <div className='reviews-container'>
            <div className='details'>
                <div className='content-container'>
                    <span id='content-title'>Attract new clients with trusted reviews</span>
                    <span id='content-sub-title'>Collecting authentic reviews is a proven way to gain new clients. Reply to reviews to grow relationships, showing clients you care about their feedback.</span>
                    <div className='content-items'>
                        <span className='item'>✔ <Link to='/sales/new-sale/appointments'>Check out appointments</Link> to automatically prompt clients to leave reviews</span>
                        <span className='item'>✔ Keep your automated <Link to='/clients/automated-messages'>Thank you messages</Link> enabled to boost your reviews and star ratings after your clients visit</span>
                        <span className='item'>✔ Attract new clients with authentic reviews coming from your satisfied customers</span>
                    </div>
                    <Link id='learn-more' to='https://support.fresha.com/hc/en-us/articles/4402043117074-How-do-I-manage-client-reviews' target='_blank'>
                        Learn more
                    </Link>
                </div>
                <div className='image-container'></div>
            </div>
        </div>
    )
}

export default ReviewsPage;
