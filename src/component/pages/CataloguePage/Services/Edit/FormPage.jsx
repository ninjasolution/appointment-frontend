import React from 'react';
import { Link } from 'react-router-dom';
import '../services.scss';

const EditFormPage = () => {
    return (
        <div className='edit-form-container' id='add-form-container'>
            <div className='topbar'>
                <Link className='edit-close' to='/catalogue/services'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <span className='edit-title'>Edit single service</span>
                <button className='edit-save'>Save</button>
            </div>
            <div className='title'>
                <span>Edit single service</span>
            </div>
            <div className='main-container'>
                <div className="basic-info group-container">
                    <div className='group-title'>
                        <span className='title'>Basic info</span><br />
                        <span className='sub-title'>Add a service name and choose the treatment type.</span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Service name</span>
                            <div className='input-container'>
                                <input type="text" id='first-name' />
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Treatment type</span>
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
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Service category</span>
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
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Service description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="5" placeholder='Add a short description'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Aftercare description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="5" placeholder='Add aftercare description'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '0px 26px 40px' }}>
                        <div className='group'>
                            <span className='group-title'>Service available for</span>
                            <div className='input-container'>
                                <select>
                                    <option>Everyone</option>
                                    <option>Females only</option>
                                    <option>Male only</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="online-booking-info group-container">
                    <div className='group-title'>
                        <span className='title'>Online booking</span><br />
                        <span className='sub-title'>Enable online bookings, choose who the service is available for and add a short description.</span>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '20px 30px 30px' }}>
                        <div className='group'>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Enable online bookings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-info group-container">
                    <div className='group-title'>
                        <span className='title'>Team</span><br />
                        <span className='sub-title'>Assign team members to the service and manage commission</span>
                    </div>
                    <div className='two-group sub-container' style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                        <div className='group'>
                            <div className='check-group'>
                                <div className='form-group'>
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    <span className='check-username'>Select All</span>
                                </div>
                            </div>
                            <div className='check-group'>
                                <div className='form-group'>
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    <div className='user-avatar'>
                                        <div className='user-nickname'>MS</div>
                                    </div>
                                    <span className='check-username'>Mykhailo Savchuk</span>
                                </div>
                                <div className='form-group'>
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                    <div className='user-avatar'>
                                        <div className='user-nickname'>WS</div>
                                    </div>
                                    <span className='check-username'>Wendy Smith (demo)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '20px 30px 30px' }}>
                        <div className='group'>
                            <span className='group-total-title'>Team member commission</span><br />
                            <span className='group-sub-title'>Calculate team member commission when the service is sold.</span>
                            <div className='form-check form-switch' style={{ margin: '20px 0px 0px' }}>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Enable team member commission</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-duration group-container">
                    <div className='group-title'>
                        <span className='title'>Pricing and Duration</span><br />
                        <span className='sub-title'>Add the pricing options and duration of the service.</span>
                    </div>
                    <div className='tow-group option-container'>
                        <span className='option-title'>Pricing option 1</span>
                        <div className='option-details'>
                            <div className='two-group sub-container'>
                                <div className='group'>
                                    <span className='group-title'>Duration</span>
                                    <div className='input-container'>
                                        <select>
                                            <option>1h</option>
                                            <option>5min</option>
                                            <option>10min</option>
                                            <option>15min</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='group'>
                                    <span className='group-title'>Price type</span>
                                    <div className='input-container'>
                                        <select>
                                            <option>Free</option>
                                            <option>From</option>
                                            <option>Fixed</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='two-group sub-container'>
                                <div className='group'>
                                    <span className='group-title'>Price</span>
                                    <div className='input-container'>
                                        <input type="text" placeholder='RUB 0.00' />
                                    </div>
                                </div>
                                <div className='group'>
                                    <span className='group-title'>Special price</span>
                                    <div className='input-container'>
                                        <input type="text" placeholder='RUB 0.00' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='option-details pricing-name-container'>
                            <div className='two-group sub-container'>
                                <div className='group'>
                                    <span className='group-title'>Pricing name</span>
                                    <div className='input-container'>
                                        <input type="text" placeholder='e.g. Long hair' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='advanced-options'>Advanced pricing options</span>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '15px 25px 30px' }}>
                        <div className='group'>
                            <div className='add-pricing-option'>
                                <span className='add-logo'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                </span>
                                <span className='add-content'>Add pricing option</span>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container extra-time-group' style={{ padding: '20px 30px 40px' }}>
                        <div className='group'>
                            <span className='group-total-title'>Extra time</span><br />
                            <span className='group-sub-title'>Enable extra time after the service.</span>
                            <div className='form-check form-switch' style={{ margin: '20px 0px 0px' }}>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Enable extra time</span>
                            </div>
                            <div className='extra-items-container'>
                                <div className='extra-item'>
                                    <span className='item-title'>Processing time</span>
                                    <span className='item-content'>Take other bookings during this time</span>
                                </div>
                                <div className='extra-item active'>
                                    <span className='item-title'>Blocked time</span>
                                    <span className='item-content'>Block time between appointments</span>
                                </div>
                            </div>
                            <div className='extra-duration-container'>
                                <div className='duration-group'>
                                    <span className='duration-group-title'>Duration</span>
                                    <div className='select-duration'>
                                        <select>
                                            <option>5min</option>
                                            <option>10min</option>
                                            <option>15min</option>
                                            <option>30min</option>
                                            <option>45min</option>
                                            <option>1h</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sales-settings group-container">
                    <div className='group-title'>
                        <span className='title'>Pricing and Duration</span>
                    </div>
                    <div className='group'>
                        <div className='tax-container'>
                            <div className='tax-group'>
                                <span className='tax-group-title'>Tax</span>
                                <div className='select-tax'>
                                    <select>
                                        <option>No tax</option>
                                        <option>Default: No tax</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='group voucher-sales-group'>
                        <span className='group-total-title'>Voucher sales</span>
                        <div className='form-check form-switch'>
                            <input className="form-check-input" type="checkbox" defaultChecked />
                            <span className='check-content'>Enable voucher sales</span>
                        </div>
                        <div className='voucher-expiry-container'>
                            <div className='voucher-group'>
                                <span className='voucher-group-title'>Voucher expiry period</span>
                                <div className='select-voucher'>
                                    <select>
                                        <option>Default (6 Months)</option>
                                        <option>14 Days</option>
                                        <option>1 Month</option>
                                        <option>2 Months</option>
                                        <option>3 Months</option>
                                        <option>4 Months</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>
                                        <option>3 Years</option>
                                        <option>5 Years</option>
                                        <option>No Expiry</option>
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

export default EditFormPage;