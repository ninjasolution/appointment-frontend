import React from 'react';
import '../../users.scss';

const VerifyCodePage = () => {
    return (
        <div className='verification-code-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Enter the 4-digit code</span>
                    <span className='title-content'>The 4-digit code has been sent to <b>+1 815 414 2952.</b></span>
                </div>
                <div className='digit-group'>
                    <div className='digit-item'>
                        <input type="text" maxLength='1' />
                    </div>
                    <div className='digit-item'>
                        <input type="text" maxLength='1' />
                    </div>
                    <div className='digit-item'>
                        <input type="text" maxLength='1' />
                    </div>
                    <div className='digit-item'>
                        <input type="text" maxLength='1' />
                    </div>
                </div>
                <div className='custom-group'>
                    <span className='custom-link'>Resend 4-digit code</span>
                </div>
            </div>
        </div>
    )
}

export default VerifyCodePage;