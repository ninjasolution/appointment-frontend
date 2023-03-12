import React, { useState } from 'react';
import '../newsale.scss';

const Vouchers = () => {

    const [voucherModal, setVoucherModal] = useState(false);

    const showNewVoucherModal = () => {
        setVoucherModal(true);
    }

    const hideVoucherModal = () => {
        setVoucherModal(false);
    }

    return (
        <>
            <div className='vouchers-setting'>
                <div className='setting-container'>
                    <div className='search-container'>
                        <div className='search-group'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input placeholder='Search by voucher name' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='vouchers-container'>
                <div className='none-content' style={{ display: 'none' }}>
                    <div className='none-logo'>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fillRule="evenodd" clipRule="evenodd" d="M2 17.98A4 4 0 0 1 6 14h52a4 4 0 0 1 4 4v6.035A2 2 0 0 1 60 26c-3.23 0-5.894 2.661-5.894 6S56.77 38 60 38a2 2 0 0 1 2 1.965l-.001 6V46a4 4 0 0 1-4 4H6a4 4 0 0 1-4-3.98v-5.985A2 2 0 0 1 4 38c3.23 0 5.894-2.661 5.894-6s-2.664-6-5.895-6a2 2 0 0 1-2-2.035L2 17.98ZM58 18H6l.031 4.21c4.505.95 7.863 4.99 7.863 9.79 0 4.8-3.358 8.84-7.863 9.79L6 46h52l.032-4.197c-4.537-.925-7.926-4.98-7.926-9.803 0-4.822 3.389-8.878 7.926-9.802L58 18Zm-26 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-10 6c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Z" fill="url(#voucher2-illustration)"></path><defs><linearGradient id="voucher2-illustration" x1="10.955" y1="19.373" x2="33.356" y2="56.709" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No vouchers added yet</p>
                    <span><a>Click here</a> to add and manage your vouchers types</span>
                    <span>or create a one-off voucher for this sale.</span>
                    <button>Create a one-off voucher</button>
                </div>
                <div className='vouchers-details'>
                    {
                        voucherModal ?
                        <div className='voucher-modal'>
                            <div className='modal-header'>
                                <span id='modal-title'>Create one-off voucher</span>
                                <span id='modal-close' onClick={hideVoucherModal}>
                                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                                </span>
                            </div>
                            <div className='modal-body'>
                                <div className="group">
                                    <span id='select-title'>Included services</span>
                                    <div id='select-service'>
                                        <span id='service-type'>All services</span>
                                        <span id='service-edit'>Edit</span>
                                    </div>
                                </div>
                                <div className='service-value-container'>
                                    <div className="group">
                                        <span id='select-title'>Value</span>
                                        <div className='value-group'>
                                            <div id='currency'>
                                                <span>RUB</span>
                                            </div>
                                            <div id='value-input'>
                                                <input type='text' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <span id='select-title'>Retail price</span>
                                        <div className='retail-price-group'>
                                            <div id='currency'>
                                                <span>RUB</span>
                                            </div>
                                            <div id='value-input'>
                                                <input type='text'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <span id='select-title'>Valid for</span>
                                    <select id='valid-list'>
                                        <option>14 days</option>
                                        <option>1 month</option>
                                        <option>2 months</option>
                                        <option>3 months</option>
                                        <option>4 months</option>
                                        <option>6 months</option>
                                        <option>1 year</option>
                                        <option>3 years</option>
                                        <option>5 years</option>
                                        <option>Forever</option>
                                    </select>
                                </div>
                                <div className="group" id='check-group'>
                                    <span id='select-title'>Voucher name</span>
                                    <input type="text" id='check-all' />
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <span onClick={hideVoucherModal}>Clear all filters</span>
                                <div id='actions'>
                                    <button id='action-cancel' onClick={hideVoucherModal}>Cancel</button>
                                    <button id='action-apply'>Apply</button>
                                </div>
                            </div>
                        </div> : <></>
                    }
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{ width: '40%' }}>Voucher name</th>
                                <th className='font-left' style={{ width: '25%' }}>Service</th>
                                <th className='font-right' style={{ width: '17%' }}>Price/Value</th>
                                <th className='font-right' style={{ width: '18%' }}>Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={showNewVoucherModal}>
                                <td className='voucher-new'>
                                    <div id='create-logo'>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                    </div>
                                    <div id='create-detail'>
                                        <span id='create-name'>Create one-off voucher</span>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='voucher-info'>
                                    <div id='voucher-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1 20.75A.75.75 0 01.25 20v-5a.75.75 0 01.75-.75 2.25 2.25 0 100-4.5A.75.75 0 01.25 9V4A.75.75 0 011 3.25h22a.75.75 0 01.75.75v5a.75.75 0 01-.75.75 2.25 2.25 0 100 4.5.75.75 0 01.75.75v5a.75.75 0 01-.75.75zm.75-1.5h20.5v-3.575a3.751 3.751 0 010-7.35V4.75H1.75v3.575a3.751 3.751 0 010 7.35v3.575zM8 10.75a.75.75 0 110-1.5h8a.75.75 0 110 1.5zm0 4a.75.75 0 110-1.5h8a.75.75 0 110 1.5z" fill="#FFF" fillRule="nonzero"></path></svg>
                                    </div>
                                    <div id='voucher-detail'>
                                        <span id='voucher-name'>Mykhailo Savchuk</span>
                                    </div>
                                </td>
                                <td className='voucher-service'>All services</td>
                                <td className='voucher-price'>RUB 1,111 / RUB 1,123</td>
                                <td className='voucher-sold'>0</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='voucher-count'>
                        <span>1 of 1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vouchers;