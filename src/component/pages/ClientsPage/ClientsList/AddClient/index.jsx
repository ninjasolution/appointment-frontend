import React, { useState } from 'react';
import '../../clients.scss';
import { Link } from 'react-router-dom';

const AddClient = () => {

    const [addressModalState, setAddressModalState] = useState(false);

    const visibleAddressModal = () => {
        setAddressModalState(true);
    }

    const selectAddressType = (type) => {
        if (type === 'home') {

            document.getElementById(`type-${type}`).classList.toggle('active');
            document.getElementById(`type-work`).classList.remove('active');
            document.getElementById(`type-other`).classList.remove('active');
            document.getElementById('address-name').value = 'Home';
        } else if (type === 'work') {

            document.getElementById(`type-${type}`).classList.toggle('active');
            document.getElementById(`type-home`).classList.remove('active');
            document.getElementById(`type-other`).classList.remove('active');
            document.getElementById('address-name').value = 'Work';
        } else {

            document.getElementById(`type-${type}`).classList.toggle('active');
            document.getElementById(`type-home`).classList.remove('active');
            document.getElementById(`type-work`).classList.remove('active');
            document.getElementById('address-name').value = 'Other';
        }
    }

    return (
        <div className='new-client-container' id='new-client-container'>
            {
                addressModalState ?
                    <div className='add-address-modal'>
                        <div className='modal-header'>
                            <span className='modal-title'>New address</span>
                            <span className='modal-close' onClick={() => setAddressModalState(false)}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className='type-group'>
                                <div className="select-type">
                                    <div className='type-home type-item' id='type-home' onClick={() => selectAddressType('home')}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10.5l11-9 11 9" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 22.5v-5a1 1 0 011-1h2a1 1 0 011 1v5" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M4 12.5v9a1 1 0 001 1h14a1 1 0 001-1v-9" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></svg>
                                        <p>Home</p>
                                    </div>
                                    <div className='type-work type-item' id='type-work' onClick={() => selectAddressType('work')}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.714 6.229V2.2h6.714V6.23" stroke="#101928" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.057 14.287H2V7.572c0-.741.601-1.343 1.343-1.343H20.8c.742 0 1.343.602 1.343 1.343v6.715h-8.057M20.8 16.972v2.685c0 .742-.601 1.343-1.343 1.343H4.686a1.343 1.343 0 01-1.343-1.343v-2.685" stroke="#101928" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path stroke="#101928" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" d="M10.057 11.601h4.029v5.371h-4.029z"></path></svg>
                                        <p>Work</p>
                                    </div>
                                    <div className='type-other type-item' id='type-other' onClick={() => selectAddressType('other')}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></circle><circle cx="10" cy="10" r="1" fill="#101928"></circle><circle cx="10" cy="14" r="1" fill="#101928"></circle><circle cx="14" cy="10" r="1" fill="#101928"></circle><circle cx="14" cy="14" r="1" fill="#101928"></circle></svg>
                                        <p>Other</p>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Address name</span>
                                <div className='input-container'>
                                    <input type="text" id='address-name' />
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Address</span>
                                <div className="input-container">
                                    <div className='address-container'>
                                        <span id='select-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M7 .75c3.653 0 6.75 2.79 6.75 6.75 0 1.12-.452 2.416-1.266 3.873-.507.906-1.146 1.857-1.886 2.833a40.249 40.249 0 01-3.064 3.571.75.75 0 01-1.068 0 38.437 38.437 0 01-.962-1.033 40.249 40.249 0 01-2.102-2.538c-.74-.976-1.379-1.927-1.886-2.833C.702 9.916.25 8.621.25 7.5.25 3.54 3.347.75 7 .75zm0 1.5c-2.858 0-5.25 2.155-5.25 5.25 0 .813.375 1.888 1.076 3.14.47.84 1.07 1.735 1.772 2.66A38.771 38.771 0 007 16.16l.38-.417c.69-.77 1.38-1.595 2.022-2.443.702-.925 1.303-1.82 1.772-2.66.701-1.252 1.076-2.327 1.076-3.14 0-3.095-2.392-5.25-5.25-5.25zM7 4.5a3 3 0 110 6 3 3 0 010-6zM7 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>
                                        </span>
                                    </div>
                                    <input type="text" id='mobile-number' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className="address-details">
                                    <div className="items-list">
                                        <div className='item' id="address-item">
                                            <span className='item-title'>Address</span>
                                            <span className='item-add' id="add-address">+ Add</span>
                                        </div>
                                        <div className='item' id="apt-item">
                                            <span className="item-title">Apt./Suite etc</span>
                                            <span className="item-add" id='add-apt'>+ Add</span>
                                        </div>
                                        <div className='item' id="district-item">
                                            <span className="item-title">District</span>
                                            <span className="item-add" id='add-district'>+ Add</span>
                                        </div>
                                        <div className='item' id="city-item">
                                            <span className="item-title">City</span>
                                            <span className="item-add" id='add-city'>+ Add</span>
                                        </div>
                                        <div className='item' id="region-item">
                                            <span className="item-title">Region</span>
                                            <span className="item-add" id='add-region'>+ Add</span>
                                        </div>
                                        <div className='item' id="postcode-item">
                                            <span className="item-title">Postcode</span>
                                            <span className="item-add" id='add-postcode'>+ Add</span>
                                        </div>
                                        <div className='item' id="country-item">
                                            <span className="item-title">Country</span>
                                            <span className="item-add" id='add-country'>+ Add</span>
                                        </div>
                                    </div>
                                    <div className="actions-list">
                                        <span id="action-edit">Edit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <div className='actions-container'>
                                <button className='modal-button modal-close' onClick={() => setAddressModalState(false)}>Cancel</button>
                                <button className='modal-button modal-continue'>Continue</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='topbar'>
                <Link id='edit-close' to='/clients/list'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <span id='edit-title'>Add a new client</span>
                <button id='edit-save'>Save</button>
            </div>
            <div className='title'>
                <span>Add a new client</span>
            </div>
            <div className='main-container'>
                <div className="left-side">
                    <div className="basic-info group-container">
                        <div className='group-title'>
                            <span id='title'>Basic info</span>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>First name</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="Enter client's first name" />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='group'>
                                <span id='group-title'>Last name</span>
                                <div className='input-container'>
                                    <input type="text" id='last-name' placeholder="Enter client's last name" />
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Mobile number</span>
                                <div className='input-container'>
                                    <input type="text" id='mobile-number' placeholder="Enter client's mobile number" />
                                </div>
                            </div>
                            <div className='group'>
                                <span id='group-title'>Email address</span>
                                <div className='input-container'>
                                    <input type="text" id='email-address' placeholder="Enter client's email address" />
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Gender</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Non-binary</option>
                                        <option>Prefer not to say</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container' style={{ padding: '0px 26px 40px' }}>
                            <div className='group'>
                                <span id='group-title'>Date of birth</span>
                                <div className='input-container'>
                                    <input type="month" id='date-birth' placeholder="Day and birth" />
                                </div>
                                <span className='group-hint'></span>
                            </div>
                            <div className='group'>
                                <span id='group-title'>Year</span>
                                <div className='input-container'>
                                    <input type="text" id='year' placeholder="Year" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="important-client-info group-container">
                        <div className='group-title'>
                            <span id='title'>Important client info</span><br />
                            <span id='sub-title'>Important client info will only be visible to you and team members.</span>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Client info</span>
                                <div className='input-container'>
                                    <textarea rows="8" placeholder='E.g. allergy to shampoos with sodium'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div id='check-logo'>
                                        <svg viewBox="0 0 12 10"><path fill="#FFF" fillRule="evenodd" d="M4.716 7.558L1.646 4.96A1 1 0 00.354 6.486l3.872 3.277a1 1 0 001.44-.155l6.128-8A1 1 0 0010.206.392l-5.49 7.166z"></path></svg>
                                    </div>
                                    <span>Display on all bookings</span>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                    </div>
                    <div className="additional-info group-container">
                        <div className='group-title'>
                            <span id='title'>Additional info</span>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Additional phone number</span>
                                <div className='input-container'>
                                    <input type="text" id='mobile-number' placeholder="Enter client's additional number" />
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container' style={{ padding: '0px 20px 40px' }}>
                            <div className='group'>
                                <span id='group-title'>Client source</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Walk-In</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="address group-container">
                        <div className='group-title'>
                            <span id='title'>Address</span>
                        </div>
                        <div className='two-group sub-container' style={{ padding: '30px 20px' }}>
                            <div className='group'>
                                <div className='add-address-action' onClick={visibleAddressModal}>
                                    <span className='add-logo'>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                    </span>
                                    <span className='add-content'>Add new address</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="notifications group-container">
                        <div className='group-title'>
                            <span id='title'>Notifications</span><br />
                            <span id='sub-title'>Choose how you'd like to keep this client up to date about their appointments and sales, like vouchers and memberships.</span>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Client notifications</span>
                                <div className='form-check form-switch'>
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    <span className='check-content'>Send email notifications</span>
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Marketing notifications</span>
                                <div className='form-check form-switch'>
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    <span className='check-content'>Client accepts email marketing notifications</span>
                                </div>
                                <div className='form-check form-switch'>
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    <span className='check-content'>Client accepts text message marketing notifications</span>
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container' style={{ padding: '20px 20px 40px' }}>
                            <div className='group'>
                                <span id='group-title'>Preferred language</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Bulgarian (български)</option>
                                        <option>Czech (čeština)</option>
                                        <option>Danish (dansk)</option>
                                        <option>German (Deutsch)</option>
                                        <option>Greek (Ελληνικά)</option>
                                        <option>English (English)</option>
                                        <option>Spanish (español)</option>
                                        <option>Finnish (suomi)</option>
                                        <option>French (français)</option>
                                        <option>Croatian (hrvatski)</option>
                                        <option>Hungarian (magyar)</option>
                                        <option>Italian (italiano)</option>
                                        <option>Norwegian Bokmål (norsk bokmål)</option>
                                        <option>Dutch (Nederlands)</option>
                                        <option>Polish (polski)</option>
                                        <option>Brazilian Portuguese (português (Brasil))</option>
                                        <option>Romanian (română)</option>
                                        <option>Swedish (svenska)</option>
                                        <option>Russian (русский)</option>
                                        <option>Ukrainian (українська)</option>
                                        <option>Slovenian (slovenščina)</option>
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

export default AddClient;