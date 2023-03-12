import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import './details.scss';

const ItemDetailsModal = (props) => {

    const dispatch = useDispatch();
    const [saleDetails, setSaleDetails] = useState(true);
    const [vouchers, setVouchers] = useState(false);
    const [activity, setActivity] = useState(false);
    const [actionsListModal, setActionsListModal] = useState(false);

    const visibleSaleDetails = () => {
        setSaleDetails(true);
        setVouchers(false);
        setActivity(false);

        document.getElementById('tab-sale-details').classList.toggle('active');
        document.getElementById('tab-vouchers').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
    }

    const visibleVouchers = () => {
        setVouchers(true);
        setSaleDetails(false);
        setActivity(false);

        document.getElementById('tab-vouchers').classList.toggle('active');
        document.getElementById('tab-sale-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
    }

    const visibleActivity = () => {
        setActivity(true);
        setSaleDetails(false);
        setVouchers(false);

        document.getElementById('tab-activity').classList.toggle('active');
        document.getElementById('tab-vouchers').classList.remove('active');
        document.getElementById('tab-sale-details').classList.remove('active');
    }

    const visibleActionsList = () => {
        actionsListModal ? setActionsListModal(false) : setActionsListModal(true);
    }

    useEffect(() => {
        document.getElementById('tab-sale-details').classList.toggle('active');
    }, []);

    return (
        <div className='item-details-container'>
            <div className='actions-container'>
                <div className='tool-group'>
                    <span className='close-tool' onClick={() => dispatch({ type: 'HIDE_DETAIL', payload: false })}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </span>
                </div>
                <div className='logo-group'>
                    <span className='logo-image'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 80 80"><path id='circle-section' d="M56.2 5c-5.7-3.3-12.1-5-18.7-5C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75 75 58.2 75 37.5c0-6.6-1.7-13.1-5.1-18.8"></path><path id='check-section' d="M18.5 38.5L31 51c.4.4 1 .4 1.4 0 0 0 0-.1.1-.1L63.8 12"></path></svg>
                    </span>
                    <span className='logo-content'>Completed</span>
                </div>
                <div className='actions-group'>
                    <button className='action-new-book'>Book new appointment</button>
                    <button className='action-view-list' onClick={visibleActionsList}>Actions</button>
                    {
                        actionsListModal ?
                            <div className='actions-list'>
                                <div className='action-item'>
                                    <span className='item-content'>Email</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.426 2.803 1.869 6.909a.625.625 0 0 0-.098 1.166l6.688 3.168c.13.062.236.167.298.297l3.168 6.689a.626.626 0 0 0 1.166-.098l4.106-14.557a.626.626 0 0 0-.771-.771ZM8.661 11.339l3.536-3.536" stroke="#101928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Print</span>
                                    <span className='item-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" fill="none"><path fill='#000' d="M21.979 4.39h-2.067V1.674A.674.674 0 0 0 19.238 1H5.762a.674.674 0 0 0-.674.674V4.39H3.02A2.024 2.024 0 0 0 1 6.41v6.738c0 1.115.907 2.022 2.021 2.022h2.067v6.064c0 .372.302.674.674.674h9.433a.678.678 0 0 0 .477-.198l4.043-4.043a.68.68 0 0 0 .197-.476v-2.021h2.067A2.024 2.024 0 0 0 24 13.149V6.411a2.024 2.024 0 0 0-2.021-2.021ZM6.436 2.348h12.128V4.39H6.436V2.348Zm0 8.78h12.128v5.39h-3.369a.674.674 0 0 0-.674.674v3.37H6.436v-9.434Zm9.433 8.48v-1.742h1.742l-1.742 1.742Zm6.783-6.459a.675.675 0 0 1-.674.674h-2.066v-2.695h.674a.674.674 0 1 0 0-1.348H4.414a.674.674 0 0 0 0 1.348h.674v2.695H3.02a.675.675 0 0 1-.673-.674V6.411c0-.371.302-.674.673-.674h18.957c.372 0 .674.303.674.674v6.738Z"></path><path d="M19.238 8.432a.674.674 0 1 0 0-1.348.674.674 0 0 0 0 1.348Z"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Email voucher</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.991 9.012c.2-.28.59-.346.872-.146l5.973 4.259h2.328l5.973-4.259a.625.625 0 0 1 .726 1.018l-6.136 4.375a.625.625 0 0 1-.363.116H8.636a.624.624 0 0 1-.362-.116L2.137 9.884a.625.625 0 0 1-.146-.872Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.375 10.827V2.5h-1.602a2.73 2.73 0 0 1-.984 1.507A2.918 2.918 0 0 1 10 4.615c-.648 0-1.28-.213-1.79-.608A2.73 2.73 0 0 1 7.228 2.5H5.625v8.304L4.375 10V2.404c0-.316.132-.613.357-.827.223-.213.52-.327.824-.327h1.722c.265 0 .524.087.735.25.212.165.363.4.42.667l-.61.131.61-.13c.071.329.26.631.545.852.285.221.646.345 1.022.345s.737-.124 1.022-.345c.284-.22.474-.523.545-.853a1.15 1.15 0 0 1 .42-.666c.21-.164.47-.251.735-.251h1.722c.304 0 .6.114.824.327.225.214.357.51.357.827v7.54l-1.25.883Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="m4.375 7.374-2.222 1.48a.625.625 0 0 0-.278.52V17.5a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V9.375a.625.625 0 0 0-.278-.52l-2.222-1.481v1.502l1.25.833v7.79H3.125V9.71l1.25-.833V7.374Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="m2.46 17.297 5.937-4.063.706 1.032-5.938 4.062-.706-1.031ZM17.54 17.297l-5.937-4.063-.706 1.032 5.938 4.062.706-1.031Z" fill="#101928"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Print voucher</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 4.375c-.69 0-1.25.56-1.25 1.25V17.5A1.25 1.25 0 0 0 5 18.75h1.938a1.25 1.25 0 0 0 1.224-1 1.875 1.875 0 0 1 3.676 0 1.25 1.25 0 0 0 1.224 1H15a1.25 1.25 0 0 0 1.25-1.25V5.625c0-.69-.56-1.25-1.25-1.25H5Zm10 1.25H5V17.5h1.938a3.125 3.125 0 0 1 6.124 0H15V5.625Z" fill="#101928"></path><path d="M1.25 6.875v-3.75h17.5v3.75h-3.125v1.25h3.438c.517 0 .937-.42.937-.938V2.813a.937.937 0 0 0-.938-.937H.938A.937.937 0 0 0 0 2.813v4.374c0 .518.42.938.938.938h3.437v-1.25H1.25Z" fill="#101928"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Refund items</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2713 12.0133L9.3896 13.3896L8.01326 20.2713C7.99122 20.3815 7.99672 20.4954 8.02929 20.603C8.06185 20.7105 8.12047 20.8084 8.19993 20.8878L17.1122 29.8001C17.1756 29.8635 17.2508 29.9137 17.3336 29.948C17.4164 29.9823 17.5052 30 17.5948 30C17.6845 30 17.7732 29.9823 17.8561 29.948C17.9389 29.9137 18.0141 29.8635 18.0775 29.8001L25.8001 22.0775C25.8635 22.0141 25.9137 21.9389 25.948 21.8561C25.9823 21.7732 26 21.6845 26 21.5948C26 21.5052 25.9823 21.4164 25.948 21.3336C25.9137 21.2508 25.8635 21.1756 25.8001 21.1122L16.8878 12.1999C16.8084 12.1205 16.7105 12.0619 16.603 12.0293C16.4954 11.9967 16.3815 11.9912 16.2713 12.0133V12.0133Z" stroke="#101928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path><path d="M14.5561 19.9061C15.3016 19.9061 15.9061 19.3016 15.9061 18.5561C15.9061 17.8105 15.3016 17.2061 14.5561 17.2061C13.8105 17.2061 13.2061 17.8105 13.2061 18.5561C13.2061 19.3016 13.8105 19.9061 14.5561 19.9061Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.58573 2.13917C4.13264 2.21604 4.51369 2.7217 4.43682 3.26861L3.74096 8.21996L8.6923 8.91582C9.23921 8.99268 9.62026 9.49835 9.54339 10.0453C9.46653 10.5922 8.96086 10.9732 8.41395 10.8964L2.47234 10.0613C1.92543 9.98445 1.54438 9.47879 1.62125 8.93188L2.45629 2.99027C2.53315 2.44336 3.03882 2.06231 3.58573 2.13917Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.4255 1.77119C16.9925 1.62542 19.5451 2.24414 21.7605 3.5491C23.9759 4.85406 25.7545 6.78665 26.8715 9.10249C27.9886 11.4183 28.3938 14.0134 28.036 16.5595C27.9591 17.1064 27.4534 17.4875 26.9065 17.4106C26.3596 17.3338 25.9786 16.8281 26.0554 16.2812C26.3582 14.1268 26.0153 11.9309 25.0701 9.97138C24.125 8.01183 22.6199 6.37656 20.7454 5.27236C18.8708 4.16816 16.7109 3.64463 14.5388 3.76797C12.3668 3.89131 10.28 4.65598 8.5425 5.96529L4.02474 9.36967C3.58366 9.70204 2.95666 9.61392 2.62429 9.17285C2.29191 8.73177 2.38003 8.10477 2.82111 7.7724L7.33887 4.36802C9.39229 2.82066 11.8584 1.91695 14.4255 1.77119Z" fill="#101928"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Refund amount</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill='#404040' d="M18.216 8.606 16.946.92l-2.622 2.644a8.905 8.905 0 0 0-5.305-1.75C4.046 1.814 0 5.894 0 10.907c0 5.014 4.046 9.094 9.02 9.094 3.586 0 6.831-2.141 8.268-5.456a.83.83 0 0 0-.423-1.088.82.82 0 0 0-1.08.426 7.381 7.381 0 0 1-6.766 4.465c-4.068 0-7.38-3.339-7.38-7.44 0-4.103 3.312-7.441 7.38-7.441 1.494 0 2.921.45 4.132 1.279l-2.558 2.58 7.623 1.28Z"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Download PDF</span>
                                    <span className='item-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#101928" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75V4.5a.75.75 0 0 1 .75-.75h9L19.5 9v3.75"></path><path stroke="#101928" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 3.75V9h5.25M4.5 18.75H6a1.5 1.5 0 1 0 0-3H4.5v4.5M11.625 20.25a2.25 2.25 0 0 0 0-4.5H10.5v4.5h1.125ZM19.5 15.75h-2.625v4.5M19.125 18.375h-2.25"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item action-void'>
                                    <span className='item-content'>Void</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 22 22" fill='#da2346' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" fill='#da2346' d="M1.5 10.75c0-5.10863 4.14137-9.25 9.25-9.25 5.1086 0 9.25 4.14137 9.25 9.25 0 5.1086-4.1414 9.25-9.25 9.25-5.10863 0-9.25-4.1414-9.25-9.25zM10.75 0C4.81294 0 0 4.81294 0 10.75 0 16.6871 4.81294 21.5 10.75 21.5c5.9371 0 10.75-4.8129 10.75-10.75C21.5 4.81294 16.6871 0 10.75 0zm4.0607 7.74999l-3 3.00001 3 3-1.0607 1.0607-3-3-3.00001 3L6.68933 13.75l3-3-3-3.00001 1.06066-1.06066 3.00001 3 3-3 1.0607 1.06066z"></path></svg>
                                    </span>
                                </div>
                            </div> : <></>
                    }
                </div>
                <div className='tabs-group'>
                    <div className='tab-item' id='tab-sale-details' onClick={visibleSaleDetails}>
                        <span>Sale details</span>
                    </div>
                    <div className='tab-item' id='tab-vouchers' onClick={visibleVouchers}>
                        <span>Vouchers</span>
                    </div>
                    <div className='tab-item' id='tab-activity' onClick={visibleActivity}>
                        <span>Activity</span>
                    </div>
                </div>
            </div>
            <div className='details-container'>
                {
                    saleDetails ?
                        <div className='sale-details-group'>
                            <div className='group-title'>
                                <span className='title'>Sale details</span>
                            </div>
                            <div className='group-detail'>
                                <div className='group-header'>
                                    <span className='header-title'>Sale #2</span>
                                    <span className='header-date'>Wednesday, 22 Feb 2023</span>
                                    <span className='header-content'>Billed to Walk-In</span>
                                    <div className='header-status'>
                                        <span className='badge success'>COMPLETED</span>
                                    </div>
                                </div>
                                <div className='group-content'>
                                    <div className='content-item content-column'>
                                        <span>Item</span>
                                        <span>Amount</span>
                                    </div>
                                    <div className='content-item content-detail'>
                                        <div className='detail-summary'>
                                            <span>р. 123 - Gift Voucher</span>
                                            <span>Code: VRSYLSGA, expires on 22 May</span>
                                            <span>2023, Mykhailo Savchuk</span>
                                        </div>
                                        <div className='detail-amount'>
                                            <span>1</span> x <span>RUB 123</span>
                                        </div>
                                    </div>
                                    <div className='content-item content-subtotal'>
                                        <span>Subtotal</span>
                                        <span>RUB 123</span>
                                    </div>
                                    <div className='content-item content-total'>
                                        <span>Total</span>
                                        <span>RUB 123</span>
                                    </div>
                                    <div className='content-item content-info'>
                                        <span>Cash payment on Wednesday, 22 Feb 2023 at 00:10</span>
                                        <span>RUB 150</span>
                                    </div>
                                </div>
                                <div className='group-footer'>
                                    <div className='content-item content-change'>
                                        <span>Change</span>
                                        <span>RUB 27</span>
                                    </div>
                                    <div className='content-item content-balance'>
                                        <span>Balance</span>
                                        <span>RUB 0</span>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    vouchers ?
                        <div className='vouchers-group'>
                            <div className='group-title'>
                                <span className='title'>Vouchers</span>
                            </div>
                            <div className='voucher-ticket'>
                                <div className='header'>
                                    <div className='voucher-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81"><g fill="none" fillRule="evenodd"><path d="M0 0h81v81H0z"></path><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M37.0488 56.2195v-9.3658h6.2439v9.3658"></path><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M27.683 42.9512v13.2683h24.9755V42.9512M57.3415 34.3659c-.0631 2.6473-2.2588 4.743-4.9062 4.6829a4.9647 4.9647 0 01-4.0882-2.0964 5.0341 5.0341 0 01-8.1764 0 5.0341 5.0341 0 01-8.1764 0 4.9647 4.9647 0 01-4.0882 2.0964c-2.6473.0602-4.843-2.0356-4.9061-4.683L29.2439 25h21.8537l6.2439 9.3659z"></path></g></svg>
                                    </div>
                                    <span className='voucher-title'>Ninja</span>
                                    <span className='voucher-content'>Murmansk Oblast, Magazin "Rondo", Ulitsa Zinov'yeva 2, Apatity, Murmanskaya Oblast'</span>
                                </div>
                                <div className='body'>
                                    <div className='left-square'></div>
                                    <span className='body-title'>Voucher value</span>
                                    <span className='body-content'>RUB 123</span>
                                    <div className='right-square'></div>
                                </div>
                                <div className='footer'>
                                    <span className='voucher-code'>Voucher code: VRSYLSGA</span>
                                    <span>Redeem on all services</span>
                                    <span>Valid until 22 May 2023</span>
                                    <span>For multiple-use until redeemed</span>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    activity ?
                        <div className='activity-group'>
                            <div className='group-title'>
                                <span className='title'>Activity</span>
                                <span className='sub-title'>Activity for this sale in the last 90 days</span>
                            </div>
                            <div className='activity-list'>
                                <div className='activity-item'>
                                    <div className='item-avatar'>
                                        <div className='main-avatar'>
                                            <span><svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-26a2 2 0 0 1-2-2V9Zm28 0h-26v14h26V9Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM21.747 7.342a1 1 0 0 1 1.412-.095l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.411Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.253 16.341a1 1 0 0 1-.095 1.412l-8 7a1 1 0 1 1-1.317-1.506l8-7a1 1 0 0 1 1.412.095ZM11.253 7.342a1 1 0 0 1-.095 1.41l-8 7a1 1 0 1 1-1.316-1.505l8-7a1 1 0 0 1 1.41.095Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.747 16.341a1 1 0 0 1 1.412-.094l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.412Z" fill="#00A36D"></path></svg></span>
                                        </div>
                                        <div className='item-status'>
                                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L6.41421 16L14.7071 24.2929C15.0976 24.6834 15.0976 25.3166 14.7071 25.7071C14.3166 26.0976 13.6834 26.0976 13.2929 25.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z" fill="#fff"></path></svg></span>
                                        </div>
                                    </div>
                                    <div className='item-details'>
                                        <span className='detail-title'>RUB 123 paid by cash</span>
                                        <span className='detail-date'>Thursday, 9 Mar 2023 at 19:28 by</span>
                                        <span className='detail-user'>Mykhailo Savchuk</span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-avatar'>
                                        <div className='main-avatar'>
                                            <span><svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-26a2 2 0 0 1-2-2V9Zm28 0h-26v14h26V9Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM21.747 7.342a1 1 0 0 1 1.412-.095l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.411Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.253 16.341a1 1 0 0 1-.095 1.412l-8 7a1 1 0 1 1-1.317-1.506l8-7a1 1 0 0 1 1.412.095ZM11.253 7.342a1 1 0 0 1-.095 1.41l-8 7a1 1 0 1 1-1.316-1.505l8-7a1 1 0 0 1 1.41.095Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.747 16.341a1 1 0 0 1 1.412-.094l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.412Z" fill="#00A36D"></path></svg></span>
                                        </div>
                                        <div className='item-status'>
                                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L6.41421 16L14.7071 24.2929C15.0976 24.6834 15.0976 25.3166 14.7071 25.7071C14.3166 26.0976 13.6834 26.0976 13.2929 25.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z" fill="#fff"></path></svg></span>
                                        </div>
                                    </div>
                                    <div className='item-details'>
                                        <span className='detail-title'>RUB 123 paid by cash</span>
                                        <span className='detail-date'>Thursday, 9 Mar 2023 at 19:28 by</span>
                                        <span className='detail-user'>Mykhailo Savchuk</span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-avatar'>
                                        <div className='main-avatar'>
                                            <span><svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-26a2 2 0 0 1-2-2V9Zm28 0h-26v14h26V9Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM21.747 7.342a1 1 0 0 1 1.412-.095l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.411Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.253 16.341a1 1 0 0 1-.095 1.412l-8 7a1 1 0 1 1-1.317-1.506l8-7a1 1 0 0 1 1.412.095ZM11.253 7.342a1 1 0 0 1-.095 1.41l-8 7a1 1 0 1 1-1.316-1.505l8-7a1 1 0 0 1 1.41.095Z" fill="#00A36D"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.747 16.341a1 1 0 0 1 1.412-.094l8 7a1 1 0 1 1-1.317 1.506l-8-7a1 1 0 0 1-.095-1.412Z" fill="#00A36D"></path></svg></span>
                                        </div>
                                        <div className='item-status'>
                                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L6.41421 16L14.7071 24.2929C15.0976 24.6834 15.0976 25.3166 14.7071 25.7071C14.3166 26.0976 13.6834 26.0976 13.2929 25.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z" fill="#fff"></path></svg></span>
                                        </div>
                                    </div>
                                    <div className='item-details'>
                                        <span className='detail-title'>RUB 123 paid by cash</span>
                                        <span className='detail-date'>Thursday, 9 Mar 2023 at 19:28 by</span>
                                        <span className='detail-user'>Mykhailo Savchuk</span>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
            </div>
        </div>
    )
}

export default connect((state) => {
    return {
        detailModal: state.detailModalState
    }
})(ItemDetailsModal);