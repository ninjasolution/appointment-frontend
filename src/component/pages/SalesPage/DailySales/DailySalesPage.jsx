import React from 'react';
import './dailysales.scss';

const DailySalesPage = () => {
    return (
        <div className='daily-sales-container'>
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Daily sales</div>
                    <span className='content-summary'>
                        View, filter and export the transactions and cash movement for the day.
                        <a> Learn more</a>
                    </span>
                </div>
                <select className='select-action'>
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                </select>
            </div>
            <div className='content-setting'>
                <button className='select-before'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M11.316 13.762l.458-.48c.15-.168.226-.362.226-.585 0-.227-.075-.42-.226-.578L8.804 9l2.97-3.12c.15-.158.226-.35.226-.577 0-.223-.075-.417-.226-.584l-.458-.478C11.16 4.08 10.976 4 10.76 4c-.22 0-.404.08-.55.244L6.232 8.422C6.077 8.576 6 8.77 6 9c0 .227.077.422.232.584l3.978 4.178c.15.16.334.238.55.238.21 0 .397-.08.556-.238z"></path></svg>
                </button>
                <button className='select-today'>Today</button>
                <div className='select-date' onClick={() => document.getElementById('select-date').click()}>
                    <input type="date" id='select-date' />
                </div>
                <button className='select-after'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6.684 13.762l-.458-.48c-.15-.168-.226-.362-.226-.585 0-.227.075-.42.226-.578L9.196 9l-2.97-3.12C6.076 5.723 6 5.53 6 5.304c0-.223.075-.417.226-.584l.458-.476C6.84 4.08 7.024 4 7.24 4c.22 0 .404.08.55.244l3.978 4.178c.155.154.232.347.232.578 0 .227-.077.422-.232.584L7.79 13.762c-.15.16-.334.238-.55.238-.21 0-.397-.08-.556-.238z"></path></svg>
                </button>
            </div>
            <div className='content-details'>
                <div className='transaction-container'>
                    <div className='transaction-title'>
                        <span>Transaction summary</span>
                    </div>
                    <table>
                        <tr>
                            <th className='font-left' style={{ width: '30%' }}>Item type</th>
                            <th className='font-right' style={{ width: '21%' }}>Sales qty</th>
                            <th className='font-right' style={{ width: '21%' }}>Refund qty</th>
                            <th className='font-right'>Gross total</th>
                        </tr>
                        <tr>
                            <td className='font-left'>Services</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr>
                            <td className='font-left'>Products</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr>
                            <td className='font-left'>Shipping</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr>
                            <td className='font-left'>Vouchers</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr>
                            <td className='font-left'>Memberships</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr>
                            <td className='font-left'>Late cancellation fees</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr>
                            <td className='font-left'>No-show fees</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                        <tr className='last-item last-column'>
                            <td className='font-left'>Total Sales</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>0</td>
                            <td className='font-right'>$0.00</td>
                        </tr>
                    </table>
                </div>
                <div className='cash-container'>
                    <div className='cash-title'>
                        <span>Cash movement summary</span>
                    </div>
                    <div className='cash-detail'>
                        <table>
                            <tr>
                                <th className='font-left' style={{ width: '38%' }}>Payment type</th>
                                <th className='font-right' style={{ width: '32%' }}>Payments collected</th>
                                <th className='font-right'>Refunds paid</th>
                            </tr>
                            <tr>
                                <td className='font-left'>Cash</td>
                                <td className='font-right'>$0.00</td>
                                <td className='font-right'>$0.00</td>
                            </tr>
                            <tr>
                                <td className='font-left'>Other</td>
                                <td className='font-right'>$0.00</td>
                                <td className='font-right'>$0.00</td>
                            </tr>
                            <tr>
                                <td className='font-left'>Voucher Redemptions</td>
                                <td className='font-right'>$0.00</td>
                                <td className='font-right'>$0.00</td>
                            </tr>
                            <tr className='last-item'>
                                <td className='font-left'>Payments collected</td>
                                <td className='font-right'>$0.00</td>
                                <td className='font-right'>$0.00</td>
                            </tr>
                            <tr className='last-item last-column'>
                                <td className='font-left'>Of which tips</td>
                                <td className='font-right'>$0.00</td>
                                <td className='font-right'>$0.00</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailySalesPage;
