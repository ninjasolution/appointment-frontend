import React from 'react';
import '../onboarding.scss';

const RecommendationSourcePage = () => {
    return (
        <div className='recommendation-source-container'>
            <div className='topbar-container'>
                <span className='action-previous' onClick={() => window.location.href = '/onboarding/partner_previous_software'}>Previous</span>
                <button className='action-next' onClick={() => window.location.href = '/'}>Done</button>
            </div>
            <div className='progress-container'>
                <div className='progress-percent'></div>
            </div>
            <div className='detail-container'>
                <span className='small-title'>Account setup</span>
                <div className='container-title'>
                    <span className='title'>Which software are you currently using?</span>
                    <span className='title-content'>If you're looking to switch, we can help speed up your business setup and import your data into your new Fresha account.</span>
                </div>
                <div className='content-container'>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" defaultChecked />
                        <span onClick={() => document.getElementById('radio1').click()}>Recommended by a friend</span>
                        <label class="form-check-label" for="radio1"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio2').click()}>Search engine (e.g. Google, Yahoo)</span>
                        <label class="form-check-label" for="radio2"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio3').click()}>Social media</span>
                        <label class="form-check-label" for="radio3"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio4" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio4').click()}>Magazine ad</span>
                        <label class="form-check-label" for="radio4"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" defaultChecked />
                        <span onClick={() => document.getElementById('radio5').click()}>Ratings website (e.g. Capterra, Trustpilot)</span>
                        <label class="form-check-label" for="radio5"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio6').click()}>Other</span>
                        <label class="form-check-label" for="radio6"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationSourcePage;