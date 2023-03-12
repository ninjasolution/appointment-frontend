import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './dashboard.scss';

const DashboardPage = () => {

    const [filterModal, setFilterModal] = useState(false);
    const state = {
        options: {
            chart: {
                id: 'recent sales'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: 'Sales',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Appointment',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
        ]
    }

    return (
        <div className='reports-dashboard-container'>
            {
                filterModal ?
                    <div className='filter-modal'>
                        <div className='modal-header'>
                            <span id='modal-title'>Filters</span>
                            <span id='modal-close' onClick={() => setFilterModal(false)}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className='group'>
                                <span className='group-title'>Location</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All locations</option>
                                        <option>Nikja</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Team member</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All team members</option>
                                        <option>Mykhailo Savchuk</option>
                                        <option>Wendy Smith (demo)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <span onClick={() => setFilterModal(false)}>Clear all filters</span>
                            <div id='actions'>
                                <button id='action-cancel' onClick={() => setFilterModal(false)}>Cancel</button>
                                <button id='action-apply'>Apply</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Dashboard</div>
                    <span className='content-summary'>
                        Track and manage your business stats here.
                        <a> Learn more</a>
                    </span>
                </div>
            </div>
            <div className='content-setting'>
                <div className='date-group'>
                    <button className='select-before'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M11.316 13.762l.458-.48c.15-.168.226-.362.226-.585 0-.227-.075-.42-.226-.578L8.804 9l2.97-3.12c.15-.158.226-.35.226-.577 0-.223-.075-.417-.226-.584l-.458-.478C11.16 4.08 10.976 4 10.76 4c-.22 0-.404.08-.55.244L6.232 8.422C6.077 8.576 6 8.77 6 9c0 .227.077.422.232.584l3.978 4.178c.15.16.334.238.55.238.21 0 .397-.08.556-.238z"></path></svg>
                    </button>
                    <button className='select-today'>Today</button>
                    <div className='select-date'>
                        <input type="date" />
                    </div>
                    <button className='select-after'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6.684 13.762l-.458-.48c-.15-.168-.226-.362-.226-.585 0-.227.075-.42.226-.578L9.196 9l-2.97-3.12C6.076 5.723 6 5.53 6 5.304c0-.223.075-.417.226-.584l.458-.476C6.84 4.08 7.024 4 7.24 4c.22 0 .404.08.55.244l3.978 4.178c.155.154.232.347.232.578 0 .227-.077.422-.232.584L7.79 13.762c-.15.16-.334.238-.55.238-.21 0-.397-.08-.556-.238z"></path></svg>
                    </button>
                </div>
                <div className='filter-container' onClick={() => setFilterModal(true)}>
                    <span>Filters</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                </div>
            </div>
            <div className='content-details'>
                <div className='three-group'>
                    <div className='content-item'>
                        <span className='item-title'>Total Appointments</span>
                        <span className='item-content'>0</span>
                        <span className='item-sub-content'>- 0% previous day</span>
                        <div className='item-details'>
                            <span className='item-detail-title'>Completed</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Not Completed</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Cancelled</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>No-show</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                    </div>
                    <div className='content-item'>
                        <span className='item-title'>Online Appointments</span>
                        <span className='item-content'>0 (0%)</span>
                        <span className='item-sub-content'>- 0% previous day</span>
                        <div className='item-details'>
                            <span className='item-detail-title'>Completed</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Not Completed</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Cancelled</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>No-show</span>
                            <span className='item-detail-content'>0 (0%)</span>
                        </div>
                    </div>
                    <div className='content-item'>
                        <span className='item-title'>Occupancy</span>
                        <span className='item-content'>0%</span>
                        <span className='item-sub-content'>- 0% previous day</span>
                        <div className='item-details'>
                            <span className='item-detail-title'>Working Hours</span>
                            <span className='item-detail-content'>14h</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Booked Hours</span>
                            <span className='item-detail-content'>0min (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Unbooked Hours</span>
                            <span className='item-detail-content'>14h (100%)</span>
                        </div>
                    </div>
                </div>
                <div className='three-group'>
                    <div className='content-item'>
                        <span className='item-title'>Total Sales</span>
                        <span className='item-content'>RUB 0</span>
                        <span className='item-sub-content'>- 0% previous day</span>
                        <div className='item-details'>
                            <span className='item-detail-title'>Services</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Products</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Shipping</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Late cancellation fees</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>No-show fees</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Memberships</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                    </div>
                    <div className='content-item'>
                        <span className='item-title'>Average Sale</span>
                        <span className='item-content'>RUB 0</span>
                        <span className='item-sub-content'>- 0% previous day</span>
                        <div className='item-details'>
                            <span className='item-detail-title'>Sales Count</span>
                            <span className='item-detail-content'>0</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Av. Service Sale</span>
                            <span className='item-detail-content'>RUB 0</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Av. Product Sale</span>
                            <span className='item-detail-content'>RUB 0</span>
                        </div>
                    </div>
                    <div className='content-item'>
                        <span className='item-title'>Client Retention (Sales)</span>
                        <span className='item-content'>0%</span>
                        <span className='item-sub-content'>- 0% previous day</span>
                        <div className='item-details'>
                            <span className='item-detail-title'>Returning</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>New</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                        <div className='item-details'>
                            <span className='item-detail-title'>Walk-In</span>
                            <span className='item-detail-content'>RUB 0 (0%)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='appointments-chart'>
                <span>Total appointmens</span>
                <Chart options={state.options} series={state.series} type="line" width={'100%'} height={'300px'}/>
            </div>
            <div className='sales-chart'>
                <span>Total sales</span>
                <Chart options={state.options} series={state.series} type="line" width={'100%'} height={'300px'}/>
            </div>
        </div>
    )
}

export default DashboardPage;