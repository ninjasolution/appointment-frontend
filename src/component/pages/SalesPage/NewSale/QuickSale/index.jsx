import React from 'react';
import '../newsale.scss';

const QuickSale = () => {
    return (
        <div className='quick-sale-container'>
            <div className='none-content'>
                <div className='none-logo'>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 65"><path fillRule="evenodd" clipRule="evenodd" d="M32.667 9.833a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Zm8.944 0a12 12 0 0 0-17.889 0h-9.055a4 4 0 0 0-4 4v42a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4v-42a4 4 0 0 0-4-4H41.61Zm2.37 4c.45 1.273.686 2.625.686 4v2a2 2 0 0 1-2 2h-20a2 2 0 0 1-2-2v-2c0-1.375.236-2.727.686-4h-6.686v42h36v-42H43.98Z" fill="url(#a)"></path><path d="M45.114 29.12a2 2 0 0 1-.067 2.827l-14.675 14a2 2 0 0 1-2.762-.001l-7.325-7a2 2 0 1 1 2.764-2.892l5.944 5.68 13.293-12.681a2 2 0 0 1 2.828.066Z" fill="url(#b)"></path><defs><linearGradient id="a" x1="17.234" y1="13.893" x2="54.531" y2="44.283" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient><linearGradient id="b" x1="17.234" y1="13.893" x2="54.531" y2="44.283" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient></defs></svg>
                </div>
                <p>No quick sale items set up</p>
                <span><a>Set up</a> quick sale items</span>
            </div>
        </div>
    )
}

export default QuickSale;
