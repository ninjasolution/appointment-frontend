import React, { useState } from 'react';
import './suppliers.scss';

const SuppliersPage = () => {

    return (
        <div className='catalogue-suppliers-container'>
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Suppliers</div>
                    <span className='content-summary'>
                        Add and manage details of your suppliers.
                        <a> Learn more</a>
                    </span>
                </div>
                <div className='content-action'>
                    <div className='add-group'>
                        <button className='btn btn-add' onClick={() => window.location.href = '/catalogue/suppliers/new'}>
                            Add new
                        </button>
                    </div>
                </div>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search by supplier name' />
                </div>
                <div className='sort-container'>
                    <select>
                        <option>Supplier name (A-Z)</option>
                        <option>Supplier name (Z-A)</option>
                        <option>Products count (lowest first)</option>
                        <option>Products count (highest first)</option>
                        <option>Updated (newest first)</option>
                        <option>Updated (oldest first)</option>
                    </select>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{ width: '25%' }}>
                                    <span className='header-content'>Supplier name</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '20%' }}>
                                    <span className='header-content'>Phone</span>
                                </th>
                                <th className='font-left' style={{ width: '25%' }}>
                                    <span className='header-content'>Email</span>
                                </th>
                                <th className='font-left' style={{ width: '15%' }}>
                                    <span className='header-content'>Products</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '25%' }}>
                                    <span className='header-content'>Updated at</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-left'>
                                    <div className='supplier-info'>
                                        <div className='supplier-avatar'>SS</div>
                                        <span className='supplier-name'>Sample Supplier</span>
                                    </div>
                                </td>
                                <td className='font-left'>+7 234234234234</td>
                                <td className='font-left'>kafklsdf@jfksaf.com</td>
                                <td className='font-left'></td>
                                <td className='font-left'>3 Mar 2023 18:31</td>
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

export default SuppliersPage;