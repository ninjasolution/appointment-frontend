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
                <div className='none-content' style={{display: 'none'}}>
                    <div className='none-logo'>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 65"><path fillRule="evenodd" clipRule="evenodd" d="M32.667 9.833a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Zm8.944 0a12 12 0 0 0-17.889 0h-9.055a4 4 0 0 0-4 4v42a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4v-42a4 4 0 0 0-4-4H41.61Zm2.37 4c.45 1.273.686 2.625.686 4v2a2 2 0 0 1-2 2h-20a2 2 0 0 1-2-2v-2c0-1.375.236-2.727.686-4h-6.686v42h36v-42H43.98Z" fill="url(#a)"></path><path d="M45.114 29.12a2 2 0 0 1-.067 2.827l-14.675 14a2 2 0 0 1-2.762-.001l-7.325-7a2 2 0 1 1 2.764-2.892l5.944 5.68 13.293-12.681a2 2 0 0 1 2.828.066Z" fill="url(#b)"></path><defs><linearGradient id="a" x1="17.234" y1="13.893" x2="54.531" y2="44.283" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient><linearGradient id="b" x1="17.234" y1="13.893" x2="54.531" y2="44.283" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No services added yet</p>
                    <span><a>Click here</a> to add and manage your services.</span>
                </div>
                <div className='service-details'>
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{width: '50%'}}>Service name</th>
                                <th className='font-left' style={{width: '32%'}}>Category</th>
                                <th className='font-right' style={{width: '18%'}}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='service-info'>
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.667 1.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h5.5v-1.5h-5.5Zm-4.442 1a.57.57 0 0 0-.4.161.525.525 0 0 0-.158.375v15.428c0 .138.056.273.159.375a.57.57 0 0 0 .399.161h14.384a.57.57 0 0 0 .4-.161.525.525 0 0 0 .158-.375V3.786a.525.525 0 0 0-.159-.375.57.57 0 0 0-.399-.161h-1.307a.75.75 0 0 1 0-1.5h1.307c.542 0 1.064.211 1.45.592.388.38.608.9.608 1.444v15.428c0 .544-.22 1.064-.607 1.444-.387.38-.909.592-1.45.592H2.724a2.069 2.069 0 0 1-1.45-.592c-.388-.38-.608-.9-.608-1.444V3.786c0-.544.22-1.063.607-1.444a2.07 2.07 0 0 1 1.45-.592h1.308a.75.75 0 0 1 0 1.5H2.725Zm2.692 4.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm-.75 4.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" fill="#6C4BF6"></path></svg>
                                    <div>
                                        <span id='service-name'>service-1</span>
                                        <span id='service-content'>321sadf, 15min</span>
                                    </div>
                                </td>
                                <td className='service-category'>Hair</td>
                                <td className='service-price'>
                                    <div>
                                        <span id='current-price'>RUB 56</span>
                                        <span id='real-price'>RUB 324</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='service-info'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.667 1.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h5.5v-1.5h-5.5Zm-4.442 1a.57.57 0 0 0-.4.161.525.525 0 0 0-.158.375v15.428c0 .138.056.273.159.375a.57.57 0 0 0 .399.161h14.384a.57.57 0 0 0 .4-.161.525.525 0 0 0 .158-.375V3.786a.525.525 0 0 0-.159-.375.57.57 0 0 0-.399-.161h-1.307a.75.75 0 0 1 0-1.5h1.307c.542 0 1.064.211 1.45.592.388.38.608.9.608 1.444v15.428c0 .544-.22 1.064-.607 1.444-.387.38-.909.592-1.45.592H2.724a2.069 2.069 0 0 1-1.45-.592c-.388-.38-.608-.9-.608-1.444V3.786c0-.544.22-1.063.607-1.444a2.07 2.07 0 0 1 1.45-.592h1.308a.75.75 0 0 1 0 1.5H2.725Zm2.692 4.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm-.75 4.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" fill="#6C4BF6"></path></svg>
                                    <div>
                                        <span id='service-name'>Haircut</span>
                                        <span id='service-content'>1h 30min</span>
                                    </div>
                                </td>
                                <td className='service-category'>Hair</td>
                                <td className='service-price'>
                                    <div>
                                        <span id='current-price'>RUB 25</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='service-info'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.667 1.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h5.5v-1.5h-5.5Zm-4.442 1a.57.57 0 0 0-.4.161.525.525 0 0 0-.158.375v15.428c0 .138.056.273.159.375a.57.57 0 0 0 .399.161h14.384a.57.57 0 0 0 .4-.161.525.525 0 0 0 .158-.375V3.786a.525.525 0 0 0-.159-.375.57.57 0 0 0-.399-.161h-1.307a.75.75 0 0 1 0-1.5h1.307c.542 0 1.064.211 1.45.592.388.38.608.9.608 1.444v15.428c0 .544-.22 1.064-.607 1.444-.387.38-.909.592-1.45.592H2.724a2.069 2.069 0 0 1-1.45-.592c-.388-.38-.608-.9-.608-1.444V3.786c0-.544.22-1.063.607-1.444a2.07 2.07 0 0 1 1.45-.592h1.308a.75.75 0 0 1 0 1.5H2.725Zm2.692 4.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm-.75 4.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 3.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" fill="#6C4BF6"></path></svg>
                                    <div>
                                        <span id='service-name'>Blow Dry</span>
                                        <span id='service-content'>1h 30min</span>
                                    </div>
                                </td>
                                <td className='service-category'>Hair</td>
                                <td className='service-price'>
                                    <div>
                                        <span id='current-price'>RUB 25</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='service-count'>
                        <span>1 of 1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;