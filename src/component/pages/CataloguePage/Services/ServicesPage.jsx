import React, { useEffect, useState } from 'react';
import './services.scss';
import { Link } from 'react-router-dom';

const ServicesPage = () => {

    const [optionModal, setOptionModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [serviceActionModal, setServiceActionModal] = useState(false);
    const [newCategoryModal, setNewCategoryMoal] = useState(false);

    const [serviceActionModalPosX, setServiceActionModalPosX] = useState(0);
    const [serviceActionModalPosY, setServiceActionModalPosY] = useState(0);

    const visibleServiceActionModal = (e) => {
        setServiceActionModalPosX(e.clientX);
        setServiceActionModalPosY(e.clientY);
        serviceActionModal ? setServiceActionModal(false) : setServiceActionModal(true);
    }

    useEffect(() => {
        console.log(serviceActionModalPosX)
    }, []);

    return (
        <div className='catalogue-services-container'>
            {
                serviceActionModal ?
                    <div className='service-actions-modal' style={{ top: `${serviceActionModalPosY - 50}px`, right: `0` }}>
                        <span className='action-item'>Add new service</span>
                        <span className='action-item'>Edit category</span>
                        <span className='action-item danger'>Delete category</span>
                    </div> : <></>
            }
            {
                newCategoryModal ?
                    <div className='new-category-modal'>
                        <div className='modal-header'>
                            <span id='modal-title'>New category</span>
                            <span id='modal-close' onClick={() => setNewCategoryMoal(false)}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className="group">
                                <span className='group-title'>Category name</span>
                                <div className='input-container'>
                                    <input type="text" className='input-control' placeholder='e.g. Hair Services' />
                                </div>
                                <span className='group-hint danger'></span>
                            </div>
                            <div className="group">
                                <span className='group-title'>Appointment color</span>
                                <div className='input-container'>
                                    <select className='input-control'>
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
                            <div className="group" style={{ margin: '0px 0px 20px' }}>
                                <span className='group-title'>Category description</span>
                                <div className='input-container'>
                                    <textarea className='input-control' cols="30" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <div className='action-container'>
                                <button className='action-control action-save'>Save</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Services menu</div>
                </div>
                <div className='content-action'>
                    <div className='option-group'>
                        <button className='btn btn-option' onClick={() => { optionModal ? setOptionModal(false) : setOptionModal(true) }}>
                            Options
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.481l6.247-7.14a1 1 0 011.506 1.318l-7 8a1 1 0 01-1.506 0l-7-8a1 1 0 111.506-1.317L12 14.482z"></path></svg>
                            </span>
                        </button>
                        {
                            optionModal ?
                                <div className='option-modal'>
                                    <span className='modal-body'>Download PDF</span>
                                    <span className='modal-body'>Download Excel</span>
                                    <span className='modal-body'>Download CSV</span>
                                    <span className='modal-body'>Create share link</span>
                                    <span className='modal-body'>Settings</span>
                                </div> : <></>
                        }
                    </div>
                    <div className='add-group'>
                        <button className='btn btn-add' onClick={() => { addModal ? setAddModal(false) : setAddModal(true) }}>
                            Add client
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='#fff' d="M12 14.481l6.247-7.14a1 1 0 011.506 1.318l-7 8a1 1 0 01-1.506 0l-7-8a1 1 0 111.506-1.317L12 14.482z"></path></svg>
                            </span>
                        </button>
                        {
                            addModal ?
                                <div className='add-modal'>
                                    <Link className='modal-body' to='/catalogue/services/new-item/appointment-type'>New service</Link>
                                    <span className='modal-body' onClick={() => { setNewCategoryMoal(true); setAddModal(false); }}>New category</span>
                                </div> : <></>
                        }
                    </div>
                </div>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search by name, email or mobile number' />
                </div>
            </div>
            <div className='content-details'>
                <div className='service-group'>
                    <div className='service-header'>
                        <div className='header-title'>
                            <span className='logo'>
                                <svg viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg"><g fill="#B7BABE" fillRule="evenodd"><path d="M11.5 0a1.5 1.5 0 01.144 2.993L11.5 3h-10A1.5 1.5 0 011.356.007L1.5 0h10zM11.5 7a1.5 1.5 0 01.144 2.993L11.5 10h-10a1.5 1.5 0 01-.144-2.993L1.5 7h10zM11.5 14a1.5 1.5 0 01.144 2.993L11.5 17h-10a1.5 1.5 0 01-.144-2.993L1.5 14h10z"></path></g></svg>
                            </span>
                            <span className='title'>Hair</span>
                        </div>
                        <div className='header-actions' onMouseDown={(e) => visibleServiceActionModal(e)}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                        </div>
                    </div>
                    <div className='service-item' onClick={() => window.location.href = '/catalogue/services/edit/form'}>
                        <div className='item-title'>
                            <span className='logo'>
                                <svg viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg"><g fill="#B7BABE" fillRule="evenodd"><path d="M11.5 0a1.5 1.5 0 01.144 2.993L11.5 3h-10A1.5 1.5 0 011.356.007L1.5 0h10zM11.5 7a1.5 1.5 0 01.144 2.993L11.5 10h-10a1.5 1.5 0 01-.144-2.993L1.5 7h10zM11.5 14a1.5 1.5 0 01.144 2.993L11.5 17h-10a1.5 1.5 0 01-.144-2.993L1.5 14h10z"></path></g></svg>
                            </span>
                            <span className='title'>Haircut</span>
                        </div>
                        <div className='item-detail'>
                            <span className='item-time'>1h 30min</span>
                            <span className='item-last-price'>RUB 59</span>
                            <span className='item-current-price'>RUB 25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;