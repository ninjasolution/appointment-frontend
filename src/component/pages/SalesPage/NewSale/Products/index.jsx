import React from 'react';
import '../newsale.scss';

const Products = () => {
    return (
        <>
            <div className='products-setting'>
                <div className='setting-container'>
                    <div className='search-container'>
                        <div className='search-group'>
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                            <input placeholder='Search by product name' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='products-container'>
                <div className='none-content'>
                    <div className='none-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 64"><path fill="url(#nav-products2-illustration)" fill-rule="evenodd" d="M4.5 16a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4v22a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V26a4 4 0 0 1-4-4v-6Zm8 10v22h40V26h-40Zm-4-4v-6h48v6h-48Zm16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4h-12a2 2 0 0 1-2-2Z" clip-rule="evenodd"></path><defs><linearGradient id="nav-products2-illustration" x1="12.858" x2="39.542" y1="17.97" y2="55.328" gradientUnits="userSpaceOnUse"><stop stop-color="#7C6BFF"></stop><stop offset="1" stop-color="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No products added yet</p>
                    <span><a>Click here</a> to add and manage your products.</span>
                </div>
            </div>
        </>
    )
}

export default Products;
