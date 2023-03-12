import React from 'react';
import './resources.scss';

const ResourcesPage = () => {
    return (
        <div className='resources-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Resources</span>
                        <span className='header-sub-title'>Set up bookable resources such as rooms and equipment and assign them to services.
                        </span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add a new location</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-logo'>
                            <span>
                                <svg viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg"><g fill="#B7BABE" fillRule="evenodd"><path d="M11.5 0a1.5 1.5 0 01.144 2.993L11.5 3h-10A1.5 1.5 0 011.356.007L1.5 0h10zM11.5 7a1.5 1.5 0 01.144 2.993L11.5 10h-10a1.5 1.5 0 01-.144-2.993L1.5 7h10zM11.5 14a1.5 1.5 0 01.144 2.993L11.5 17h-10a1.5 1.5 0 01-.144-2.993L1.5 14h10z"></path></g></svg>
                            </span>
                        </div>
                        <div className='item-detail'>
                            <span className='item-name'>Ninja</span>
                            <span className='item-description'>Qeuoor</span>
                            <span className='item-content'>No business address added</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesPage;