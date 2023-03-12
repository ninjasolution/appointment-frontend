import React, { useState } from 'react';
import '../newsale.scss';

const Memberships = () => {

    const [filterState, setFilterState] = useState(false);

    const showFilterModal = () => {
        setFilterState(true);
    }

    const hideFilterModal = () => {
        setFilterState(false);
    }

    return (
        <>
            <div className='memberships-setting'>
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
                                <div className="group">
                                    <span id='select-title'>Team member</span>
                                    <select id='member-list'>
                                        <option>All team members</option>
                                        <option>Mykhailo Savchuk</option>
                                        <option>Wendy Smith (Demo)</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <span id='select-title'>Team member</span>
                                    <select id='member-list'>
                                        <option>All team members</option>
                                        <option>Mykhailo Savchuk</option>
                                        <option>Wendy Smith (Demo)</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <span id='select-title'>Team member</span>
                                    <select id='member-list'>
                                        <option>All team members</option>
                                        <option>Mykhailo Savchuk</option>
                                        <option>Wendy Smith (Demo)</option>
                                    </select>
                                </div>
                                <div className="group" id='check-group'>
                                    <input type="checkbox" id='check-all'/>
                                    <span onClick={() => {document.getElementById('check-all').click()}}>Display only memberships which cover all services</span>
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
                </div>
            </div>
            <div className='memberships-container'>
                <div className='none-content' style={{ display: 'none' }}>
                    <div className='none-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.333 4.667A4.68 4.68 0 0114 9.333 4.68 4.68 0 019.333 14a4.68 4.68 0 01-4.666-4.667 4.68 4.68 0 014.666-4.666zm.187 2.8H8.4v2.8h2.8v-1.12H9.52v-1.68zM11.2 0c1.03 0 1.867.836 1.867 1.867l-.001 3.266h-.933v-.934L.933 4.2v4.2c0 .479.36.873.825.927l.109.006h1.399v.933h-1.4A1.867 1.867 0 010 8.4V1.867C0 .836.836 0 1.867 0H11.2zm0 .933H1.867a.933.933 0 00-.927.825l-.007.109v1.4l11.2-.001v-1.4A.933.933 0 0011.31.94L11.2.933z" fill="#FFF" fillRule="evenodd"></path></svg>
                    </div>
                    <p>No memberships added yet</p>
                    <span><a>Click here</a> to add and manage your memberships.</span>
                </div>
                <div className='memberships-details'>
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{ width: '40%' }}>Membership name</th>
                                <th className='font-left' style={{ width: '15%' }}>Valid for</th>
                                <th className='font-left' style={{ width: '20%' }}>Sessions</th>
                                <th className='font-right' style={{ width: '25%' }}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='membership-info'>
                                    <div id='membership-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.333 4.667A4.68 4.68 0 0114 9.333 4.68 4.68 0 019.333 14a4.68 4.68 0 01-4.666-4.667 4.68 4.68 0 014.666-4.666zm.187 2.8H8.4v2.8h2.8v-1.12H9.52v-1.68zM11.2 0c1.03 0 1.867.836 1.867 1.867l-.001 3.266h-.933v-.934L.933 4.2v4.2c0 .479.36.873.825.927l.109.006h1.399v.933h-1.4A1.867 1.867 0 010 8.4V1.867C0 .836.836 0 1.867 0H11.2zm0 .933H1.867a.933.933 0 00-.927.825l-.007.109v1.4l11.2-.001v-1.4A.933.933 0 0011.31.94L11.2.933z" fill="#FFF" fillRule="evenodd"></path></svg>
                                    </div>
                                    <div id='membership-detail'>
                                        <span id='membership-name'>tyri</span>
                                        <span id='membership-content'>All services</span>
                                    </div>
                                </td>
                                <td className='membership-valid'>1 month</td>
                                <td className='membership-quantity'>5 sessions</td>
                                <td className='membership-price'>
                                    <div>
                                        <span id='current-price'>RUB 30</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='membership-count'>
                        <span>1 of 1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Memberships;
