import React, { useEffect, useState } from 'react';
import '../../ClientsPage/clients.scss';
import { generatePath, Link } from 'react-router-dom';
import { getPosts } from '../../../../services/PostsService';
import { genderByIndex } from '../../../../config';

const AddEmpoyee = () => {

    const [addressModalState, setAddressModalState] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [secondPhone, setSecondPhone] = useState("");
    const [enableSendEmail, setEnableSendEmail] = useState(false);
    const [enableAcceptEmail, setEnableAcceptEmail] = useState(false);
    const [enableAcceptText, setEnableAcceptText] = useState(false);
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(0);
    const [birthday, setBirthday] = useState("2023-03-25");
    const [clientInfo, setClientInfo] = useState("");
    const [address, setAddress] = useState({ home: "", work: "", other: "" });
    const [addressTab, setAddressTab] = useState("home")
    const [language, setLanguage] = useState(1)
    const [addrContent, setAddrContent] = useState("")
    const [languages, setLanguages] = useState([])

    const submitHandler = () => {

        const _birthday = new Date(birthday);
        const birthDate = `${_birthday.getMonth() + 1}/${_birthday.getDate()}`;
        const birthYear = _birthday.getFullYear();

        const client = {
            firstName,
            lastName,
            phone,
            secondPhone,
            email,
            gender,
            birthYear,
            birthDate,
            address,
            info: clientInfo,
            language,
            address,
            enableAcceptEmail,
            enableAcceptText,
            enableSendEmail
        }
        console.log(client)
        getPosts(`/api/user/client`, client)
            .then(res => {
                console.log(res.data)
            })
    }

    useEffect(() => {
        getPosts(`/api/static/language`)
            .then(res => {
                setLanguages(res.data.data)
            })
    }, [])

    const visibleAddressModal = () => {
        setAddressModalState(true);
    }

    useEffect(() => {
        setAddrContent(address[addressTab])
    }, [addressTab])

    return (
        <div className='new-client-container' id='new-client-container'>
            {
                addressModalState &&
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
                                <div className={`type-home type-item ${addressTab == "home" && "active"}`} id='type-home' onClick={() => setAddressTab('home')}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10.5l11-9 11 9" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 22.5v-5a1 1 0 011-1h2a1 1 0 011 1v5" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M4 12.5v9a1 1 0 001 1h14a1 1 0 001-1v-9" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></svg>
                                    <p>Home</p>
                                </div>
                                <div className={`type-work type-item ${addressTab == "work" && "active"}`} id='type-work' onClick={() => setAddressTab('work')}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.714 6.229V2.2h6.714V6.23" stroke="#101928" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.057 14.287H2V7.572c0-.741.601-1.343 1.343-1.343H20.8c.742 0 1.343.602 1.343 1.343v6.715h-8.057M20.8 16.972v2.685c0 .742-.601 1.343-1.343 1.343H4.686a1.343 1.343 0 01-1.343-1.343v-2.685" stroke="#101928" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path stroke="#101928" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" d="M10.057 11.601h4.029v5.371h-4.029z"></path></svg>
                                    <p>Work</p>
                                </div>
                                <div className={`type-other type-item ${addressTab == "other" && "active"}`} id='type-other' onClick={() => setAddressTab('other')}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" stroke="#101928" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></circle><circle cx="10" cy="10" r="1" fill="#101928"></circle><circle cx="10" cy="14" r="1" fill="#101928"></circle><circle cx="14" cy="10" r="1" fill="#101928"></circle><circle cx="14" cy="14" r="1" fill="#101928"></circle></svg>
                                    <p>Other</p>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Address name</span>
                            <div className='input-container'>
                                <input type="text text-capitalize" id='address-name' value={addressTab} readOnly />
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
                                <input type="text" id='mobile-number' value={addrContent} onChange={e => { setAddrContent(e.target.value); setAddress({ ...address, [addressTab]: addrContent }) }} />
                            </div>
                        </div>
                        {/* <div className='group'>
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
                        </div> */}
                    </div>
                    <div className='modal-footer'>
                        <div className='actions-container'>
                            <button className='modal-button modal-close' onClick={() => setAddressModalState(false)}>Cancel</button>
                            <button className='modal-button modal-continue' onClick={() => setAddressModalState(false)}>Continue</button>
                        </div>
                    </div>
                </div>
            }
            <div className='topbar'>
                <Link id='edit-close' to='/clients/list'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <button id='edit-save' onClick={submitHandler}>Save</button>
            </div>
            <div className='title'>
                <span>Add new team member</span>
            </div>
            <div className='main-container'>
                <div style={{width: "100%", maxWidth: "100px"}}>
                    <div className="basic-info group-container">
                        <div className='group-title'>
                            <span id='title'>Basic info</span>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>First name</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="Enter client's first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='group'>
                                <span id='group-title'>Last name</span>
                                <div className='input-container'>
                                    <input type="text" id='last-name' placeholder="Enter client's last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Team member title</span>
                                <div className='input-container'>
                                    <input type="text" id='mobile-number' placeholder="Enter client's mobile number" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className='two-group sub-container' style={{ padding: '0px 26px 40px' }}>
                            <div className='group'>
                                <span id='group-title'>Notes (Optional)</span>
                                <div className='input-container'>
                                    <textarea rows="8" placeholder='E.g. allergy to shampoos with sodium' value={clientInfo} onChange={e => setClientInfo(e.target.value)} />
                                </div>
                            </div>
                            {/* <div className='group'>
                                <span id='group-title'>Year</span>
                                <div className='input-container'>
                                    <input type="number" id='year' placeholder="Year" value={birthYear} onChange={e => setBirthYear(e.target.value)} />
                                </div>
                            </div> */}
                        </div>

                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Email</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="Enter client's first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='group'>
                                <span id='group-title'>Mobile Number</span>
                                <div className='input-container'>
                                    <input type="text" id='last-name' placeholder="Enter client's last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span id='group-title'>Start date</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="Enter client's first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='group'>
                                <span id='group-title'>End date</span>
                                <div className='input-container'>
                                    <input type="text" id='last-name' placeholder="Enter client's last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="important-client-info group-container">
                        <div className='group-title'>
                            <span id='title'>Works at</span><br />
                            <span id='sub-title'>Choose the locations where this team member works.</span>
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

                    <div className="important-client-info group-container">
                        <div className='group-title'>
                            <span id='title'>Booking</span><br />
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <div className='check-container'>
                                    <div id='check-logo'>
                                        <svg viewBox="0 0 12 10"><path fill="#FFF" fillRule="evenodd" d="M4.716 7.558L1.646 4.96A1 1 0 00.354 6.486l3.872 3.277a1 1 0 001.44-.155l6.128-8A1 1 0 0010.206.392l-5.49 7.166z"></path></svg>
                                    </div>
                                    <span>Allow calendar bookings</span>
                                </div>
                                <span className='group-hint'>Allow this team member to receive bookings on the calendar. </span>
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
                                    <input type="text" id='mobile-number' placeholder="Enter client's additional number" value={secondPhone} onChange={e => setSecondPhone(e.target.value)} />
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
            </div>
        </div>
    )
}

export default AddEmpoyee;