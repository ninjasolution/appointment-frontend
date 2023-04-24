import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPost, getPosts } from '../../../../../services/PostsService';
import './suppliernew.scss';

const SupplierNewPage = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [telPhone, setTelPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [street, setStreet] = useState("");
    const [suburb, setSuburb] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [enablePostalAddr, setEnablePostalAddr] = useState(true);
    const [streetPostal, setStreetPostal] = useState("");
    const [suburbPostal, setSuburbPostal] = useState("");
    const [cityPostal, setCityPostal] = useState("");
    const [statePostal, setStatePostal] = useState("");
    const [zipPostal, setZipPostal] = useState("");
    const [countryPostal, setCountryPostal] = useState("");

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getPosts(`/api/country`)
            .then(res => {
                setCountries(res.data.data)
            })
    }, [])

    const submitHandler = () => {
        const supplier = {
            firstName,
            lastName,
            email,
            phone,
            info: {
                name,
                description,
                telPhone,
                website,
                street,
                suburb,
                city,
                state,
                zip,
                country,
                enablePostalAddr,
                streetPostal,
                suburbPostal,
                cityPostal,
                statePostal,
                zipPostal,
                countryPostal
            }
        }
        createPost(`/api/user/supplier`, supplier)
            .then(res => {
                console.log(res)
            })
    }


    return (
        <div className='supplier-new-container' id='supplier-new-container'>
            <div className='topbar'>
                <Link className='edit-close' to='/catalogue/suppliers'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <span className='edit-title'>Add a new supplier</span>
                <button className='edit-save' onClick={submitHandler}>Save</button>
            </div>
            <div className='title'>
                <span>Add a new supplier</span>
            </div>
            <div className='main-container'>
                <div className="supplier-details group-container">
                    <div className='group-title'>
                        <span className='title'>Supplier details</span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Supplier name</span>
                        <div className='input-container'>
                            <input type="text" id='supplier-name' placeholder="e.g. L'Oreal" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container' style={{ margin: '0px 0px 20px' }}>
                        <span className='group-title'>Supplier description</span>
                        <div className='input-container'>
                            <textarea cols="30" rows="3" id='supplier-description' value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="contact-info group-container">
                    <div className='group-title'>
                        <span className='title'>Contact info</span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>First name</span>
                        <div className='input-container'>
                            <input type="text" id='first-name' placeholder="e.g. John" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Last name</span>
                        <div className='input-container'>
                            <input type="text" id='last-name' placeholder="e.g. Doe" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Mobile number</span>
                        <div className='input-container'>
                            <input type="text" id='mobile-number' value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Telephone</span>
                        <div className='input-container'>
                            <input type="text" id='telephone' value={telPhone} onChange={e => setTelPhone(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Email</span>
                        <div className='input-container'>
                            <input type="text" id='email' placeholder='mail@example.com' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container' style={{ margin: '0px 0px 20px' }}>
                        <span className='group-title'>Website</span>
                        <div className='input-container'>
                            <input type="text" id='website' placeholder='www.google.com' value={website} onChange={e => setWebsite(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                </div>
                <div className="physical-address group-container">
                    <div className='group-title'>
                        <span className='title'>Physical address</span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Street</span>
                        <div className='input-container'>
                            <input type="text" id='street' placeholder='e.g. 12 Main Street' value={street} onChange={e => setStreet(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Suburb</span>
                        <div className='input-container'>
                            <input type="text" id='subrub' value={suburb} onChange={e => setSuburb(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>City</span>
                            <div className='input-container'>
                                <input type="text" id='city' value={city} onChange={e => setCity(e.target.value)} />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>State</span>
                            <div className='input-container'>
                                <input type="text" id='state' value={state} onChange={e => setState(e.target.value)} />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Zip / Postal Code</span>
                        <div className='input-container'>
                            <input type="text" id='postal-code' value={zip} onChange={e => setZip(e.target.value)} />
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='group sub-container'>
                        <span className='group-title'>Country</span>
                        <div className='input-container'>
                            <select id="country" value={country} onChange={e => setCountry(e.target.value)}>
                                {
                                    countries?.map((item, key) => (
                                        <option key={key} value={item._id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <span className='group-hint danger'></span>
                    </div>
                    <div className='two-group sub-container' style={{ margin: '0px 0px 20px' }}>
                        <div className='group'>
                            <div className='form-check'>
                                <input className="form-check-input" type="checkbox" defaultChecked value={enablePostalAddr} onChange={e => setEnablePostalAddr(e.target.checked)} />
                                <span className='check-content'>Same as postal Address</span>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    !enablePostalAddr &&

                    <div className="physical-address group-container">
                        <div className='group-title'>
                            <span className='title'>Postal address</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title'>Street</span>
                            <div className='input-container'>
                                <input type="text" id='street' placeholder='e.g. 12 Main Street' value={streetPostal} onChange={e => setStreetPostal(e.target.value)} />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title'>Suburb</span>
                            <div className='input-container'>
                                <input type="text" id='subrub' value={suburbPostal} onChange={e => setSuburbPostal(e.target.value)} />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title'>City</span>
                                <div className='input-container'>
                                    <input type="text" id='city' value={cityPostal} onChange={e => setCityPostal(e.target.value)} />
                                </div>
                                <span className='group-hint danger'></span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>State</span>
                                <div className='input-container'>
                                    <input type="text" id='state' value={statePostal} onChange={e => setStatePostal(e.target.value)} />
                                </div>
                                <span className='group-hint danger'></span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title'>Zip / Postal Code</span>
                            <div className='input-container'>
                                <input type="text" id='postal-code' value={zipPostal} onChange={e => setZipPostal(e.target.value)} />
                            </div>
                            <span className='group-hint danger'></span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title'>Country</span>
                            <div className='input-container'>
                                <select id="country-postal" value={countryPostal} onChange={e => setCountryPostal(e.target.value)}>
                                    {
                                        countries?.map((item, key) => (
                                            <option key={key} value={item._id}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <span className='group-hint danger'></span>
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}

export default SupplierNewPage;