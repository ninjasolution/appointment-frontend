import React from 'react';
import { Link } from 'react-router-dom';
import './reports.scss';

const ReportsPage = () => {
    return (
        <div className='reports-list-container'>
            <div className='content-header'>
                <span className='content-title'>Reports</span>
                <span className='content-summary'>
                    Access all your Fresha reports.
                    <Link to='https://support.fresha.com/hc/en-us/articles/115001918849'> Learn more</Link>
                </span>
            </div>
            <div className='content-details'>
                <div className='left-side'>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Finances</span>
                            <span className='sub-title'>Monitor your overall finances including sales, refunds, taxes, payments and more</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Finances summary</Link>
                        {/* <Link className='list-item' to='/analytics/finances-summary'>Finances summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Payments summary</Link>
                        {/* <Link className='list-item' to='/analytics/payments-summary'>Payments summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/sales/payment-transactions'>Payment transactions</Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Taxes summary</Link>
                        {/* <Link className='list-item' to='/analytics/taxes-summary'>Taxes summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Service charges</Link>
                        {/* <Link className='list-item' to='/analytics/service-charges'>Service charges</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Tips collected</Link>
                        {/* <Link className='list-item' to='/analytics/tip-collections'>Tips collected</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Discount summary</Link>
                        {/* <Link className='list-item' to='/analytics/discounts-summary'>Discount summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Outstanding sales</Link>
                        {/* <Link className='list-item' to='/analytics/outstanding-invoices'>Outstanding sales</Link> */}
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Inventory</span>
                            <span className='sub-title'>Monitor product stock levels and adjustments made, analyse product sales performance, consumption costs and more</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Stock on hand</Link>
                        {/* <Link className='list-item' to='/analytics/stock-on-hand'>Stock on hand</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Product sales performance</Link>
                        {/* <Link className='list-item' to='/analytics/product-sales-performance'>Product sales performance</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Stock movement log</Link>
                        {/* <Link className='list-item' to='/analytics/stock-movement-log'>Stock movement log</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Stock movement summary</Link>
                        {/* <Link className='list-item' to='/analytics/stock-movement-summary'>Stock movement summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Product consumption</Link>
                        {/* <Link className='list-item' to='/analytics/product-consumption'>Product consumption</Link> */}
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Appointments</span>
                            <span className='sub-title'>View projected revenues of upcoming appointments, track cancellation rates and reasons</span>
                        </div>
                        <Link className='list-item' to='/sales/appointments-list/'>Appointments list</Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Appointments summary</Link>
                        {/* <Link className='list-item' to='/analytics/appointments-summary'>Appointments summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Appointment cancellation</Link>
                        {/* <Link className='list-item' to='/analytics/appointment-cancellations'>Appointment cancellation</Link> */}
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Clients</span>
                            <span className='sub-title'>Gain insights into how clients interact with your business and who your top spenders are</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Client list</Link>
                        {/* <Link className='list-item' to='/analytics/clients-list'>Client list</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Client retention</Link>
                        {/* <Link className='list-item' to='/analytics/client-retention'>Client retention</Link> */}
                    </div>
                </div>
                <div className='right-side'>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Sales</span>
                            <span className='sub-title'>Analyse the performance of your business by comparing sales across products, team members, channels and more</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by item</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-item'>Sales by item</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by type</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-type'>Sales by type</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by service</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-service'>Sales by service</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by product</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-product'>Sales by product</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by location</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-location'>Sales by location</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by channel</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-chanel'>Sales by channel</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by client</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-client'>Sales by client</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by team member breakdown</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-staff-breakdown'>Sales by team member breakdown</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by team member</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-staff'>Sales by team member</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by hour</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-hour'>Sales by hour</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by hour of day</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-hour-of-day'>Sales by hour of day</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by day</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-day'>Sales by day</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by month</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-month'>Sales by month</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by quarter</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-quarter'>Sales by quarter</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales by year</Link>
                        {/* <Link className='list-item' to='/analytics/sales-by-year'>Sales by year</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Sales log</Link>
                        {/* <Link className='list-item' to='/analytics/sales-log'>Sales log</Link> */}
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Vouchers</span>
                            <span className='sub-title'>Track your total outstanding liability as well as voucher sales and redemption activity</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Vouchers outstanding balance</Link>
                        {/* <Link className='list-item' to='/analytics/vouchers-outstanding-balance'>Vouchers outstanding balance</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Voucher sales</Link>
                        {/* <Link className='list-item' to='/analytics/voucher-sales'>Voucher sales</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Voucher redemption</Link>
                        {/* <Link className='list-item' to='/analytics/voucher-redemptions'>Voucher redemption</Link> */}
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Deposits</span>
                            <span className='sub-title'>Track your total outstanding balance as well as deposits activity</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Deposits outstanding balance</Link>
                        {/* <Link className='list-item' to='/analytics/deposits-outstanding-balance'>Deposits outstanding balance</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Deposits activity</Link>
                        {/* <Link className='list-item' to='/analytics/deposits-activity'>Deposits activity</Link> */}
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Team</span>
                            <span className='sub-title'>View your team's performance, hours worked as well as commission and tip earnings</span>
                        </div>
                        <Link className='list-item' to='/analytics/list/temp'>Team members working hours</Link>
                        {/* <Link className='list-item' to='/analytics/roster'>Team members working hours</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Tips by team member</Link>
                        {/* <Link className='list-item' to='/analytics/tips'>Tips by team member</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Team members commission summary</Link>
                        {/* <Link className='list-item' to='/analytics/commission-summary'>Team members commission summary</Link> */}
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/analytics/list/temp'>Team members commission detailed</Link>
                        {/* <Link className='list-item' to='/analytics/commission-detailed'>Team members commission detailed</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportsPage;