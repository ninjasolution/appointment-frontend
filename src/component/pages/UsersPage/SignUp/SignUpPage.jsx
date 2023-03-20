import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createPost, getPosts } from '../../../../services/PostsService';
import '../users.scss';

const SignUpPage = () => {

    const user = useSelector(s => s.globals.setupUser)
    const [editCountryState, setEditCountryState] = useState(false);
    const [ password, setPassword ] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ selectedCountry, setSelectedCountry ] = useState({})
    const [ countries, setCountries ] = useState([])
    const [ timeZones, setTimeZones ] = useState([])
    const [ languages, setLanguages ] = useState([])
    const [ isAgree, setIsAgree ] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        getPosts(`/api/country`)
        .then(res => {
            setCountries(res.data.data)
        })
    }, [])

    const submitHandler = () => {
        if(!isAgree) return
        const data = {
            email: user.email,
            firstName,
            lastName,
            password,
            phone,
            country: selectedCountry

        }
        createPost(`/api/auth/signup`, data)
        .then(res => {
            navigate(`/users/sign-in`)
        })
    }

    useEffect(() => {
        setEditCountryState(false);
    }, []);

    return (
        <div className='signup-container'>
            <div className='group-container'>
                <div className='title-container'>
                    <span className='title'>Create a business account</span>
                    <span className='title-content'>You’re almost there! Create your new account for <b>{user?.email}</b> by completing these details.</span>
                </div>
                <div className='group'>
                    <span className='group-title'>First name</span>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='group'>
                    <span className='group-title'>Last name</span>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your last name'  value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='group'>
                    <span className='group-title'>Password</span>
                    <div className='input-container'>
                        <input type="password" placeholder='Enter a password'  value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <span className='group-hint'></span>
                </div>
                <div className='group'>
                    <span className='group-title'>Mobile number</span>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your mobile number'  value={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <span className='group-hint'></span>
                </div>
                {
                    editCountryState ?
                        <>
                            <div className='group'>
                                <span className='group-title'>Country</span>
                                <div className='input-container'>
                                    <select value={selectedCountry?.name}>
                                        {
                                            countries.map((item, id) => (
                                                <option value={item} key={id} onClick={() => setSelectedCountry(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Time zone</span>
                                <div className='input-container'>
                                    <select>
                                        <option>GMT</option>
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
                                <span className='country-name'>{selectedCountry?.name}</span>
                                <span className='country-edit' onClick={() => setEditCountryState(true)}>Edit</span>
                            </div>
                        </div>
                }
                <div className='group'>
                    <div className='check-container'>
                        <div className='form-check'>
                            <input className="form-check-input" id='check-all-services' type="checkbox" checked={isAgree} onChange={e => setIsAgree(e.target.checked)}/>
                            <span className='check-content' onClick={() => document.getElementById('check-all-services').click()}>
                                I agree to the <Link to='https://terms.fresha.com/privacy-policy'>Privacy Policy</Link>, <Link to='https://terms.fresha.com/terms-service'>Terms of Service</Link> and <Link to='https://terms.fresha.com/partner-terms'>Terms of Business</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <button className='action-continue' onClick={submitHandler}>Create account</button>
            </div>
        </div>
    )
}

export default SignUpPage;