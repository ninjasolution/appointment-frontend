import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { basicBgColorByIndex, membershipDurationByIndex, timesByIndex } from '../../../../../config';
import { createPost, getPosts } from '../../../../../services/PostsService';
import './createmembership.scss';

const CreateMembershipPage = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [allServices, setAllServices] = useState([]);
    const [services, setServices] = useState([]);
    const [type, setType] = useState(0);
    const [countOfSale, setCountOfSale] = useState(0)
    const [duration, setDuration] = useState(0);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [color, setColor] = useState(0);
    const [enableOnline, setEnableOnline] = useState(false);
    const [condition, setCondition] = useState("");
    const [serviceModal, setServiceModal] = useState(false)
    const [ taxes, setTaxes ] = useState([]);

    useEffect(() => {
        getPosts(`/api/tax`)
        .then(res => {
            setTaxes(res.data.data)
        })

        getPosts(`/api/service`)
        .then(res => {
            setAllServices(res.data.data)
        })
    }, [])

    const submitHandler = () => {
        const membership = {
            name,
            description,
            services,
            type,
            countOfSale,
            duration,
            price,
            tax,
            color,
            enableOnline,
            condition
        }
        createPost(`/api/membership`, membership)
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className='create-membership-container' id='create-membership-container'>

            {
                serviceModal &&
                <div className='add-address-modal'>
                    <div className='modal-header'>
                        <span className='modal-title'>Select Services</span>
                        <span className='modal-close' onClick={() => setServiceModal(false)}>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='group'>
                            <div className="list-group">
                                {
                                    allServices?.map((item, key) => (

                                        <div key={key}>

                                            <div className='list-item'>
                                                <div className='check-container'>
                                                    <div className='form-check'>
                                                        <input className="form-check-input" style={{ height: "20px", width: "20px" }} checked={services.includes(item._id)} name='test-check' onChange={e => services.includes(item._id) ? setServices(services.filter(s => s != item._id)) : setServices([...services, item._id])} type="checkbox" />
                                                    </div>
                                                    <div className='item-detail'>
                                                        <span className='item-name'>{item.name}</span>
                                                        <span className='item-content'>{timesByIndex[item.priceAndDurations[0].time || 0].label}</span>
                                                    </div>
                                                </div>
                                                <div className='item-price'>
                                                    <span>RUB {item.priceAndDurations[0].price}</span>
                                                </div>
                                            </div>

                                            {
                                                key !== allServices.length - 1 &&
                                                <div className='item-spliter'></div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className='modal-footer'>
                        <div className='actions-container'>
                            <button className='modal-button modal-close' onClick={() => setServiceModal(false)}>Cancel</button>
                            <button className='modal-button modal-continue' onClick={() => setServiceModal(false)}>Continue</button>
                        </div>
                    </div>
                </div>
            }
            <div className='topbar'>
                <div className='topbar-close'>
                    <Link className='action-close' to='/catalogue/vouchers'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </Link>
                </div>
                <div className='topbar-title'>
                    <span className='title-content'>Create a membership</span>
                </div>
                <button className='action-save' onClick={submitHandler}>Create membership</button>
            </div>
            <div className='main-container'>
                <div className='details-title'>
                    <span>Create a membership</span>
                </div>
                <div className='details-group'>
                    <div className="basic-info group-container">
                        <div className='group-container-title'>
                            <span className='title'>Basic info</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Membership name</span>
                            <div className='input-container'>
                                <input type="text" id='first-name' placeholder='Add membership name' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <span className='group-hint'>This field is required</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Membership description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="4" placeholder='Add membership description' value={description} onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="services-sessions group-container">
                        <div className='group-container-title'>
                            <span className='title'>Services and sessions</span>
                            <span className='sub-title'>Add the services and sessions included in the membership.</span>
                        </div>
                        <div className='group'>
                            <span className='title'>Included services</span>
                            <div className='group'>
                                <div className='input-container  two-group'>
                                    <input type="text" disabled value={`${services.length == allServices.length ? "All" : services.length} Services`} />
                                    <Link to={"#"} onClick={() => setServiceModal(true)} style={{ marginRight: "20px" }}> <span style={{ color: "#037aff", fontSize: "17px", fontWeight: "400" }}>Edit</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className='two-group'>
                            <div className='group'>
                                <span className='group-title'>Sessions</span>
                                <div className='input-container'>
                                    <select value={type} onChange={e => setType(e.target.value)}>
                                        <option value={0}>Limited</option>
                                        <option value={1}>Unlimited</option>
                                    </select>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Number of sessions</span>
                                <div className='input-container'>
                                    <input type="number" id='email-address' value={countOfSale} onChange={e => setCountOfSale(e.target.value)}/>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-payment group-container">
                        <div className='group-container-title'>
                            <span className='title'>Pricing and payment</span>
                            <span className='sub-title'>Choose how you'd like your clients to pay.</span>
                        </div>
                        <div className='two-group'>
                            <div className='group'>
                                <span className='group-title'>Valid for</span>
                                <div className='input-container'>
                                    <select value={duration} onChange={e => setDuration(e.target.value)}>
                                        {
                                            Object.keys(membershipDurationByIndex).map((key) => (
                                                <option key={key} value={membershipDurationByIndex[key].value}>{membershipDurationByIndex[key].label}</option>
                                            ))
                                        }
                                     </select>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Price</span>
                                <div className='input-container'>
                                    <input type="text" id='price' value={price} onChange={e => setPrice(e.target.value)}/>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                        <div className='sub-container'>
                            <span className='sub-group-title'>Tax rate</span>
                            <div className='group'>
                                <span className='group-title'>Tax rate</span>
                                <div className='input-container'>
                                    <select value={tax} onChange={e => setTax(e.target.value)}>
                                        {
                                            taxes?.map((item, key) => (
                                                <option key={key} value={item._id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                    </div>
                    <div className="online-sales group-container">
                        <div className='group-container-title'>
                            <span className='title'>Online sales</span>
                            <span className='sub-title'>Choose if you would like to sell your membership online.</span>
                        </div>
                        <div className='group'>
                            <div className='check-container'>
                                <div className='form-check form-switch' onClick={() => setEnableOnline(!enableOnline)}>
                                    <input className="form-check-input" id='enable-online-sales' type="checkbox" value={enableOnline} onChange={e => setEnableOnline(e.target.checked)}/>
                                    <span className='check-content'>Enable online sales</span>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='sub-ad-container'>
                                <span>Online membership sales are coming soon to Russian Federation with payments in Fresha</span>
                            </div>
                        </div>
                    </div>
                    <div className="colour-customization group-container">
                        <div className='group-container-title'>
                            <span className='title'>Colour customisation</span>
                            <span className='sub-title'>Select a colour that matches your business.</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Choose a colour</span>
                            <div className='colour-group' style={{display: "flex"}}>
                                    {
                                        Object.keys(basicBgColorByIndex).map((key) => (
                                            <div key={key} style={{ cursor: "pointer" }} className={`blue-container colour-container ${key == color && "active"}`} onClick={() => setColor(key)}>
                                                <div style={{ background: basicBgColorByIndex[key] }} className='select-colour'></div>
                                            </div>
                                        ))
                                    }
                                </div>
                        </div>
                    </div>
                    <div className="terms-conditions group-container">
                        <div className='group-container-title'>
                            <span className='title'>Terms & Conditions</span>
                            <span className='sub-title'>If there are any rules attached to your membership it's a good place to mention them.</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Terms & Conditions</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="4" value={condition} onChange={e => setCondition(e.target.value)}/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CreateMembershipPage;