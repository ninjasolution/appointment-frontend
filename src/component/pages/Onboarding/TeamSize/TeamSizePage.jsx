import React from 'react';
import '../onboarding.scss';

const TeamSizePage = () => {
    return (
        <div className='team-size-container'>
            <div className='topbar-container'>
                <span className='action-previous' onClick={() => window.location.href = '/onboarding/partner_service_types'}>Previous</span>
                <button className='action-next' onClick={() => window.location.href = '/onboarding/partner_location_address'}>Next step</button>
            </div>
            <div className='progress-container'>
                <div className='progress-percent'></div>
            </div>
            <div className='detail-container'>
                <span className='small-title'>Account setup</span>
                <div className='container-title'>
                    <span className='title'>What's your team size?</span>
                    <span className='title-content'>This will help us set up your calendar correctly. Don’t worry, this doesn’t change the price - you can have unlimited team members for free on Fresha!</span>
                </div>
                <div className='content-container'>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" defaultChecked />
                        <span onClick={() => document.getElementById('radio1').click()}>It's just me</span>
                        <label class="form-check-label" for="radio1"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio2').click()}>2-5 people</span>
                        <label class="form-check-label" for="radio2"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio3').click()}>6-10 people</span>
                        <label class="form-check-label" for="radio3"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio4" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio4').click()}>11+ people</span>
                        <label class="form-check-label" for="radio4"></label>
                    </div>
                    <div className='alert-container'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.91 10.403A6.75 6.75 0 0119 12.752a6.724 6.724 0 01-2.942 5.544l-.058.037v4.917a.75.75 0 01-.648.743L15.25 24h-6a.75.75 0 01-.75-.75v-4.917l-.06-.04a6.75 6.75 0 01-2.613-7.646zm7.268-2.849a5.25 5.25 0 00-3.553 9.714.75.75 0 01.375.65v4.581h4.5v-4.581a.75.75 0 01.282-.587l.095-.064a5.224 5.224 0 002.623-4.52 5.25 5.25 0 00-4.322-5.193zM22.75 12a.75.75 0 01.102 1.493l-.102.007h-1.5a.75.75 0 01-.102-1.493L21.25 12h1.5zm-19.5 0a.75.75 0 01.102 1.493l-.102.007h-1.5a.75.75 0 01-.102-1.493L1.75 12h1.5zm.96-8.338l.085.072 2.12 2.121a.75.75 0 01-.976 1.133l-.084-.072-2.12-2.121a.75.75 0 01.976-1.133zm17.056.072a.75.75 0 01.072.977l-.072.084-2.121 2.12a.75.75 0 01-1.133-.976l.072-.084 2.121-2.12a.75.75 0 011.06 0zM12.25 0a.75.75 0 01.743.648L13 .75v3a.75.75 0 01-1.493.102L11.5 3.75v-3a.75.75 0 01.75-.75z" fill="#101928"></path></svg></span>
                        <span>We’ll add ‘Wendy’ as an example employee so you can see how the system works. You can manage employees later once you’re in!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSizePage;