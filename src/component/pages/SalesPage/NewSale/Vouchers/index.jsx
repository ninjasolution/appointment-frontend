import React from 'react';
import '../newsale.scss';

const Vouchers = () => {
    return (
        <>
            <div className='vouchers-setting'>
                <div className='setting-container'>
                    <div className='search-container'>
                        <div className='search-group'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input placeholder='Search by voucher name' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='vouchers-container'>
                <div className='none-content'>
                    <div className='none-logo'>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fillRule="evenodd" clipRule="evenodd" d="M2 17.98A4 4 0 0 1 6 14h52a4 4 0 0 1 4 4v6.035A2 2 0 0 1 60 26c-3.23 0-5.894 2.661-5.894 6S56.77 38 60 38a2 2 0 0 1 2 1.965l-.001 6V46a4 4 0 0 1-4 4H6a4 4 0 0 1-4-3.98v-5.985A2 2 0 0 1 4 38c3.23 0 5.894-2.661 5.894-6s-2.664-6-5.895-6a2 2 0 0 1-2-2.035L2 17.98ZM58 18H6l.031 4.21c4.505.95 7.863 4.99 7.863 9.79 0 4.8-3.358 8.84-7.863 9.79L6 46h52l.032-4.197c-4.537-.925-7.926-4.98-7.926-9.803 0-4.822 3.389-8.878 7.926-9.802L58 18Zm-26 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-10 6c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Z" fill="url(#voucher2-illustration)"></path><defs><linearGradient id="voucher2-illustration" x1="10.955" y1="19.373" x2="33.356" y2="56.709" gradientUnits="userSpaceOnUse"><stop stop-color="#7C6BFF"></stop><stop offset="1" stop-color="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No vouchers added yet</p>
                    <span><a>Click here</a> to add and manage your vouchers types</span>
                    <span>or create a one-off voucher for this sale.</span>
                    <button>Create a one-off voucher</button>
                </div>
            </div>
        </>
    )
}

export default Vouchers;