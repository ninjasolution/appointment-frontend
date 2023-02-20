import React from 'react';
import '../newsale.scss';

const Services = () => {
    return (
        <>
            <div className='services-setting'>
                <div className='setting-container'>
                    <div className='search-container'>
                        <div className='search-group'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input placeholder='Search by service name' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='services-container'>
                <div className='none-content'>
                    <div className='none-logo'>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 65"><path fillRule="evenodd" clipRule="evenodd" d="M32.667 9.833a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Zm8.944 0a12 12 0 0 0-17.889 0h-9.055a4 4 0 0 0-4 4v42a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4v-42a4 4 0 0 0-4-4H41.61Zm2.37 4c.45 1.273.686 2.625.686 4v2a2 2 0 0 1-2 2h-20a2 2 0 0 1-2-2v-2c0-1.375.236-2.727.686-4h-6.686v42h36v-42H43.98Z" fill="url(#a)"></path><path d="M45.114 29.12a2 2 0 0 1-.067 2.827l-14.675 14a2 2 0 0 1-2.762-.001l-7.325-7a2 2 0 1 1 2.764-2.892l5.944 5.68 13.293-12.681a2 2 0 0 1 2.828.066Z" fill="url(#b)"></path><defs><linearGradient id="a" x1="17.234" y1="13.893" x2="54.531" y2="44.283" gradientUnits="userSpaceOnUse"><stop stop-color="#7C6BFF"></stop><stop offset="1" stop-color="#473DAD"></stop></linearGradient><linearGradient id="b" x1="17.234" y1="13.893" x2="54.531" y2="44.283" gradientUnits="userSpaceOnUse"><stop stop-color="#7C6BFF"></stop><stop offset="1" stop-color="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No services added yet</p>
                    <span><a>Click here</a> to add and manage your services.</span>
                </div>
            </div>
        </>
    )
}

export default Services;