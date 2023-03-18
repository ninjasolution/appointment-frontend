import React from 'react';
import '../onboarding.scss';

const PreviousSoftwarePage = () => {
    return (
        <div className='previous-software-container'>
            <div className='topbar-container'>
                <span className='action-previous' onClick={() => window.location.href = '/onboarding/partner_location_address'}>Previous</span>
                <button className='action-next' onClick={() => window.location.href = '/onboarding/partner_recommendation_source'}>Next step</button>
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
                        <span onClick={() => document.getElementById('radio1').click()}>Acuity</span>
                        <label class="form-check-label" for="radio1"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio2').click()}>Booksy</span>
                        <label class="form-check-label" for="radio2"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio3').click()}>Janeapp</span>
                        <label class="form-check-label" for="radio3"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio4" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio4').click()}>Kitomba</span>
                        <label class="form-check-label" for="radio4"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" defaultChecked />
                        <span onClick={() => document.getElementById('radio5').click()}>Square</span>
                        <label class="form-check-label" for="radio5"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio6').click()}>Mindbody</span>
                        <label class="form-check-label" for="radio6"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio7').click()}>Ovatu</span>
                        <label class="form-check-label" for="radio7"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio8').click()}>Phorest</span>
                        <label class="form-check-label" for="radio8"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" defaultChecked />
                        <span onClick={() => document.getElementById('radio9').click()}>Salon Irios</span>
                        <label class="form-check-label" for="radio9"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio10" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio10').click()}>Shortcuts</span>
                        <label class="form-check-label" for="radio10"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio11" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio11').click()}>Treatwell</span>
                        <label class="form-check-label" for="radio11"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio12" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio12').click()}>Squire</span>
                        <label class="form-check-label" for="radio12"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio13" name="optradio" value="option1" defaultChecked />
                        <span onClick={() => document.getElementById('radio13').click()}>Styleseat</span>
                        <label class="form-check-label" for="radio13"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio14" name="optradio" value="option2" />
                        <span onClick={() => document.getElementById('radio14').click()}>Timely</span>
                        <label class="form-check-label" for="radio14"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio15" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio15').click()}>Vagaro</span>
                        <label class="form-check-label" for="radio15"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio16" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio16').click()}>Zenoti</span>
                        <label class="form-check-label" for="radio16"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio17" name="optradio" value="option3" />
                        <span onClick={() => document.getElementById('radio17').click()}>I'm not using any software</span>
                        <label class="form-check-label" for="radio17"></label>
                    </div>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id="radio18" name="optradio" value="option4" />
                        <span onClick={() => document.getElementById('radio18').click()}>Other</span>
                        <label class="form-check-label" for="radio18"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviousSoftwarePage;