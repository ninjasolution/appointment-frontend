import React from 'react';
import './paymenttypes.scss';

const PaymentTypesPage = () => {
    return (
        <div className='payment-types-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Payment Types</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Add payment type</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='item-logo'>
                            <span>
                                <svg viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg"><g fill="#B7BABE" fillRule="evenodd"><path d="M11.5 0a1.5 1.5 0 01.144 2.993L11.5 3h-10A1.5 1.5 0 011.356.007L1.5 0h10zM11.5 7a1.5 1.5 0 01.144 2.993L11.5 10h-10a1.5 1.5 0 01-.144-2.993L1.5 7h10zM11.5 14a1.5 1.5 0 01.144 2.993L11.5 17h-10a1.5 1.5 0 01-.144-2.993L1.5 14h10z"></path></g></svg>
                            </span>
                        </div>
                        <div className='item-detail'>
                            <span className='item-name'>Cash</span>
                        </div>
                        <div className='item-lock'>
                            <span>
                                <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.28 1.048c-1.267.199-2.35.75-3.21 1.632a5.418 5.418 0 0 0-1.456 2.759c-.096.47-.107.733-.107 2.555v2.03l-2.52.014-2.52.015-.306.144c-.347.162-.78.568-.936.876-.232.456-.232.446-.215 8.1l.017 7.307.149.32c.196.42.607.833 1.018 1.023l.326.15h20.96l.326-.15c.411-.19.822-.603 1.018-1.023l.149-.32.017-7.307c.017-7.654.017-7.644-.215-8.1-.156-.308-.589-.714-.936-.876l-.306-.144-2.506-.026L21.52 10l-.028-2.16c-.031-2.406-.044-2.513-.425-3.445-.643-1.576-2.081-2.811-3.757-3.228-.423-.106-1.658-.178-2.03-.119m1.653 2.082c.866.214 1.8.992 2.202 1.832.337.704.353.845.356 3.065L19.493 10l-3.48.014-3.48.013-.005-1.773c-.007-2.596-.01-2.568.337-3.292.383-.802 1.31-1.595 2.122-1.818a4.064 4.064 0 0 1 1.946-.014m9.04 15.883v7.014H6.027V12h19.946v7.013m-10.329-1.472a1.5 1.5 0 0 0-1.124 1.575c.1 1.255 1.603 1.823 2.511.948.281-.271.418-.561.449-.948a1.437 1.437 0 0 0-.775-1.425c-.29-.157-.768-.225-1.061-.15" fillRule="evenodd" fill="#000"></path></svg>
                            </span>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='item-logo'>
                            <span>
                                <svg viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg"><g fill="#B7BABE" fillRule="evenodd"><path d="M11.5 0a1.5 1.5 0 01.144 2.993L11.5 3h-10A1.5 1.5 0 011.356.007L1.5 0h10zM11.5 7a1.5 1.5 0 01.144 2.993L11.5 10h-10a1.5 1.5 0 01-.144-2.993L1.5 7h10zM11.5 14a1.5 1.5 0 01.144 2.993L11.5 17h-10a1.5 1.5 0 01-.144-2.993L1.5 14h10z"></path></g></svg>
                            </span>
                        </div>
                        <div className='item-detail'>
                            <span className='item-name'>Other</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentTypesPage;