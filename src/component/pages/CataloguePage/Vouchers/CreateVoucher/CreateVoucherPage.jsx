import React from 'react';
import { Link } from 'react-router-dom';
import './createvoucher.scss';

const CreateVoucherPage = () => {
    return (
        <div className='create-voucher-container' id='create-client-container'>
            <div className='topbar'>
                <div className='topbar-close'>
                    <Link className='action-close' to='/catalogue/vouchers'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </Link>
                </div>
                <div className='topbar-title'>
                    <span id='step-content'>Step 1 of 2: Add your voucher type info</span>
                    <span className='title-content'>Create a voucher type</span>
                </div>
                <button className='action-save'>Next step</button>
            </div>
            <div className='main-container'>
                <div className="left-side">
                    <div style={{ display: 'none' }}>
                        <div className="voucher-info group-container">
                            <div className='group-container-title'>
                                <span className='title'>Voucher info</span>
                                <span className='sub-title'>Add the voucher name, value and duration of the voucher. If the voucher value is higher than the retail price it will encourage more sales.</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Voucher name</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='two-group'>
                                <div className='group'>
                                    <span className='group-title'>Value</span>
                                    <div className='input-container'>
                                        <input type="text" id='mobile-number' />
                                    </div>
                                    <span className='group-hint'></span>
                                </div>
                                <div className='group'>
                                    <span className='group-title'>Retail price</span>
                                    <div className='input-container'>
                                        <input type="text" id='email-address' />
                                    </div>
                                    <span className='group-hint'></span>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Valid for</span>
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
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='check-limited' type="checkbox" />
                                        <span className='check-content'>Limit amount of sales</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Number of sales</span>
                                <div className='input-container'>
                                    <select disabled>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="services-included group-container">
                            <div className='group-container-title'>
                                <span className='title'>Services included</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Services included</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All services</option>
                                        <option>Hair</option>
                                        <option>Blow dry</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="online-sales group-container">
                            <div className='group-container-title'>
                                <span className='title'>Online sales</span>
                                <span className='sub-title'>Choose if you would like to sell your voucher online.</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='enable-online-sales' type="checkbox" />
                                        <span className='check-content'>Enable online sales</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='sub-ad-container'>
                                    <span>Online voucher sales are coming soon to Russian Federation with payments in Fresha</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-container group-container">
                            <div className='group-container-title'>
                                <span className='title'>Text</span>
                                <span className='sub-title'>Add a title and a message on the voucher.</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Voucher title</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Voucher description</span>
                                <div className='input-container'>
                                    <textarea cols="30" rows="6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="voucher-colour group-container">
                            <div className='group-container-title'>
                                <span className='title'>Voucher colour</span>
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
                        <div className='spliter-grid'></div>
                        <div className="buttons-container group-container">
                            <div className='group-container-title'>
                                <span className='title'>Buttons</span>
                                <span className='sub-title'>Add buttons to the voucher.</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='enable-online-sales' type="checkbox" defaultChecked />
                                        <span className='check-content'>Add a Book now button</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="notes-container group-container">
                            <div className='group-container-title'>
                                <span className='title'>Notes for the client</span>
                                <span className='sub-title'>Add a note for clients. This will always be visible.</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='enable-online-sales' type="checkbox" />
                                        <span className='check-content'>Enable notes for clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className='voucher-whole-container'>
                        <div className='whole-header'>
                            <span>Voucher preview</span>
                        </div>
                        <div className='voucher-sub-container'>
                            <div className='sub-header'>
                                <span id='sub1'>Voucher email subject:</span><span id='sub2'>Voucher from Ninja</span>
                            </div>
                            <div className='voucher-container'>
                                <div className='voucher-ticket'>
                                    <div className='header'>
                                        <div className='voucher-logo'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81"><g fill="none" fillRule="evenodd"><path d="M0 0h81v81H0z"></path><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M37.0488 56.2195v-9.3658h6.2439v9.3658"></path><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M27.683 42.9512v13.2683h24.9755V42.9512M57.3415 34.3659c-.0631 2.6473-2.2588 4.743-4.9062 4.6829a4.9647 4.9647 0 01-4.0882-2.0964 5.0341 5.0341 0 01-8.1764 0 5.0341 5.0341 0 01-8.1764 0 4.9647 4.9647 0 01-4.0882 2.0964c-2.6473.0602-4.843-2.0356-4.9061-4.683L29.2439 25h21.8537l6.2439 9.3659z"></path></g></svg>
                                        </div>
                                        <span className='voucher-title'>Ninja</span>
                                        <span className='voucher-content'>Your location address will appear here</span>
                                    </div>
                                    <div className='body'>
                                        <div className='left-square'></div>
                                        <span className='body-title'>Voucher value</span>
                                        <span className='body-content'>RUB 0.00</span>
                                        <div className='right-square'></div>
                                    </div>
                                    <div className='footer'>
                                        <span className='voucher-code'>Voucher code: XXXXXX</span>
                                        <button className='action-book'>Book now</button>
                                        <span>Redeem on all services</span>
                                        <span>Valid for 6 months</span>
                                        <span>For multiple-use until redeemed</span>
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

export default CreateVoucherPage;