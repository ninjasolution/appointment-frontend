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
                <div className='none-content' style={{ display: 'none' }}>
                    <div className='none-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 64"><path fill="url(#nav-products2-illustration)" fillRule="evenodd" d="M4.5 16a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4v22a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V26a4 4 0 0 1-4-4v-6Zm8 10v22h40V26h-40Zm-4-4v-6h48v6h-48Zm16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4h-12a2 2 0 0 1-2-2Z" clipRule="evenodd"></path><defs><linearGradient id="nav-products2-illustration" x1="12.858" x2="39.542" y1="17.97" y2="55.328" gradientUnits="userSpaceOnUse"><stop stopColor="#7C6BFF"></stop><stop offset="1" stopColor="#473DAD"></stop></linearGradient></defs></svg>
                    </div>
                    <p>No products added yet</p>
                    <span><a>Click here</a> to add and manage your products.</span>
                </div>
                <div className='products-details'>
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{width: '45%'}}>Product name</th>
                                <th className='font-left' style={{width: '22%'}}>Category</th>
                                <th className='font-right' style={{width: '15%'}}>Quantity</th>
                                <th className='font-right' style={{width: '18%'}}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='product-info'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path fill="#fff" d="M0 0h1000v1000H0z"></path><g opacity=".1"><path d="M566.64 267.54V237.6c0-6.74-5.46-12.2-12.2-12.2h-5.37v-68.2c0-6.74-5.46-12.2-12.2-12.2h-73.72c-6.74 0-12.2 5.46-12.2 12.2v68.18h-5.37c-6.74 0-12.2 5.46-12.2 12.2v29.94c-43.58 4.54-76.71 41.22-76.81 85.03v490.23c0 6.74 5.46 12.21 12.2 12.21h262.49c6.74 0 12.2-5.46 12.2-12.2V352.56c-.11-43.81-33.24-80.49-76.82-85.02zM500 166.48c15.23 0 27.58 12.35 27.58 27.58 0 15.23-12.35 27.58-27.58 27.58-15.23 0-27.58-12.35-27.58-27.58 0-15.23 12.35-27.58 27.58-27.58zm-42.23 83.32h84.46v17.33h-84.46V249.8zm161.27 580.79H380.96V352.56c.04-33.68 27.34-60.98 61.02-61.02h116.03c33.68.04 60.98 27.34 61.02 61.02v478.03z"></path><path d="M419.04 406.1c-6.74 0-12.2 5.46-12.2 12.2v263.14c0 6.74 5.46 12.2 12.2 12.2s12.2-5.46 12.2-12.2V418.31c.01-6.74-5.46-12.21-12.2-12.21z"></path></g></svg>
                                    <div>
                                        <span id='product-name'>asdfdasf</span>
                                        <span id='product-content'>SKU: 34</span>
                                    </div>
                                </td>
                                <td></td>
                                <td className='product-quantity'>23433</td>
                                <td className='product-price'>
                                    <div>
                                        <span id='current-price'>RUB 4</span>
                                        <span id='real-price'>RUB 34</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='product-count'>
                        <span>1 of 1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;
