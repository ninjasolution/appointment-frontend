import React from 'react';
import { Link } from 'react-router-dom';
import './countstep.scss';

const CountStepPage = () => {
    return (
        <div className='stocktake-count-container' id='stocktake-count-container'>
            <div className='topbar'>
                <div className='topbar-close'>
                    <Link className='action-close' to='/catalogue/stocktakes'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </Link>
                </div>
                <div className='topbar-title'>
                    <span className='title-content'>Count products</span>
                </div>
                <div className='actions-container'>
                    <Link className='action-pause'>Pause</Link>
                    <Link className='action-review'>Review stocktake</Link>
                </div>
            </div>
            <div className='main-container'>
                <div className="left-side">
                    <div className='content-container'>
                        <div className='content-detail'>
                            <div className='content-title'>Vouchers</div>
                        </div>
                        <div className='content-action'>
                            <div className='option-group'>
                                <button className='btn btn-option'>
                                    Options
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.481l6.247-7.14a1 1 0 011.506 1.318l-7 8a1 1 0 01-1.506 0l-7-8a1 1 0 111.506-1.317L12 14.482z"></path></svg>
                                    </span>
                                </button>
                            </div>
                            <div className='add-group'>
                                <button className='btn btn-add'>
                                    Add voucher type
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='content-setting'>
                        <div className='search-container'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input type="text" placeholder='Search by voucher name' />
                        </div>
                    </div>
                    <div className='content-details'>
                        <div className='table-container'>
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
                </div>
                <div className="right-side">
                    <div className='sidebar-title'>
                        <span className='title-content'>Your last counted products</span>
                    </div>
                    <div className='list-tab'>
                        <span>Product</span>
                        <span>Counted</span>
                    </div>
                    <div className='history-item'>
                        <div className='item-detail'>
                            <span className='item-name'>Myhailo Savchuk</span>
                            <div className='item-barcode'>
                                <span className='bar-title'>Barcode:</span>
                                <span className='bar-content'>ajfkas</span>
                            </div>
                            <div className='item-sku'>
                                <span className='sku-title'>SKU</span>
                                <span className='sku-content'>34</span>
                            </div>
                        </div>
                        <div className='item-count'>
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountStepPage;