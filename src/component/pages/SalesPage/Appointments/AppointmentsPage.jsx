import React, { useState } from 'react';
import './appointments.scss';

const AppointmentsPage = () => {

    const [filterModalState, setFilterModalState] = useState(false);

    const visibleFilterModal = () => {
        setFilterModalState(true);
    }

    const hideFilterModal = () => {
        setFilterModalState(false)
    }
    
    return (
        <div className='appointments-container'>
            {
                filterModalState ?
                <div className='filter-modal'>
                    <div className='modal-header'>
                        <span id='modal-title'>Filters</span>
                        <span id='modal-close' onClick={hideFilterModal}>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className="group">
                            <span id='select-title'>Team member</span>
                            <select id='member-list'>
                                <option>All team members</option>
                                <option>Mykhailo Savchuk</option>
                                <option>Wendy Smith (Demo)</option>
                            </select>
                        </div>
                        <div className="group">
                            <span id='select-title'>Channel</span>
                            <select id='channel-list'>
                                <option>All channels</option>
                                <option>All online channels</option>
                                <option>Fresha</option>
                                <option>Book now link</option>
                                <option>Facebook</option>
                                <option>Instagram</option>
                                <option>Google</option>
                                <option>Marketing - Auto campaigns</option>
                                <option>Marketing - Blast messages</option>
                                <option>Offline</option>
                            </select>
                        </div>
                        <div className="group">
                            <span id='select-title'>Status</span>
                            <select id='status-list'>
                                <option>All statuses</option>
                                <option>New</option>
                                <option>Confirmed</option>
                                <option>Arrived</option>
                                <option>Started</option>
                                <option>Cancelled</option>
                                <option>No-show</option>
                                <option>Completed</option>
                            </select>
                        </div>
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
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Appointments</div>
                    <span className='content-summary'>
                        View, filter and export appointments booked by your clients.
                        <a> Learn more</a>
                    </span>
                </div>
                <select className='select-action'>
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                </select>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search by Reference or Client' />
                </div>
                <div className='select-month'>
                    <button>Month to date</button>
                </div>
                <div className='filter-group' onClick={visibleFilterModal}>
                    <span>Filters</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                </div>
                <div className='schedule-container'>
                    <select className='select-schedule'>
                        <option>{'Client (A-Z)'}</option>
                        <option>{'Client (Z-A)'}</option>
                        <option>{'Service (A-Z)'}</option>
                        <option>{'Service (Z-A)'}</option>
                        <option>{'Created by (A-Z)'}</option>
                        <option>{'Created by (Z-A)'}</option>
                        <option>{'Created on (oldest first)'}</option>
                        <option>{'Created on (newest first)'}</option>
                        <option>{'Scheduled on (oldest first)'}</option>
                        <option>{'Scheduled on (newest first)'}</option>
                        <option>{'Location (A-Z)'}</option>
                        <option>{'Location (Z-A)'}</option>
                        <option>{'Team member (A-Z)'}</option>
                        <option>{'Team member (Z-A)'}</option>
                        <option>{'Appointment status (A-Z)'}</option>
                        <option>{'Appointment status (Z-A)'}</option>
                        <option>{'Duration (shortest first)'}</option>
                        <option>{'Duration (longest first)'}</option>
                        <option>{'Price (lowest first)'}</option>
                        <option>{'Price (highest first)'}</option>
                    </select>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr className='table-header'>
                                <th className='font-left' style={{ width: '120px' }}>Ref #</th>
                                <th className='font-right' style={{ width: '150px' }}>
                                    <span className='header-content'>Client</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '150px' }}>
                                    <span className='header-content'>Service</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '180px' }}>
                                    <span className='header-content'>Created by</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '180px' }}>
                                    <span className='header-content'>Created On</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '180px' }}>
                                    <span className='header-content'>Scheduled On</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Duration</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' stxxxxxxxxxxxx555555555555555r4444444444444444yle={{ width: '180px' }}>
                                    <span className='header-content'>Team member</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '100px' }}>
                                    <span className='header-content'>Price</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Status</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-left ref-name'>#317A5E92</td>
                                <td className='font-left'>Walk-In</td>
                                <td className='font-left'>Haircut</td>
                                <td className='font-left'>Draky Yaroshenko</td>
                                <td className='font-left'>13 Feb 2023, 02:00</td>
                                <td className='font-left'>13 Feb 2023, 03:25</td>
                                <td className='font-left'>45min</td>
                                <td className='font-left'>Draky Yaroshenko</td>
                                <td className='font-right'>$40.00</td>
                                <td className='font-left'>
                                    <span className='badge-primary badge'>NEW</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-left ref-name'>#67DE4E01</td>
                                <td className='font-left'>Walk-In</td>
                                <td className='font-left'>Haircut</td>
                                <td className='font-left'>Draky Yaroshenko</td>
                                <td className='font-left'>13 Feb 2023, 02:00</td>
                                <td className='font-left'>13 Feb 2023, 03:25</td>
                                <td className='font-left'>45min</td>
                                <td className='font-left'>Draky Yaroshenko</td>
                                <td className='font-right'>$40.00</td>
                                <td className='font-left'>
                                    <span className='badge-success badge'>STARTED</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsPage;
