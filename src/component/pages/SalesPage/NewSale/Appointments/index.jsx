import React, { useState } from 'react';
import '../newsale.scss';

const Appointments = () => {

    const [filterState, setFilterState] = useState(false);

    const showFilterModal = () => {
        setFilterState(true);
    }

    const hideFilterModal = () => {
        setFilterState(false);
    }

    return (
        <>
            <div className='appointment-setting'>
                <div className='setting-container'>
                    <div className='search-container'>
                        <div className='search-group'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input placeholder='Search by client, team member or service name' />
                        </div>
                        <div className='filter-group' onClick={showFilterModal}>
                            <span>Filters</span>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                        </div>
                    </div>
                    {
                        filterState ?
                        <div className='filter-modal'>
                            <div className='modal-header'>
                                <span id='modal-title'>Filters</span>
                                <span id='modal-close' onClick={hideFilterModal}>
                                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                                </span>
                            </div>
                            <div className='modal-body'>
                                <span id='select-title'>Team member</span>
                                <select id='member-list'>
                                    <option>All team members</option>
                                    <option>Mykhailo Savchuk</option>
                                    <option>Wendy Smith (Demo)</option>
                                </select>
                            </div>
                            <div className='modal-footer'>
                                <span onClick={hideFilterModal}>Clear all filters</span>
                                <div id='actions'>
                                    <button id='action-cancel' onClick={hideFilterModal}>Cancel</button>
                                    <button id='action-apply'>Apply</button>
                                </div>
                            </div>
                        </div> : <></>
                    }
                    <div className='select-container'>
                        <select className='select-date'>
                            <option>Today</option>
                            <option>Yesterday</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                            <option>Last year</option>
                            <option>Week to date</option>
                            <option>Month to date</option>
                            <option>Quarter to date</option>
                            <option>Year to date</option>
                            <option>Tomorrow</option>
                            <option>Next 7 days</option>
                            <option>Next 30 days</option>
                            <option>Next 90 days</option>
                            <option>All to date</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='appointment-container' style={{ border: 'none' }}>
                <div className='none-content' style={{ display: 'none' }}>
                    <div className='none-logo'>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fillRule="evenodd" clipRule="evenodd" d="M20 4a2 2 0 0 1 2 2v2h20V6a2 2 0 1 1 4 0v2h6a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h6V6a2 2 0 0 1 2-2Zm-2 8h-6v8h40v-8h-6v2a2 2 0 1 1-4 0v-2H22v2a2 2 0 1 1-4 0v-2Zm34 12H12v28h40V24Z" fill="url(#a)"></path><defs><linearGradient id="a" x1="15.164" y1="11.761" x2="51.719" y2="45.504" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No appointments to check out</p>
                    <span>Try selecting a different date period above or just</span>
                    <span><a>show last 7 days</a> to see more results.</span>
                </div>
                <div className='appointment-details'>
                    <div className='appointment-item active'>
                        <div className='appointment-date'>20 FEB</div>
                        <div className='appointment-content'>
                            <div className='active-content'>
                                <div id='active-time'>
                                    <span id='time'>02:15 – 02:30</span>
                                    <span id='day'>Monday</span>
                                </div>
                                <div id='active-content'>
                                    <span id='title'>Walk-In</span>
                                    <span id="content">15min with Mykhailo Savchuk • service-1, 321sadf</span>
                                </div>
                            </div>
                            <div className='active-price'>
                                <span id="price">RUB 56</span>
                                <button id="action">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='appointment-item'>
                        <div className='appointment-date'>20 FEB</div>
                        <div className='appointment-content'>
                            <div className='active-content'>
                                <div id='active-time'>
                                    <span id='time'>02:15 – 02:30</span>
                                    <span id='day'>Monday</span>
                                </div>
                                <div id='active-content'>
                                    <span id='title'>Walk-In</span>
                                    <span id="content">15min with Mykhailo Savchuk • service-1, 321sadf</span>
                                </div>
                            </div>
                            <div className='active-price'>
                                <span id="price">RUB 56</span>
                                <button id="action">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointments;
