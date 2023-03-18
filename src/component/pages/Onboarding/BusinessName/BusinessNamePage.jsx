import React from 'react';
import '../onboarding.scss';

const BusinessNamePage = () => {
    return (
        <div className='business-name-container'>
            <div className='topbar-container'>
                <button className='action-next' onClick={() => window.location.href = '/onboarding/partner_service_types'}>Next step</button>
            </div>
            <div className='progress-container'>
                <div className='progress-percent'></div>
            </div>
            <div className='detail-container'>
                <span className='small-title'>Account setup</span>
                <div className='container-title'>
                    <span className='title'>What’s your business name?</span>
                    <span className='title-content'>This is the brand name your clients will see. Your billing and legal name can be added later.</span>
                </div>
                <div className='content-container'>
                    <div className='group'>
                        <span className='group-title'>Business name</span>
                        <div className='input-container'>
                            <input type="text" />
                        </div>
                        <span className='group-hint'></span>
                    </div>
                    <div className='group'>
                        <span className='group-title'>Website</span>
                        <div className='input-container'>
                            <input type="text" placeholder='www.yoursite.com' />
                        </div>
                        <span className='group-hint'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessNamePage;