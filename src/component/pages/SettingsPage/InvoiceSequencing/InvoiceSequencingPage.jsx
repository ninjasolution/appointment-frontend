import React from 'react';
import './invoicesequencing.scss';

const InvoiceSequencingPage = () => {
    return (
        <div className='invoice-sequencimg-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Receipt sequencing</span>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Location Name</th>
                                    <th>Receipt No. Prefix</th>
                                    <th>Next Receipt Number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ninja</td>
                                    <td>-</td>
                                    <td>5</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceSequencingPage;