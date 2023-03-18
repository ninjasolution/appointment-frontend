import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../users.scss';

const SignUpPage = () => {

    const [editCountryState, setEditCountryState] = useState(false);
    const [ password, setPassword ] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ countryId, setCountryId ] = useState("")
    const [ countries, setCountries ] = useState([])
    const [ timeZones, setTimeZones ] = useState([])
    const [ languages, setLanguages ] = useState([])

    useEffect(() => {
        setEditCountryState(false);
    }, []);

    return (
        <div className='signup-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Create a business account</span>
                    <span className='title-content'>You’re almost there! Create your new account for <b>nataliiayemeil@gmail.com</b> by completing these details.</span>
                </div>
                <div className='group'>
                    <span className='group-title'>First name</span>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your first name' />
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='group'>
                    <span className='group-title'>Last name</span>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your last name' />
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='group'>
                    <span className='group-title'>Password</span>
                    <div className='input-container'>
                        <input type="password" placeholder='Enter a password' />
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='group'>
                    <span className='group-title'>Mobile number</span>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your mobile number' />
                    </div>
                    <span className='group-hint'></span>
                </div>
                {
                    editCountryState ?
                        <>
                            <div className='group'>
                                <span className='group-title'>Country</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Cyprus</option>
                                        <option>Latvia</option>
                                        <option>Russian Federation</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Time zone</span>
                                <div className='input-container'>
                                    <select>
                                        <option>(GMT +03:00) Moscow</option>
                                        <option>(GMT +03:00) Istanbul</option>
                                        <option>(GMT +05:00) Aqtau</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Currency</span>
                                <div className='input-container'>
                                    <select>
                                        <option>Russian Ruble - RUB</option>
                                        <option>Serbian Dinar - RSD</option>
                                        <option>United States Dollar - USD</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Language</span>
                                <div className='input-container'>
                                    <select>
                                        <option>🇬🇧 English</option>
                                        <option>🇭🇺 magyar</option>
                                        <option>🇷🇴 română</option>
                                    </select>
                                </div>
                            </div>
                        </>
                        :
                        <div className='group'>
                            <span className='group-title'>Country</span>
                            <div className='country-container'>
                                <span className='country-name'>Russian Federation</span>
                                <span className='country-edit' onClick={() => setEditCountryState(true)}>Edit</span>
                            </div>
                        </div>
                }
                <div className='group'>
                    <div className='check-container'>
                        <div className='form-check'>
                            <input className="form-check-input" id='check-all-services' type="checkbox" />
                            <span className='check-content' onClick={() => document.getElementById('check-all-services').click()}>
                                I agree to the <Link to='https://terms.fresha.com/privacy-policy'>Privacy Policy</Link>, <Link to='https://terms.fresha.com/terms-service'>Terms of Service</Link> and <Link to='https://terms.fresha.com/partner-terms'>Terms of Business</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <button className='action-continue'>Create account</button>
            </div>
        </div>
    )
}

export default SignUpPage;