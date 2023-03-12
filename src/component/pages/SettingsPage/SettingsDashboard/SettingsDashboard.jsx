import React from 'react';
import { Link } from 'react-router-dom';
import './settingsdashboard.scss';

const SettingsDashboard = () => {
    return (
        <div className='settings-dashboard-container'>
            <div className='content-header'>
                <span className='content-title'>Business settings</span>
                <span className='content-summary'>
                    Manage all your Fresha settings in one place.
                </span>
            </div>
            <div className='content-details'>
                <div className='left-side'>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Account setup</span>
                        </div>
                        <Link className='list-item' to='/setup/account-settings'>
                            <div className='item-detail'>
                                <span className='item-title'>Business details</span>
                                <span className='item-content'>Manage settings such as your business name and time zone</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/locations'>
                            <div className='item-detail'>
                                <span className='item-title'>Locations</span>
                                <span className='item-content'>Manage multiple outlets for your business</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/online-booking/settings'>
                            <div className='item-detail'>
                                <span className='item-title'>Online booking</span>
                                <span className='item-content'>Adjust your business info and profile images displayed online</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/resources'>
                            <div className='item-detail'>
                                <span className='item-title'>Resources</span>
                                <span className='item-content'>Set up bookable resources such as rooms and equipment and assign them to services</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/closed-dates'>
                            <div className='item-detail'>
                                <span className='item-title'>Business closed periods</span>
                                <span className='item-content'>Set the period when your business is closed</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Services</span>
                        </div>
                        <Link className='list-item' to='/catalogue/services'>
                            <div className='item-detail'>
                                <span className='item-title'>Services menu</span>
                                <span className='item-content'>Add, edit and delete the types of services available for appointment bookings</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/catalogue/vouchers'>
                            <div className='item-detail'>
                                <span className='item-title'>Vouchers</span>
                                <span className='item-content'>Add, edit and delete the types of vouchers available for sale</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/catalogue/memberships'>
                            <div className='item-detail'>
                                <span className='item-title'>Memberships</span>
                                <span className='item-content'>Add, edit and delete multi session memberships available for sale</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/services-settings'>
                            <div className='item-detail'>
                                <span className='item-title'>Vouchers and services settings</span>
                                <span className='item-content'>Choose your voucher expiry period and upsell your services and memberships</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Clients</span>
                        </div>
                        <Link className='list-item' to='/clients/automated-messages'>
                            <div className='item-detail'>
                                <span className='item-title'>Client notifications</span>
                                <span className='item-content'>Review messages sent to clients about their appointments</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/referral-sources'>
                            <div className='item-detail'>
                                <span className='item-title'>Referral sources</span>
                                <span className='item-content'>Set up custom sources to track how clients found your business</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/cancellation-reasons'>
                            <div className='item-detail'>
                                <span className='item-title'>Cancellation reasons</span>
                                <span className='item-content'>Track why clients did not arrive for their appointments</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Sales</span>
                        </div>
                        <Link className='list-item' to='/setup/invoice-sequencing'>
                            <div className='item-detail'>
                                <span className='item-title'>Receipt sequencing</span>
                                <span className='item-content'>Configure details displayed on sales receipts issued to your clients</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/invoices'>
                            <div className='item-detail'>
                                <span className='item-title'>Receipt template</span>
                                <span className='item-content'>Configure details displayed on sales receipts issued to your clients</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/taxes'>
                            <div className='item-detail'>
                                <span className='item-title'>Taxes</span>
                                <span className='item-content'>Manage tax rates that apply to items sold at checkout</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/service-charges'>
                            <div className='item-detail'>
                                <span className='item-title'>Service charges</span>
                                <span className='item-content'>Manage any extra charges that apply to services and items sold at checkout</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/tips-settings'>
                            <div className='item-detail'>
                                <span className='item-title'>Tips</span>
                                <span className='item-content'>Manage tipping settings for your business</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/payment-types'>
                            <div className='item-detail'>
                                <span className='item-title'>Payment types</span>
                                <span className='item-content'>Set up manual payment types for use during checkout</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                    </div>
                    <div className='list-group'>
                        <div className='list-title'>
                            <span className='title'>Team</span>
                        </div>
                        <Link className='list-item' to='/setup/employees'>
                            <div className='item-detail'>
                                <span className='item-title'>Team members</span>
                                <span className='item-content'>Add, edit and delete your team members</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/schedule'>
                            <div className='item-detail'>
                                <span className='item-title'>Working hours</span>
                                <span className='item-content'>Manage working hours of your team members</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/permissions'>
                            <div className='item-detail'>
                                <span className='item-title'>Permissions</span>
                                <span className='item-content'>Configure level of access to Fresha for each of your team members</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                        <div className='item-spliter'></div>
                        <Link className='list-item' to='/setup/commissions-settings'>
                            <div className='item-detail'>
                                <span className='item-title'>Commissions</span>
                                <span className='item-content'>Set up the calculation of commissions for team members</span>
                            </div>
                            <span className='direction-image'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z"></path></svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsDashboard;