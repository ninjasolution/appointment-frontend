import React, { useEffect, useState } from 'react';
import './index.scss';
import { generatePath, Link } from 'react-router-dom';
import { createPost, getPosts } from '../../../../services/PostsService';
import { calendarColorByIndex, genderByIndex, permissionByIndex } from '../../../../config';

const AddEmpoyee = () => {

    const [serviceModal, setserviceModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const [email, setEmail] = useState("");
    const [permission, setPermission] = useState(2)
    const [startDate, setStartDate] = useState(() => {
        return new Date();
    });
    const [endDate, setEndDate] = useState(() => {
        return new Date();
    });
    const [services, setServices] = useState([{_id: 1}, {_id: 2}, {_id: 3}])
    const [color, setColor] = useState(0)
    const [enableBooking, setEnableBooking] = useState(true)

    const submitHandler = () => {
        const member = {
            firstName,
            lastName,
            title,
            info,
            email,
            phone,
            employeement: {
                startDate,
                endDate
            },
            enableBooking,
            services: services.map(item => item._id),
            permission
        }
        createPost(`/api/user/member`, member)
        .then(res => {
            console.log(member)
        })

    }

    useEffect(() => {
        getPosts(`/api/service`)
            .then(res => {
                // setServices(res.data.data)
            })
    }, [])

    const visibleAddressModal = () => {
        setserviceModal(true);
    }


    return (
        <div className='new-employee-container' id='new-employee-container'>
            {
                serviceModal &&
                <div className='add-address-modal'>
                    <div className='modal-header'>
                        <span className='modal-title'>Select Services</span>
                        <span className='modal-close' onClick={() => setserviceModal(false)}>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="Search services" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className="list-group">
                                {
                                    services?.map((item, key) => (

                                        <div key={key}>

                                            <div className='list-item'>
                                                <div className='check-container'>
                                                    <div id='check-logo'>
                                                        <svg viewBox="0 0 12 10"><path fill="#FFF" fillRule="evenodd" d="M4.716 7.558L1.646 4.96A1 1 0 00.354 6.486l3.872 3.277a1 1 0 001.44-.155l6.128-8A1 1 0 0010.206.392l-5.49 7.166z"></path></svg>
                                                    </div>
                                                    <div className='item-detail'>
                                                        <span className='item-name'>Blow Dry</span>
                                                        <span className='item-content'>1h 30min</span>
                                                    </div>
                                                </div>
                                                <div className='item-price'>
                                                    <span>RUB 25</span>
                                                </div>
                                            </div>

                                            {
                                                key !== services.length - 1 &&
                                                <div className='item-spliter'></div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className='modal-footer'>
                        <div className='actions-container'>
                            <button className='modal-button modal-close' onClick={() => setserviceModal(false)}>Cancel</button>
                            <button className='modal-button modal-continue' onClick={() => setserviceModal(false)}>Continue</button>
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
                                <input type="text" id='mobile-number' placeholder="Enter client's mobile number" value={title} onChange={e => setTitle(e.target.value)} />
                            </div>
                            <span className='input-description'>This title will be visible to clients</span>
                        </div>
                    </div>

                    <div className='two-group sub-container' style={{ padding: '0px 26px 40px' }}>
                        <div className='group'>
                            <span id='group-title'>Notes</span>
                            <span className='input-description'>(Optional)</span>
                            <div className='input-container'>
                                <textarea rows="8" placeholder='Add private notes viewable in team member settings only' value={info} onChange={e => setInfo(e.target.value)} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="important-client-info group-container">
                    <div className='group-title'>
                        <h5>Contact</h5><br />
                        <span id='sub-title'>Team member contacts are confidential and won't be shared with your clients.</span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span id='group-title'>Email</span>
                            <div className='input-container'>
                                <input type="email" id='email' placeholder="Enter client's first name" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className='group'>
                            <span id='group-title'>Mobile Number</span>
                            <div className='input-container'>
                                <input type="text" id='phone' placeholder="Enter client's last name" value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className='group-title'>
                    </div>
                    <div className='two-group sub-container'>

                        <h5 >Employment</h5><br />
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span id='group-title'>Start date</span>
                            <div className='input-container'>
                                <input type="date" id='first-name' value={startDate} onChange={e => setStartDate(e.target.value)} />
                            </div>
                        </div>
                        <div className='group'>
                            <span id='group-title'>End date</span>
                            <div className='input-container'>
                                <input type="date" id='last-name' value={endDate} onChange={e => setEndDate(e.target.value)} />
                            </div>
                        </div>
                    </div>

                </div>


                {/* <div className="important-client-info group-container">
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
                </div> */}

                <div className="important-client-info group-container">
                    <div className='group-title'>
                        <span id='title'>Booking</span><br />
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <div className='check-container'>
                                <div className='form-check'>
                                    <input className="form-check-input" style={{ height: "20px", width: "20px" }} checked={enableBooking} name='test-check' onChange={e => setEnableBooking(e.target.checked)} type="checkbox" />
                                    <label style={{ cursor: "pointer", userSelect: "none" }} onClick={() => setEnableBooking(!enableBooking)}>
                                        <span className='check-content' >Display all settings</span>
                                    </label>
                                </div>
                            </div>
                            <span className='input-description'>Allow this team member to receive bookings on the calendar. </span>
                        </div>
                    </div>
                </div>

                <div className="additional-info group-container">
                    <div className='group-title'>
                        <span id='title'>Calendar colour</span> <br />
                        <span id='sub-title'>Choose a colour to see this team members appointments in the calendar.</span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span id='group-title'>Select colour</span>
                            <div className='colour-group'>
                                {
                                    Object.keys(calendarColorByIndex).map((key) => (
                                        <div key={key} style={{ cursor: "pointer" }} className={`blue-container colour-container ${key == color && "active"}`} onClick={() => setColor(key)}>
                                            <div style={{ background: calendarColorByIndex[key] }} className='select-colour'></div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="additional-info group-container">
                    <div className='group-title'>
                        <span id='title'>Services</span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <div className='input-container'>
                                <input type="text" disabled value={`All Services ${1}`} />
                                <Link to={"#"} onClick={() => setserviceModal(true)} style={{ marginRight: "20px" }}> <span style={{ color: "#037aff", fontSize: "17px", fontWeight: "400" }}>Edit</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address group-container">
                    <div className='group-title'>
                        <span id='title'>Commission</span>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '30px 20px' }}>
                        <div className='group'>
                            <div className='add-address-action' onClick={visibleAddressModal}>
                                <span className='add-logo'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                </span>
                                <span className='add-content'>Add commission</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="address group-container">
                    <div className='group-title'>
                        <span id='title'>Team member permission</span>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '30px 20px' }}>
                        <div className='group'>
                            <div className='input-container'>
                                <select value={permission} onChange={e => setPermission(e.target.value)}>
                                    {
                                        Object.keys(permissionByIndex)?.map((key, idx) => (
                                            <option key={idx} value={key}>{permissionByIndex[key]}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmpoyee;