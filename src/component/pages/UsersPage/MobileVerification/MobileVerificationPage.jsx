import React from 'react';
import '../users.scss';

const MobileVerificationPage = () => {
    return (
        <div className='mobile-verification-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Verify your mobile number</span>
                    <span className='title-content'>To protect your account, we’ll send a text message with a 4-digit code to the mobile number below.</span>
                </div>
                <div className='group'>
                    <span className='group-title'>Mobile number</span>
                    <div className='input-container'>
                        <input type="text" value='+1 815 414 2952' />
                    </div>
                    <span className='group-hint'></span>
                </div>
                <button className='action-continue' onClick={() => window.location.href = '/mobile-verification/code'}>Send code</button>
            </div>
        </div>
    )
}

export default MobileVerificationPage;