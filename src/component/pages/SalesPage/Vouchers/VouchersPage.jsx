import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import './vouchers.scss';

const VouchersPage = (props) => {

    const dispatch = useDispatch();
    const [filterModalState, setFilterModalState] = useState(false);

    const hideFilterModal = () => {
        setFilterModalState(false);
    }

    const visibleFilterModal = () => {
        setFilterModalState(true);
    }

    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <div className='vouchers-page-container'>
            {
                filterModalState ?
                    <div className='filter-modal'>
                        <div className='modal-header'>
                            <span id='modal-title'>Filters</span>
                            <span id='modal-close' onClick={hideFilterModal}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className="group">
                                <span id='select-title'>Status</span>
                                <select id='valid-list'>
                                    <option>All statuses</option>
                                    <option>Unpaid</option>
                                    <option>Valid</option>
                                    <option>Expired</option>
                                    <option>Redeemed</option>
                                    <option>Refunded Sale</option>
                                    <option>Voided Sale</option>
                                </select>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <span onClick={hideFilterModal}>Clear all filters</span>
                            <div id='actions'>
                                <button id='action-cancel' onClick={hideFilterModal}>Cancel</button>
                                <button id='action-apply'>Apply</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Vouchers sold</div>
                    <span className='content-summary'>
                        View, filter and export vouchers purchased by your clients.
                    </span>
                </div>
                <select className='select-action'>
                    <option>Export</option>
                    <option>CSV</option>
                </select>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search by Code or Client' />
                </div>
                <div className='filter-group' onClick={visibleFilterModal}>
                    <span>Filters</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr className='table-header'>
                                <th className='font-left' style={{ width: '120px' }}>
                                    <span className='header-content'>Payment Date</span>
                                </th>
                                <th className='font-left' style={{ width: '120px' }}>
                                    <span className='header-content'>Expiry date</span>
                                </th>
                                <th className='font-left' style={{ width: '120px' }}>
                                    <span className='header-content'>Sale #</span>
                                </th>
                                <th className='font-left' style={{ width: '120px' }}>
                                    <span className='header-content'>Client</span>
                                </th>
                                <th className='font-left' style={{ width: '120px' }}>
                                    <span className='header-content'>Type</span>
                                </th>
                                <th className='font-left' style={{ width: '140px' }}>
                                    <span className='header-content'>Status</span>
                                </th>
                                <th className='font-left' style={{ width: '120px' }}>
                                    <span className='header-content'>Code</span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Total</span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Redeemed</span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Remaining</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-left'>22 Feb 2023, 00:10</td>
                                <td className='font-left'>22 May 2023</td>
                                <td className='font-left ref-name'>
                                    <span onClick={() => dispatch({ type: 'SHOW_DETAIL', payload: true })}>2</span>
                                </td>
                                <td className='font-left'>Walk-In</td>
                                <td className='font-left'>Gift Voucher</td>
                                <td className='font-left'>
                                    <span className='badge badge-success'>VALID</span>
                                </td>
                                <td className='font-left'>VRSYLSGA</td>
                                <td className='font-left'>RUB 123.00</td>
                                <td className='font-left'>RUB 0.00</td>
                                <td className='font-left'>RUB 123.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='result-count'>
                        <span>Showing 1 of 1 results</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => {
    return {
        detailModal: state.detailModalState
    }
})(VouchersPage);
