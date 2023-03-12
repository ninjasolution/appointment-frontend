import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './info.scss';

const ItemInfoModal = (props) => {

    const dispatch = useDispatch();
    const [activity, setActivity] = useState(true);
    const [clientDetails, setClientDetails] = useState(false);
    const [appointments, setAppointments] = useState(false);
    const [deposits, setDeposits] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState(false);
    const [memberships, setMemberships] = useState(false);
    const [forms, setForms] = useState(false);
    const [products, setProducts] = useState(false);
    const [sales, setSales] = useState(false);
    const [reviews, setReviews] = useState(false);
    const [files, setFiles] = useState(false);

    const [actionsListModal, setActionsListModal] = useState(false);

    const visibleActivity = () => {
        setActivity(true);
        setClientDetails(false);
        setAppointments(false);
        setDeposits(false);
        setPaymentMethods(false);
        setMemberships(false);
        setForms(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-activity').classList.toggle('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleClientDetails = () => {
        setClientDetails(true);
        setAppointments(false);
        setActivity(false);
        setDeposits(false);
        setPaymentMethods(false);
        setMemberships(false);
        setForms(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-client-details').classList.toggle('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleAppointments = () => {
        setAppointments(true);
        setClientDetails(false);
        setActivity(false);
        setDeposits(false);
        setPaymentMethods(false);
        setMemberships(false);
        setForms(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-appointments').classList.toggle('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleDeposits = () => {
        setDeposits(true);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setPaymentMethods(false);
        setMemberships(false);
        setForms(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-deposits').classList.toggle('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visiblePaymentMethods = () => {
        setPaymentMethods(true);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setMemberships(false);
        setForms(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-payment-methods').classList.toggle('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleMemberships = () => {
        setMemberships(true);
        setPaymentMethods(false);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setForms(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-memberships').classList.toggle('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleForms = () => {
        setForms(true);
        setMemberships(false);
        setPaymentMethods(false);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setProducts(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-forms').classList.toggle('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleProducts = () => {
        setProducts(true);
        setForms(false);
        setMemberships(false);
        setPaymentMethods(false);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setSales(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-products').classList.toggle('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleSales = () => {
        setSales(true);
        setForms(false);
        setMemberships(false);
        setPaymentMethods(false);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setProducts(false);
        setReviews(false);
        setFiles(false);

        document.getElementById('tab-sales').classList.toggle('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleReviews = () => {
        setReviews(true);
        setForms(false);
        setMemberships(false);
        setPaymentMethods(false);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setProducts(false);
        setSales(false);
        setFiles(false);

        document.getElementById('tab-reviews').classList.toggle('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-files').classList.remove('active');
    }

    const visibleFiles = () => {
        setFiles(true);
        setForms(false);
        setMemberships(false);
        setPaymentMethods(false);
        setDeposits(false);
        setAppointments(false);
        setClientDetails(false);
        setActivity(false);
        setProducts(false);
        setSales(false);
        setReviews(false);

        document.getElementById('tab-files').classList.toggle('active');
        document.getElementById('tab-forms').classList.remove('active');
        document.getElementById('tab-memberships').classList.remove('active');
        document.getElementById('tab-payment-methods').classList.remove('active');
        document.getElementById('tab-appointments').classList.remove('active');
        document.getElementById('tab-client-details').classList.remove('active');
        document.getElementById('tab-activity').classList.remove('active');
        document.getElementById('tab-deposits').classList.remove('active');
        document.getElementById('tab-products').classList.remove('active');
        document.getElementById('tab-sales').classList.remove('active');
        document.getElementById('tab-reviews').classList.remove('active');
    }

    const visibleActionsList = () => {
        actionsListModal ? setActionsListModal(false) : setActionsListModal(true);
    }

    useEffect(() => {
        document.getElementById('tab-activity').classList.toggle('active');
    }, []);

    return (
        <div className='item-infos-container'>
            <div className='state-container'>
                <div className='tool-group'>
                    <span className='close-tool' onClick={() => dispatch({ type: 'HIDE_INFO', payload: false })}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </span>
                </div>
                <div className='state-group'>
                    <div className='total-state'>
                        <span className='count'>30</span>
                        <span className='title'>Total sales</span>
                        <span className='type'>(RUB)</span>
                    </div>
                    <div className='state-list'>
                        <div className='state-item'>
                            <span className='count'>1</span>
                            <span className='title'>Total visits</span>
                        </div>
                        <div className='state-item'>
                            <span className='count'>0</span>
                            <span className='title'>Completed</span>
                        </div>
                        <div className='state-item'>
                            <span className='count'>0</span>
                            <span className='title'>Cancelled</span>
                        </div>
                        <div className='state-item'>
                            <span className='count'>0</span>
                            <span className='title'>No-show</span>
                        </div>
                    </div>
                    <div className='reviews-state'>
                        <div className='logo-container'>
                            <div className='logo'></div>
                            <span className='count'>-</span>
                        </div>
                        <span className='title'>Reviews (0)</span>
                    </div>
                </div>
            </div>
            <div className='actions-container'>
                <div className='user-group'>
                    <div className='user-avatar'>
                        <span>J</span>
                    </div>
                    <div className='user-details'>
                        <span className='user-name'>Jack Doe</span>
                        <span className='user-email'>jack@example.com</span>
                        <div className='user-membership'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.333 4.667A4.68 4.68 0 0114 9.333 4.68 4.68 0 019.333 14a4.68 4.68 0 01-4.666-4.667 4.68 4.68 0 014.666-4.666zm.187 2.8H8.4v2.8h2.8v-1.12H9.52v-1.68zM11.2 0c1.03 0 1.867.836 1.867 1.867l-.001 3.266h-.933v-.934L.933 4.2v4.2c0 .479.36.873.825.927l.109.006h1.399v.933h-1.4A1.867 1.867 0 010 8.4V1.867C0 .836.836 0 1.867 0H11.2zm0 .933H1.867a.933.933 0 00-.927.825l-.007.109v1.4l11.2-.001v-1.4A.933.933 0 0011.31.94L11.2.933z" fill="#037aff" fillRule="evenodd"></path></svg></span>
                            <span>5 / 5</span>
                            <span>TYRI</span>
                        </div>
                    </div>
                </div>
                <div className='actions-group'>
                    <button className='action-view-list' onClick={visibleActionsList}>Actions</button>
                    {
                        actionsListModal ?
                            <div className='actions-list'>
                                <div className='action-item'>
                                    <span className='item-content'>Book</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.75 1a.75.75 0 00-1.5 0v1.25H3A2.75 2.75 0 00.25 5v15A2.75 2.75 0 003 22.75h18A2.75 2.75 0 0023.75 20V5A2.75 2.75 0 0021 2.25h-2.25V1a.75.75 0 00-1.5 0v1.25H6.75V1zm15.5 6.25V5c0-.69-.56-1.25-1.25-1.25h-2.25V4a.75.75 0 01-1.5 0v-.25H6.75V4a.75.75 0 01-1.5 0v-.25H3c-.69 0-1.25.56-1.25 1.25v2.25h20.5zm-20.5 1.5h20.5V20c0 .69-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25V8.75zm11 3.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" fill="#101928"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Sell</span>
                                    <span className='item-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#101928" fillRule="evenodd" d="M10.275 2.188a2.77 2.77 0 00-2.76 2.76v1.006h5.52V4.95a2.77 2.77 0 00-2.76-2.76zm-4.26 7.148V7.454H3.917L2.35 19.994h11.678a5.14 5.14 0 013.294-7.296l-.685-5.244h-2.101v1.882a.75.75 0 01-1.5 0V7.454h-5.52v1.882a.75.75 0 01-1.5 0zm12.798 3.204l-.773-5.933a.75.75 0 00-.744-.653h-2.76V4.95a4.27 4.27 0 00-4.26-4.26 4.27 4.27 0 00-4.26 4.26v1.005h-2.76a.75.75 0 00-.745.657L.756 20.651a.75.75 0 00.744.844h13.678a5.138 5.138 0 103.635-8.955zm-2.604 7.865a3.638 3.638 0 10-.328-.328.754.754 0 01.328.328zm2.403-5.237a.75.75 0 01.75.75v1.005h1.005a.75.75 0 010 1.5h-1.005v1.006a.75.75 0 11-1.5 0v-1.006h-1.005a.75.75 0 110-1.5h1.005V15.92a.75.75 0 01.75-.75z" clipRule="evenodd"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Send email message</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 7 16 18 4 7" fill="none" stroke="#101928" strokeWidth="2" strokeLinecap="round" strokLinejoin="round"></path><path fill="none" d="M4 7h24v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7ZM13.818 16l-9.51 8.717M27.692 24.718 18.182 16" stroke="#101928" strokeWidth="2" strokeLinecap="round" strokLinejoin="round"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Edit profile</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.5 1.707A1 1 0 0 0 9.793 2L8.147 3.646l-.001.001L2.293 9.5a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h3a.5.5 0 0 0 .354-.146L14 6.207a1 1 0 0 0 0-1.414L11.207 2a1 1 0 0 0-.707-.293ZM12 6.793 13.293 5.5 10.5 2.707 9.207 4 12 6.793ZM8.5 4.707 11.293 7.5l-5.5 5.5H3v-2.793l5.5-5.5Z" fill="#101928"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Merge profiles</span>
                                    <span className='item-logo'>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.97 12.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 0-1.06Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.75 16.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM8.03 3.97a.75.75 0 0 1 0 1.06L5.56 7.5l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.75 7.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" fill="#101928"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item'>
                                    <span className='item-content'>Block client</span>
                                    <span className='item-logo'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.28 1.048c-1.267.199-2.35.75-3.21 1.632a5.418 5.418 0 0 0-1.456 2.759c-.096.47-.107.733-.107 2.555v2.03l-2.52.014-2.52.015-.306.144c-.347.162-.78.568-.936.876-.232.456-.232.446-.215 8.1l.017 7.307.149.32c.196.42.607.833 1.018 1.023l.326.15h20.96l.326-.15c.411-.19.822-.603 1.018-1.023l.149-.32.017-7.307c.017-7.654.017-7.644-.215-8.1-.156-.308-.589-.714-.936-.876l-.306-.144-2.506-.026L21.52 10l-.028-2.16c-.031-2.406-.044-2.513-.425-3.445-.643-1.576-2.081-2.811-3.757-3.228-.423-.106-1.658-.178-2.03-.119m1.653 2.082c.866.214 1.8.992 2.202 1.832.337.704.353.845.356 3.065L19.493 10l-3.48.014-3.48.013-.005-1.773c-.007-2.596-.01-2.568.337-3.292.383-.802 1.31-1.595 2.122-1.818a4.064 4.064 0 0 1 1.946-.014m9.04 15.883v7.014H6.027V12h19.946v7.013m-10.329-1.472a1.5 1.5 0 0 0-1.124 1.575c.1 1.255 1.603 1.823 2.511.948.281-.271.418-.561.449-.948a1.437 1.437 0 0 0-.775-1.425c-.29-.157-.768-.225-1.061-.15" fillRule="evenodd" fill="#000"></path></svg>
                                    </span>
                                </div>
                                <div className='action-item action-void'>
                                    <span className='item-content'>Delete client</span>
                                    <span className='item-logo'>
                                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.5A1.5 1.5 0 0 0 5 3v.5H2.5a.5.5 0 1 0 0 1H3v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9h.5a.5.5 0 0 0 0-1H11V3a1.5 1.5 0 0 0-1.5-1.5h-3Zm3.5 2V3a.5.5 0 0 0-.5-.5h-3A.5.5 0 0 0 6 3v.5h4Zm-6 10v-9h8v9H4Zm2.5-7A.5.5 0 0 1 7 7v4a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5ZM10 11V7a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0Z" fill="#da2346"></path></svg>
                                    </span>
                                </div>
                            </div> : <></>
                    }
                </div>
                <div className='tabs-group'>
                    <div className='tab-item' id='tab-activity' onClick={visibleActivity}>
                        <span>Activity</span>
                    </div>
                    <div className='tab-item' id='tab-client-details' onClick={visibleClientDetails}>
                        <span>Client details</span>
                    </div>
                    <div className='tab-item' id='tab-appointments' onClick={visibleAppointments}>
                        <span>Appointments</span>
                    </div>
                    <div className='tab-item' id='tab-deposits' onClick={visibleDeposits}>
                        <span>Deposits</span>
                    </div>
                    <div className='tab-item' id='tab-payment-methods' onClick={visiblePaymentMethods}>
                        <span>Payment methods</span>
                    </div>
                    <div className='tab-item' id='tab-memberships' onClick={visibleMemberships}>
                        <span>Memberships</span>
                    </div>
                    <div className='tab-item' id='tab-forms' onClick={visibleForms}>
                        <span>Forms</span>
                    </div>
                    <div className='tab-item' id='tab-products' onClick={visibleProducts}>
                        <span>Products</span>
                    </div>
                    <div className='tab-item' id='tab-sales' onClick={visibleSales}>
                        <span>Sales</span>
                    </div>
                    <div className='tab-item' id='tab-reviews' onClick={visibleReviews}>
                        <span>Reviews</span>
                    </div>
                    <div className='tab-item' id='tab-files' onClick={visibleFiles}>
                        <span>Files</span>
                    </div>
                </div>
            </div>
            <div className='details-container'>
                {
                    activity ?
                        <div className='activity-group'>
                            <div className='group-title'>
                                <span className='title'>Activity</span>
                            </div>
                            <div className='add-note'>
                                <div className='input-container'>
                                    <input type="text" placeholder='Add a note...' />
                                    <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1.956 14.237a.668.668 0 01-.205-.671l1.126-4.28a.67.67 0 01.484-.478l5.256-1.142-5.359-.458a.668.668 0 01-.54-.411l-1.67-4.1a.667.667 0 01.857-.873L14.502 6.68a.666.666 0 01.079 1.208L2.713 14.321a.666.666 0 01-.73-.062l-.027-.022z"></path></svg></span>
                                </div>
                            </div>
                            <div className='activity-list'>
                                <div className='activity-item'>
                                    <div className='item-information'>
                                        <div className='item-avatar'>
                                            <div className='main-avatar'>
                                                <span>M</span>
                                            </div>
                                            <div className='item-status'>
                                                <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm1 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM4 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4Z"></path></svg></span>
                                            </div>
                                        </div>
                                        <div className='item-details'>
                                            <span className='detail-title'>Note added</span>
                                            <span className='detail-data'>Thursday, 9 Mar 2023 at 19:28 by Mykhailo Savchuk</span>
                                        </div>
                                    </div>
                                    <div className='item-contents'>
                                        <span>'reviews' is assigned a value but never used </span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-information'>
                                        <div className='item-avatar'>
                                            <div className='main-avatar'>
                                                <span>M</span>
                                            </div>
                                            <div className='item-status'>
                                                <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm1 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM4 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4Z"></path></svg></span>
                                            </div>
                                        </div>
                                        <div className='item-details'>
                                            <span className='detail-title'>Note added</span>
                                            <span className='detail-data'>Thursday, 9 Mar 2023 at 19:28 by Mykhailo Savchuk</span>
                                        </div>
                                    </div>
                                    <div className='item-contents'>
                                        <span>'reviews' is assigned a value but never used </span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-information'>
                                        <div className='item-avatar'>
                                            <div className='main-avatar'>
                                                <span>M</span>
                                            </div>
                                            <div className='item-status'>
                                                <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm1 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM4 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4Z"></path></svg></span>
                                            </div>
                                        </div>
                                        <div className='item-details'>
                                            <span className='detail-title'>Note added</span>
                                            <span className='detail-data'>Thursday, 9 Mar 2023 at 19:28 by Mykhailo Savchuk</span>
                                        </div>
                                    </div>
                                    <div className='item-contents'>
                                        <span>'reviews' is assigned a value but never used </span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-information'>
                                        <div className='item-avatar'>
                                            <div className='main-avatar'>
                                                <span>M</span>
                                            </div>
                                            <div className='item-status'>
                                                <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm1 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM4 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4Z"></path></svg></span>
                                            </div>
                                        </div>
                                        <div className='item-details'>
                                            <span className='detail-title'>Note added</span>
                                            <span className='detail-data'>Thursday, 9 Mar 2023 at 19:28 by Mykhailo Savchuk</span>
                                        </div>
                                    </div>
                                    <div className='item-contents'>
                                        <span>'reviews' is assigned a value but never used </span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-information'>
                                        <div className='item-avatar'>
                                            <div className='main-avatar'>
                                                <span>M</span>
                                            </div>
                                            <div className='item-status'>
                                                <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm1 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM4 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4Z"></path></svg></span>
                                            </div>
                                        </div>
                                        <div className='item-details'>
                                            <span className='detail-title'>Note added</span>
                                            <span className='detail-data'>Thursday, 9 Mar 2023 at 19:28 by Mykhailo Savchuk</span>
                                        </div>
                                    </div>
                                    <div className='item-contents'>
                                        <span>'reviews' is assigned a value but never used </span>
                                    </div>
                                </div>
                                <div className='activity-item'>
                                    <div className='item-information'>
                                        <div className='item-avatar'>
                                            <div className='main-avatar'>
                                                <span>M</span>
                                            </div>
                                            <div className='item-status'>
                                                <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm1 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM4 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4Z"></path></svg></span>
                                            </div>
                                        </div>
                                        <div className='item-details'>
                                            <span className='detail-title'>Note added</span>
                                            <span className='detail-data'>Thursday, 9 Mar 2023 at 19:28 by Mykhailo Savchuk</span>
                                        </div>
                                    </div>
                                    <div className='item-contents'>
                                        <span>'reviews' is assigned a value but never used </span>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    clientDetails ?
                        <div className='client-details-group'>
                            <div className='group-title'>
                                <span className='title'>Client details</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Basic info</span>
                                    <Link>Edit</Link>
                                </div>
                                <div className='item-list'>
                                    <span className='title'>Birthday</span>
                                    <Link className='content'>+ Add</Link>
                                </div>
                                <div className='item-list'>
                                    <span className='title'>Gender</span>
                                    <span className='content'>Male</span>
                                </div>
                                <div className='item-list'>
                                    <span className='title'>Joined</span>
                                    <span className='content'>January 18, 2023</span>
                                </div>
                                <div className='item-list'>
                                    <span className='title'>Client source</span>
                                    <Link className='content'>+ Add</Link>
                                </div>
                                <div className='item-list'>
                                    <Link className='content'>jack@example.com</Link>
                                </div>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Address</span>
                                    <Link>Edit</Link>
                                </div>
                                <div className='item-list'>
                                    <div className='item-container'>
                                        <span className='logo'><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg></span>
                                        <span className='title'>Add address</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Notifications</span>
                                    <Link>Edit</Link>
                                </div>
                                <div className='content-list'>
                                    <div className='content-item'>
                                        <span className='title'>Client notifications</span>
                                        <span className='sub-title'>Client doesn’t accept notifications</span>
                                    </div>
                                    <div className='spliter-content'></div>
                                    <div className='content-item'>
                                        <span className='title'>Marketing notifications</span>
                                        <span className='sub-title'>Client accepts marketing notifications</span>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    appointments ?
                        <div className='appointments-group'>
                            <div className='group-title'>
                                <span className='title'>Appointments</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    deposits ?
                        <div className='deposits-group'>
                            <div className='group-title'>
                                <span className='title'>Deposits</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    paymentMethods ?
                        <div className='payment-methods-group'>
                            <div className='group-title'>
                                <span className='title'>Payment methods</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    memberships ?
                        <div className='memberships-group'>
                            <div className='group-title'>
                                <span className='title'>Memberships</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    forms ?
                        <div className='forms-group'>
                            <div className='group-title'>
                                <span className='title'>Forms</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    products ?
                        <div className='products-group'>
                            <div className='group-title'>
                                <span className='title'>Products</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    sales ?
                        <div className='sales-group'>
                            <div className='group-title'>
                                <span className='title'>Sales</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    reviews ?
                        <div className='reviews-group'>
                            <div className='group-title'>
                                <span className='title'>Reviews</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                {
                    files ?
                        <div className='files-group'>
                            <div className='group-title'>
                                <span className='title'>Files</span>
                            </div>
                            <div className='group-detail'>
                                <div className='item-title'>
                                    <span className='title'>Past</span>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-date'>
                                        <span className='day'>18</span>
                                        <span className='month'>JAN</span>
                                        <span className='year'>2023</span>
                                    </div>
                                    <div className='item-info'>
                                        <span className='title'>Blow Dry</span>
                                        <span className='content'>10:00, 1h 30min with Wendy</span>
                                        <span className='price'>RUB 25</span>
                                        <div className='status'>
                                            <span>STARTED</span>
                                        </div>
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
        infoModal: state.infoModalState
    }
})(ItemInfoModal);