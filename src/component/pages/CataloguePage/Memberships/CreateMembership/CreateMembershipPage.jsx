import React from 'react';
import { Link } from 'react-router-dom';
import './createmembership.scss';

const CreateMembershipPage = () => {
    return (
        <div className='create-membership-container' id='create-membership-container'>
            <div className='topbar'>
                <div className='topbar-close'>
                    <Link className='action-close' to='/catalogue/vouchers'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </Link>
                </div>
                <div className='topbar-title'>
                    <span className='title-content'>Create a membership</span>
                </div>
                <button className='action-save'>Create membership</button>
            </div>
            <div className='main-container'>
                <div className='details-title'>
                    <span>Create a membership</span>
                </div>
                <div className='details-group'>
                    <div className="basic-info group-container">
                        <div className='group-container-title'>
                            <span className='title'>Basic info</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Membership name</span>
                            <div className='input-container'>
                                <input type="text" id='first-name' placeholder='Add membership name' />
                            </div>
                            <span className='group-hint'>This field is required</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Membership description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="4" placeholder='Add membership description'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="services-sessions group-container">
                        <div className='group-container-title'>
                            <span className='title'>Services and sessions</span>
                            <span className='sub-title'>Add the services and sessions included in the membership.</span>
                        </div>
                        <div className='group'>
                            <span className='title'>Included services</span>
                            <div className='input-container'>
                                <select>
                                    <option>14 days</option>
                                    <option>1 month</option>
                                    <option>2 months</option>
                                    <option>3 months</option>
                                    <option>4 months</option>
                                    <option>6 months</option>
                                    <option>1 month</option>
                                    <option>3 months</option>
                                    <option>5 months</option>
                                    <option>Forever</option>
                                </select>
                            </div>
                        </div>
                        <div className='two-group'>
                            <div className='group'>
                                <span className='group-title'>Sessions</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Limited</option>
                                        <option>Unlimited</option>
                                    </select>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Number of sessions</span>
                                <div className='input-container'>
                                    <input type="text" id='email-address' value='5' />
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-payment group-container">
                        <div className='group-container-title'>
                            <span className='title'>Pricing and payment</span>
                            <span className='sub-title'>Choose how you'd like your clients to pay.</span>
                        </div>
                        <div className='two-group'>
                            <div className='group'>
                                <span className='group-title'>Valid for</span>
                                <div className='input-container'>
                                    <select>
                                        <option>7 days</option>
                                        <option>14 days</option>
                                        <option>1 month</option>
                                        <option>2 months</option>
                                        <option>3 months</option>
                                        <option>4 months</option>
                                        <option>6 months</option>
                                        <option>8 months</option>
                                        <option>1 year</option>
                                        <option>18 months</option>
                                        <option>2 years</option>
                                        <option>5 years</option>
                                    </select>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Price</span>
                                <div className='input-container'>
                                    <input type="text" id='email-address' value='5' />
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                        <div className='sub-container'>
                            <span className='sub-group-title'>Tax rate</span>
                            <div className='group'>
                                <span className='group-title'>Tax rate</span>
                                <div className='input-container'>
                                    <select>
                                        <option>No tax</option>
                                    </select>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                    </div>
                    <div className="online-sales group-container">
                        <div className='group-container-title'>
                            <span className='title'>Online sales</span>
                            <span className='sub-title'>Choose if you would like to sell your membership online.</span>
                        </div>
                        <div className='group'>
                            <div className='check-container'>
                                <div className='form-check form-switch' onClick={() => document.getElementById('enable-online-sales').click()}>
                                    <input className="form-check-input" id='enable-online-sales' type="checkbox" />
                                    <span className='check-content'>Enable online sales</span>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='sub-ad-container'>
                                <span>Online membership sales are coming soon to Russian Federation with payments in Fresha</span>
                            </div>
                        </div>
                    </div>
                    <div className="colour-customization group-container">
                        <div className='group-container-title'>
                            <span className='title'>Colour customisation</span>
                            <span className='sub-title'>Select a colour that matches your business.</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Choose a colour</span>
                            <div className='colour-group'>
                                <div className='blue-container colour-container active'>
                                    <div className='select-blue select-colour'></div>
                                </div>
                                <div className='black-container colour-container'>
                                    <div className='select-black select-colour'></div>
                                </div>
                                <div className='green-container colour-container'>
                                    <div className='select-green select-colour'></div>
                                </div>
                                <div className='orange-container colour-container'>
                                    <div className='select-orange select-colour'></div>
                                </div>
                                <div className='purple-container colour-container'>
                                    <div className='select-purple select-colour'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="terms-conditions group-container">
                        <div className='group-container-title'>
                            <span className='title'>Terms & Conditions</span>
                            <span className='sub-title'>If there are any rules attached to your membership it's a good place to mention them.</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Terms & Conditions</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMembershipPage;