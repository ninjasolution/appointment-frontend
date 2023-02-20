import React from 'react';
import '../newsale.scss';

const Memberships = () => {
    return (
        <>
            <div className='memberships-setting'>
                <div className='setting-container'>
                    <div className='search-container'>
                        <div className='search-group'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input placeholder='Search by client, team member or service name' />
                        </div>
                        <div className='filter-group'>
                            <span>Filters</span>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='memberships-container'>
                <div className='none-content'>
                    <div className='none-logo'>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 65"><path fillRule="evenodd" clipRule="evenodd" d="M9.172 11.672A4 4 0 0 1 12 10.5h40a4 4 0 0 1 4 4v14.675c0 22.372-18.994 29.776-22.719 31.015a3.8 3.8 0 0 1-2.562 0C26.994 58.95 8 51.547 8 29.175V14.5a4 4 0 0 1 1.172-2.828ZM52 14.5H12v14.675C12 48.74 28.55 55.257 32 56.4c3.45-1.143 20-7.66 20-27.225V14.5Zm-7.553 10.62a2 2 0 0 1-.067 2.827l-14.675 14a2 2 0 0 1-2.762-.001l-7.325-7a2 2 0 1 1 2.764-2.892l5.944 5.68L41.62 25.054a2 2 0 0 1 2.827.066Z" fill="url(#a)"></path><defs><linearGradient id="a" x1="15.164" y1="17.95" x2="50.337" y2="51.775" gradientUnits="userSpaceOnUse"><stop stop-color="#7C6BFF"></stop><stop offset="1" stop-color="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No memberships added yet</p>
                    <span><a>Click here</a> to add and manage your memberships.</span>
                </div>
            </div>
        </>
    )
}

export default Memberships;
