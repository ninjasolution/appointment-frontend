import React, { useState } from 'react';
import './products.scss';

const CatalogueProducts = () => {

    const [filterModal, setFilterModal] = useState(false);
    const [optionModal, setOptionModal] = useState(false);

    return (
        <div className='catalogue-products-container'>
            {
                filterModal ?
                    <div className='filter-modal'>
                        <div className='modal-header'>
                            <span id='modal-title'>Filters</span>
                            <span id='modal-close' onClick={() => setFilterModal(false)}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className='group'>
                                <span className='group-title'>Categories</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All categories</option>
                                        <option>No category</option>
                                        <option>a</option>
                                        <option>dsw</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Brands</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All brands</option>
                                        <option>No brand</option>
                                        <option>ewbe</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Suppliers</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All suppliers</option>
                                        <option>No supplier</option>
                                        <option>dfs</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Stock</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All products</option>
                                        <option>Low in stock</option>
                                        <option>Out of stock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <span onClick={() => setFilterModal(false)}>Clear all filters</span>
                            <div id='actions'>
                                <button id='action-cancel' onClick={() => setFilterModal(false)}>Cancel</button>
                                <button id='action-apply'>Apply</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Product list</div>
                    <span className='content-summary'>
                        Add and manage your products in stock.
                        <a> Learn more</a>
                    </span>
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
                                    <span className='modal-body'>Download Excel</span>
                                    <span className='modal-body'>Download CSV</span>
                                    <span className='modal-body'>Manage my brands</span>
                                    <span className='modal-body'>Manage my categories</span>
                                    <span className='modal-body'>Import products</span>
                                </div> : <></>
                        }
                    </div>
                    <div className='add-group'>
                        <button className='btn btn-add' onClick={() => window.location.href = '/catalogue/products/product-add'}>
                            Add new product
                        </button>
                    </div>
                </div>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search by product name or barcode' />
                </div>
                <div className='filter-container' onClick={() => setFilterModal(true)}>
                    <span>Filters</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                </div>
                <div className='sort-container'>
                    <select>
                        <option>Product name (A-Z)</option>
                        <option>Product name (Z-A)</option>
                        <option>Created (oldest first)</option>
                        <option>Created (newest first)</option>
                        <option>Updated (oldest first)</option>
                        <option>Updated (newest first)</option>
                        <option>Quantity (highest first)</option>
                        <option>Quantity (lowest first)</option>
                        <option>Category (A-Z)</option>
                        <option>Category (Z-A)</option>
                        <option>Supplier (A-Z)</option>
                        <option>Supplier (Z-A)</option>
                        <option>Retail Price (lowest first)</option>
                        <option>Retail Price (highest first)</option>
                    </select>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{ width: '40px' }}>
                                    <span className='header-content'></span>
                                </th>
                                <th className='font-left' style={{ width: '45%' }}>
                                    <span className='header-content'>Product name</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '15%' }}>
                                    <span className='header-content'>Category</span>
                                </th>
                                <th className='font-left' style={{ width: '15%' }}>
                                    <span className='header-content'>Supplier</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '12.5%' }}>
                                    <span className='header-content'>Quantity</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '17%' }}>
                                    <span className='header-content'>Retail price</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-left'>
                                    <div className='form-check'>
                                        <input className="form-check-input" id='check-product' type="checkbox" />
                                    </div>
                                </td>
                                <td className='product-info'>
                                    <div className='product-logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path fill="#fff" d="M0 0h1000v1000H0z"></path><g opacity=".1"><path d="M566.64 267.54V237.6c0-6.74-5.46-12.2-12.2-12.2h-5.37v-68.2c0-6.74-5.46-12.2-12.2-12.2h-73.72c-6.74 0-12.2 5.46-12.2 12.2v68.18h-5.37c-6.74 0-12.2 5.46-12.2 12.2v29.94c-43.58 4.54-76.71 41.22-76.81 85.03v490.23c0 6.74 5.46 12.21 12.2 12.21h262.49c6.74 0 12.2-5.46 12.2-12.2V352.56c-.11-43.81-33.24-80.49-76.82-85.02zM500 166.48c15.23 0 27.58 12.35 27.58 27.58 0 15.23-12.35 27.58-27.58 27.58-15.23 0-27.58-12.35-27.58-27.58 0-15.23 12.35-27.58 27.58-27.58zm-42.23 83.32h84.46v17.33h-84.46V249.8zm161.27 580.79H380.96V352.56c.04-33.68 27.34-60.98 61.02-61.02h116.03c33.68.04 60.98 27.34 61.02 61.02v478.03z"></path><path d="M419.04 406.1c-6.74 0-12.2 5.46-12.2 12.2v263.14c0 6.74 5.46 12.2 12.2 12.2s12.2-5.46 12.2-12.2V418.31c.01-6.74-5.46-12.21-12.2-12.21z"></path></g></svg>
                                    </div>
                                    <div className='product-detail'>
                                        <span className='product-name'>Mykhailo Savchuk</span>
                                        <span className='product-content'>Barcode: ert</span>
                                    </div>
                                </td>
                                <td className='product-category font-left'>a</td>
                                <td className='product-supplier font-left'>-</td>
                                <td className='product-quantity font-left'>42</td>
                                <td className='product-price font-right'>
                                    <div className='price-container'>
                                        <span className='real-price'>RUB 4</span>
                                        <span className='old-price'>RUB 11</span>
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
        </div>
    )
}

export default CatalogueProducts;