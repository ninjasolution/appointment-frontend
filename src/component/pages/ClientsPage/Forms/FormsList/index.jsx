import React from 'react';
import { Link } from 'react-router-dom';
import '../forms.scss';

const FormsList = () => {
    return (
        <div className='form-list-container'>
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Forms</div>
                    <span className='content-summary'>
                        Create and send forms to your client.
                        <a> Learn more</a>
                    </span>
                </div>
                <div className='content-action'>
                    <Link className='add-client' to='/clients/list/add'>
                        Create form
                    </Link>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr className='table-header'>
                                <th className='font-left' style={{ width: '35%' }}>
                                    <span className='header-content'>Consultation form name</span>
                                </th>
                                <th className='font-right' style={{ width: '12%' }}>
                                    <span className='header-content'>Services</span>
                                </th>
                                <th className='font-right' style={{ width: '18%' }}>
                                    <span className='header-content'>Request</span>
                                </th>
                                <th className='font-right' style={{ width: '18%' }}>
                                    <span className='header-content'>Status</span>
                                </th>
                                <th className='font-right' style={{ width: '60px' }}>
                                    <span className='header-content'></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-left ref-name'>COVId 19</td>
                                <td className='font-left'>All services</td>
                                <td className='font-left'>Before appointment</td>
                                <td className='font-left'>
                                    <span className='budget success'>INACTIVE</span>
                                </td>
                                <td className='font-left'>
                                    <div className='more-actions'>
                                        <span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                                        </span>
                                        <div className='actions-list'>
                                            <span>Overview</span>
                                            <span>Edit</span>
                                            <span>Preview</span>
                                            <span>Activate</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FormsList;