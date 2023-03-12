import React from 'react';
import { Link } from 'react-router-dom';
import './suppliernew.scss';

const SupplierNewPage = () => {
    return (
        <div className='supplier-new-container' id='supplier-new-container'>
            <div className='topbar'>
                <Link className='edit-close' to='/catalogue/suppliers'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <span className='edit-title'>Add a new supplier</span>
                <button className='edit-save'>Save</button>
            </div>
            <div className='title'>
                <span>Add a new supplier</span>
            </div>
            <div className='main-container'>
                <div className="supplier-details group-container">
                    <div className='group-title'>
                        <span className='title'>Supplier details</span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Supplier name</span>
                        <div className='input-container'>
                            <input type="text" id='supplier-name' placeholder="e.g. L'Oreal" />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container' style={{margin: '0px 0px 20px'}}>
                        <span className='group-title'>Supplier description</span>
                        <div className='input-container'>
                            <textarea cols="30" rows="3" id='supplier-description'></textarea>
                        </div>
                    </div>
                </div>
                <div className="contact-info group-container">
                    <div className='group-title'>
                        <span className='title'>Contact info</span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>First name</span>
                        <div className='input-container'>
                            <input type="text" id='first-name' placeholder="e.g. John" />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Last name</span>
                        <div className='input-container'>
                            <input type="text" id='last-name' placeholder="e.g. Doe" />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Mobile number</span>
                        <div className='input-container'>
                            <input type="text" id='mobile-number' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Telephone</span>
                        <div className='input-container'>
                            <input type="text" id='telephone' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Email</span>
                        <div className='input-container'>
                            <input type="text" id='email' placeholder='mail@example.com' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container' style={{margin: '0px 0px 20px'}}>
                        <span className='group-title'>Website</span>
                        <div className='input-container'>
                            <input type="text" id='website' placeholder='www.google.com' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                </div>
                <div className="physical-address group-container">
                    <div className='group-title'>
                        <span className='title'>Physical address</span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Street</span>
                        <div className='input-container'>
                            <input type="text" id='street' placeholder='e.g. 12 Main Street' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Suburb</span>
                        <div className='input-container'>
                            <input type="text" id='subrub' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>City</span>
                            <div className='input-container'>
                                <input type="text" id='city' />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>State</span>
                            <div className='input-container'>
                                <input type="text" id='state' />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Zip / Postal Code</span>
                        <div className='input-container'>
                            <input type="text" id='postal-code' />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Country</span>
                        <div className='input-container'>
                            <select id="country"></select>
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='two-group sub-container' style={{margin: '0px 0px 20px'}}>
                        <div className='group'>
                            <div className='form-check'>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Same as postal Address</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierNewPage;