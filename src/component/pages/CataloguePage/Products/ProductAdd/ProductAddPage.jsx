import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './productadd.scss';

const ProductAddPage = () => {

    const [addressModalState, setAddressModalState] = useState(false);

    return (
        <div className='product-add-container' id='product-add-container'>
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
                            <div className='group'>
                                <span className='group-title-content'>Address name</span>
                                <div className='input-container'>
                                    <input type="text" id='address-name' />
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Address</span>
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
                <Link className='edit-close' to='/clients/list'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <span className='edit-title'>Add new product</span>
                <button className='edit-save'>Save</button>
            </div>
            <div className='total-title'>
                <span>Add new product</span>
            </div>
            <div className='main-container'>
                <div className="left-side">
                    <div className="basic-info group-container">
                        <div className='group-title'>
                            <span className='title'>Basic info</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product name</span>
                            <div className='input-container'>
                                <input type="text" className='product-name' />
                            </div>
                            <span className='group-hint'></span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product barcode</span>
                            <div className='input-container'>
                                <input type="text" className='last-name' placeholder="UPC, EAN, GTIN" />
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product brand</span>
                            <div className='input-container'>
                                <select>
                                    <option>wer</option>
                                    <option>sadf</option>
                                    <option>sdsfw</option>
                                </select>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Measure</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Milliliters (ml)</option>
                                        <option>Liters (l)</option>
                                        <option>FluclassName ounces (Fl. oz.)</option>
                                        <option>Grams (g)</option>
                                        <option>Kilograms (kg)</option>
                                        <option>Gallons (gal)</option>
                                        <option>Ounces (oz)</option>
                                        <option>Pounds (lb)</option>
                                        <option>Centimeters (cm)</option>
                                        <option>Feet (ft)</option>
                                        <option>Inches (in)</option>
                                        <option>A whole product</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Amount</span>
                                <div className='input-container'>
                                    <input type="text" className='email-address' />
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Short description</span>
                            <div className='input-container'>
                                <input type="text" className='last-name' />
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product category</span>
                            <div className='input-container'>
                                <select>
                                    <option>wetfs</option>
                                    <option>dssdf</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pricing group-container">
                        <div className='group-title'>
                            <span className='title'>Pricing</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Supply price</span>
                            <div className='input-container'>
                                <input type="text" placeholder='RUB 0.00' />
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Retail sales</span><br />
                            <span className='group-sub-content'>Allow sales of this product at checkout.</span>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Enable retail sales</span>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Retail price</span>
                                <div className='input-container'>
                                    <input type="text" id='retail-price' placeholder="RUB 0.00" />
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Special price</span>
                                <div className='input-container'>
                                    <input type="text" id='special-price' placeholder="RUB 0.00" />
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Markup</span>
                                <div className='input-container'>
                                    <input type="text" id='markup' placeholder="% 0.00" />
                                </div>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Tax</span>
                            <div className='input-container'>
                                <select>
                                    <option>Default: No tax</option>
                                    <option>No tax</option>
                                </select>
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Team member commission</span><br />
                            <span className='group-sub-content'>Calculate team member commission when the product is sold.</span>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Enable team member commission</span>
                            </div>
                        </div>
                    </div>
                    <div className="inventory group-container">
                        <div className='group-title'>
                            <span className='title'>Inventory</span><br />
                            <span>Manage stock levels of this product through Fresha.</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>SKU (Stock Keeping Unit)</span>
                            <div className='input-container'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='link-button'>Generate SKU Automatically</span>
                        </div>
                        <div className='group sub-container'>
                            <div className='group'>
                                <span className='logo'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                </span>
                                <span className='link-button'>Add another SKU code</span>
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Supplier</span>
                            <div className='input-container'>
                                <select>
                                    <option>sdfase</option>
                                    <option>Myaildf</option>
                                </select>
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Stock quantity</span>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <span className='check-content'>Track stock quantity</span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Current stock quantity</span>
                            <div className='input-container'>
                                <input type="text" id='retail-price' placeholder="0" />
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Low stock level</span>
                                <div className='input-container'>
                                    <input type="text" id='retail-price' placeholder="0" />
                                </div>
                                <span className='group-hint'>The level to get notified to reorder</span>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Reorder quantity</span>
                                <div className='input-container'>
                                    <input type="text" id='special-price' placeholder="0" />
                                </div>
                                <span className='group-hint'>The default amount to order</span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" />
                                <span className='check-content'>Receive low stock notifications.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="product-photo">
                        <div className='container-title'>
                            <span className='title'>Product photos</span><br />
                            <span className='sub-title'>Drag and drop a photo to change the order.</span>
                        </div>
                        <div className='photo-group'>
                            <div className='select-group'>
                                <div className='select-image'>
                                    <span className='container-logo'>
                                        <svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path d="M21.072 16.002a.75.75 0 01.75.75v1.842h1.842a.75.75 0 01.743.648l.007.102a.75.75 0 01-.75.75h-1.842v1.842a.75.75 0 01-.648.743l-.102.007a.75.75 0 01-.75-.75v-1.842H18.48a.75.75 0 01-.743-.648l-.007-.102a.75.75 0 01.75-.75h1.842v-1.842a.75.75 0 01.648-.743zM14.102.45a.75.75 0 01.624.334l1.621 2.43h3.285a2.593 2.593 0 012.593 2.594v7.494a.75.75 0 11-1.5 0V5.808c0-.604-.49-1.093-1.093-1.093h-3.686a.75.75 0 01-.624-.334L13.7 1.95H8.974l-1.62 2.43a.75.75 0 01-.624.335H3.043c-.604 0-1.093.49-1.093 1.093v11.98c0 .605.49 1.094 1.093 1.094h11.691a.75.75 0 110 1.5H3.044A2.593 2.593 0 01.45 17.789V5.808a2.593 2.593 0 012.593-2.593h3.285L7.948.784A.75.75 0 018.574.45zm-2.764 5.53a5.358 5.358 0 110 10.716 5.358 5.358 0 010-10.716zm0 1.5a3.858 3.858 0 100 7.716 3.858 3.858 0 000-7.716zM4.08 5.808a1.037 1.037 0 110 2.074 1.037 1.037 0 010-2.074z" fill="#037AFF" fillRule="evenodd"></path></svg>
                                    </span>
                                    <span className='container-content'>Add a photo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAddPage;