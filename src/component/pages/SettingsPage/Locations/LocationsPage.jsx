import React from 'react';
import { Link } from 'react-router-dom';
import './locations.scss';

const LocationsPage = () => {
    return (
        <div className='locations-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Locations</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add a new location</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-logo'>
                            <span>
                                <svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path fill='#037aff' d="M9.75 20.75V15.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v5.25h4.5V12.5a.75.75 0 1 1 1.5 0v9a.75.75 0 0 1-.75.75h-16a.75.75 0 0 1-.75-.75v-9a.75.75 0 1 1 1.5 0v8.25h4.5zm1.5 0h2.5v-4.5h-2.5v4.5zm-1.416-10.5a3.727 3.727 0 0 1-2.669-1.124A3.743 3.743 0 0 1 .75 6.498a.75.75 0 0 1 .107-.384l3-5A.75.75 0 0 1 4.5.75h16a.75.75 0 0 1 .643.364l3 5a.75.75 0 0 1 .107.384 3.742 3.742 0 0 1-6.415 2.628 3.727 3.727 0 0 1-5.335.001 3.727 3.727 0 0 1-2.666 1.123zm-4.91-8L2.259 6.695a2.242 2.242 0 0 0 4.238.816.75.75 0 0 1 1.343.003 2.227 2.227 0 0 0 3.99 0 .75.75 0 0 1 1.343 0 2.227 2.227 0 0 0 3.99 0 .75.75 0 0 1 1.342-.003 2.242 2.242 0 0 0 4.238-.816L20.075 2.25H4.925z"></path></svg>
                            </span>
                        </div>
                        <div className='item-detail'>
                            <span className='item-name'>Ninja</span>
                            <span className='item-content'>No business address added</span>
                        </div>
                        <div className='item-selection'>
                            <span>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.481 12l-7.14 6.247a1 1 0 001.318 1.506l8-7a1 1 0 000-1.506l-8-7a1 1 0 10-1.317 1.506L14.482 12z"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationsPage;