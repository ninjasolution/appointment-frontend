import React from 'react';
import './onlinebooking.scss';

const OnlineBookingPage = () => {
    return (
        <div className='online-booking-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Online Booking</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Save</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Online cancellation and rescheduling</span>
                            <span className='sub-title'>Set how far in advance clients can cancel or reschedule, after this timeframe clients must call to change their appointment.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Clients can cancel or reschedule online</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>Anytime</option>
                                        <option>Up to 30 minutes in advance</option>
                                        <option>Up to 1 hour in advance</option>
                                        <option>Up to 2 hours in advance</option>
                                        <option>Up to 3 hours in advance</option>
                                        <option>Up to 4 hours in advance</option>
                                        <option>Up to 5 hours in advance</option>
                                        <option>Up to 6 hours in advance</option>
                                        <option>Up to 12 hours in advance</option>
                                        <option>Up to 24 hours in advance</option>
                                        <option>Up to 48 hours in advance</option>
                                        <option>Up to 72 hours in advance</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Online booking availability</span>
                            <span className='sub-title'>Set how far in advance clients can book online, and lead time for when clients can cancel or reschedule.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Clients can book appointments</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>Immediately before start time</option>
                                        <option>Up to 15 minutes before start time</option>
                                        <option>Up to 30 minutes before start time</option>
                                        <option>Up to 1 hour before start time</option>
                                        <option>Up to 2 hours before start time</option>
                                        <option>Up to 3 hours before start time</option>
                                        <option>Up to 4 hours before start time</option>
                                        <option>Up to 5 hours before start time</option>
                                        <option>Up to 6 hours before start time</option>
                                        <option>Up to 7 hours before start time</option>
                                        <option>Up to 8 hours before start time</option>
                                        <option>Up to 9 hours before start time</option>
                                        <option>Up to 10 hours before start time</option>
                                        <option>Up to 11 hours before start time</option>
                                        <option>Up to 12 hours before start time</option>
                                        <option>Up to 13 hours before start time</option>
                                        <option>Up to 14 hours before start time</option>
                                        <option>Up to 15 hours before start time</option>
                                        <option>Up to 16 hours before start time</option>
                                        <option>Up to 17 hours before start time</option>
                                        <option>Up to 18 hours before start time</option>
                                        <option>Up to 19 hours before start time</option>
                                        <option>Up to 20 hours before start time</option>
                                        <option>Up to 21 hours before start time</option>
                                        <option>Up to 22 hours before start time</option>
                                        <option>Up to 23 hours before start time</option>
                                        <option>Up to 24 hours before start time</option>
                                        <option>Up to 48 hours before start time</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'></span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>No more than 6 months in the future</option>
                                        <option>No more than 5 months in the future</option>
                                        <option>No more than 4 months in the future</option>
                                        <option>No more than 3 months in the future</option>
                                        <option>No more than 2 months in the future</option>
                                        <option>No more than 1 months in the future</option>
                                    </select>
                                </div>
                                <span className='group-hint'>Controls the time slots available for online booking</span>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Time slot interval</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>10 minutes (max availability)</option>
                                        <option>15 minutes</option>
                                        <option>20 minutes</option>
                                        <option>30 minutes</option>
                                        <option>45 minutes</option>
                                        <option>1 hour (low availability)</option>
                                    </select>
                                </div>
                                <span className='group-hint'>Controls the time slots available for online booking</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-select-members').click()}>
                                        <input className="form-check-input" id='check-select-members' type="checkbox" defaultChecked />
                                        <span className='check-content'>Allow clients to select team members</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Important info</span>
                            <span className='sub-title'>Add important info you’d like clients to see at checkout when booking an appointment or buying a voucher or membership.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Important info</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='toastr-container default'>
                                    <span>New team members will see Fresha in this language but they can override this in their personal user settings.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Online booking activity emails</span>
                            <span className='sub-title'>Receive emails when clients use online booking to book, reschedule or cancel. These emails are sent in addition to regular team members notifications.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-send-booked').click()}>
                                        <input className="form-check-input" id='check-send-booked' type="checkbox" />
                                        <span className='check-content'>Send to team members booked</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-send-specific').click()}>
                                        <input className="form-check-input" id='check-send-specific' type="checkbox" defaultChecked />
                                        <span className='check-content'>Send to specific email address</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Specific email addresses</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" value='top1successfulman@gmail.com' />
                                </div>
                                <span className='group-hint'>Enter multiple addresses by separating with commas</span>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Featured services</span>
                            <span className='sub-title'>Display your top 6 most popular and discounted services at the top of your online booking menu.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-featured-services').click()}>
                                        <input className="form-check-input" id='check-featured-services' type="checkbox" defaultChecked />
                                        <span className='check-content'>Show Featured services when clients click on a Book now direct link</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Star ratings</span>
                            <span className='sub-title'>Show how great your team are by displaying average star ratings next to their names, it's proven to attract more clients online.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check' onClick={() => document.getElementById('check-star-ratings').click()}>
                                        <input className="form-check-input" id='check-star-ratings' type="checkbox" defaultChecked />
                                        <span className='check-content'>Display star ratings for team members</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineBookingPage;