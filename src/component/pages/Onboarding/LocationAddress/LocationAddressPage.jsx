import React, { useEffect, useState } from 'react';
import '../onboarding.scss';

const LocationAddressPage = () => {

    const [completeLocation, setCompleteLocation] = useState(false);

    const validateLocation = () => {
        document.getElementById('check1').click();
        setCompleteLocation(!completeLocation);
    }

    useEffect(() => {
        if(completeLocation) {
            document.getElementById('action-next').disabled = false;
            document.getElementById('location-input').disabled = true;
            document.getElementById('location-container').classList.toggle('disabled');
        } else {
            document.getElementById('action-next').disabled = true;
            document.getElementById('location-input').disabled = false;
            document.getElementById('location-container').classList.remove('disabled');
        }

        document.getElementById('location-input').addEventListener('keydown', () => {
            document.getElementById('location-input').value !== '' ? document.getElementById('action-next').disabled = false : document.getElementById('action-next').disabled = true;
        });
    }, [completeLocation]);

    return (
        <div className='location-address-container'>
            <div className='topbar-container'>
                <span className='action-previous' onClick={() => window.location.href = '/onboarding/partner_team_size'}>Previous</span>
                <button className='action-next' id='action-next' onClick={() => window.location.href = '/onboarding/partner_previous_software'}>Next step</button>
            </div>
            <div className='progress-container'>
                <div className='progress-percent'></div>
            </div>
            <div className='detail-container'>
                <span className='small-title'>Account setup</span>
                <div className='container-title'>
                    <span className='title'>Set your location</span>
                    <span className='title-content'>Add your business location so your clients can easily find you.</span>
                </div>
                <div className='content-container'>
                    <div className='container-title'>
                        <span>Business location</span>
                    </div>
                    <div className='group-container'>
                        <div className='group'>
                            <span className='group-title'>Where's your business located?</span>
                            <div className='input-container' id='location-container'>
                                <input type="text" id='location-input' />
                            </div>
                            <span className='group-hint'></span>
                        </div>
                        <div className='group'>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" />
                                <span onClick={validateLocation}>I don't have business address (mobile and online services only)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationAddressPage;