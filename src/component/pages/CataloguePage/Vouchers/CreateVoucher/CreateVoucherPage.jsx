import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { basicBgColorByIndex, calendarColorByIndex, numberOfSale, timesByIndex } from '../../../../../config';
import { createPost, getPosts } from '../../../../../services/PostsService';
import './createvoucher.scss';

const CreateVoucherPage = () => {

    const [name, setName] = useState("");
    const [value, setvalue] = useState(0);
    const [description, setDescription] = useState("");
    const [retailPrice, setRetailPrice] = useState(0);
    const [duration, setDuration] = useState(0);
    const [enableOnlineSale, setEnableOnlineSale] = useState(false);
    const [enableLimitedSale, setEnableLimitedSale] = useState(false);
    const [quantity, setQuantity] = useState(false);
    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [title, setTitle] = useState("")
    const [enableAddButton, setEnableAddButton] = useState(false);
    const [serviceModal, setServiceModal] = useState(false);
    const [color, setColor] = useState(0);
    const [enableNote, setEnableNode] = useState(false)
    const [step, setStep] = useState(0)

    const createHandler = () => {

        const voucher = {
            name,
            value,
            retailPrice,
            enableLimitedSale,
            services,
            quantity,
            duration,
            title,
            enableOnlineSale,
            description,
            color,
            enableNote,
            enableAddButton
        }
        console.log(voucher)
        createPost(`/api/voucher`, voucher)
            .then(res => {
                console.log(res.data.data)
            })
    }

    useEffect(() => {
        getPosts(`/api/service`)
            .then(res => {
                console.log(res.data.data)
                setAllServices(res.data.data)
            })
    }, [])

    return (
        <div className='create-voucher-container' id='create-client-container'>
            <div className='topbar'>
                <div className='topbar-close'>
                    <Link className='action-close' to='/catalogue/vouchers'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </Link>
                    {
                    step == 1 &&
                    <button className='action-previous' onClick={() => setStep(0)}>{"Previous"}</button>
                }
                </div>
                
                <div className='topbar-title'>
                    <span id='step-content'>Step {step + 1} of 2: Add your voucher type info</span>
                    <span className='title-content'>Create a voucher type</span>
                </div>
                <button className='action-save' onClick={() => step == 0 ? setStep(1) : createHandler()}>{step == 0 ? "Next step" : "Save"}</button>
            </div>
            <div className='main-container'>

                <div className="left-side">
                    <div style={{ display: `${step == 0 ? "block" : "none"}` }}>
                        <div className="voucher-info group-container">
                            <div className='group-container-title'>
                                <span className='title'>Voucher info</span>
                                <span className='sub-title'>Add the voucher name, value and duration of the voucher. If the voucher value is higher than the retail price it will encourage more sales.</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Voucher name</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='two-group'>
                                <div className='group'>
                                    <span className='group-title'>Value</span>
                                    <div className='input-container'>
                                        <input type="text" id='mobile-number' value={value} onChange={e => setvalue(e.target.value)} />
                                    </div>
                                    <span className='group-hint'></span>
                                </div>
                                <div className='group'>
                                    <span className='group-title'>Retail price</span>
                                    <div className='input-container'>
                                        <input type="text" id='email-address' value={retailPrice} onChange={e => setRetailPrice(e.target.value)} />
                                    </div>
                                    <span className='group-hint'></span>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Valid for</span>
                                <div className='input-container'>
                                    <select value={duration} onChange={e => setDuration(e.target.value)}>
                                        <option value={14}>14 days</option>
                                        <option value={30}>1 month</option>
                                        <option value={30 * 2}>2 months</option>
                                        <option value={30 * 3}>3 months</option>
                                        <option value={30 * 4}>4 months</option>
                                        <option value={30 * 6}>6 months</option>
                                        <option value={365}>1 year</option>
                                        <option value={365 * 3}>3 years</option>
                                        <option value={365 * 5}>5 years</option>
                                        <option value={365 * 100}>Forever</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='check-limited' type="checkbox" value={enableLimitedSale} onChange={e => setEnableLimitedSale(e.target.checked)} />
                                        <span className='check-content'>Limit amount of sales</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Number of sales</span>
                                <div className='input-container'>
                                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                        {
                                            numberOfSale.map((item, key) => (
                                                <option key={key}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="services-included group-container">
                            <div className='group-container-title'>
                                <span className='title'>Services included</span>
                            </div>
                            <div className='group'>
                                <div className='input-container  two-group'>
                                    <input type="text" disabled value={`${services.length == allServices.length ? "All" : services.length} Services`} />
                                    <Link to={"#"} onClick={() => setServiceModal(true)} style={{ marginRight: "20px" }}> <span style={{ color: "#037aff", fontSize: "17px", fontWeight: "400" }}>Edit</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="online-sales group-container">
                            <div className='group-container-title'>
                                <span className='title'>Online sales</span>
                                <span className='sub-title'>Choose if you would like to sell your voucher online.</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='enable-online-sales' type="checkbox" value={enableOnlineSale} onChange={e => setEnableOnlineSale(e.target.checked)} />
                                        <span className='check-content'>Enable online sales</span>
                                    </div>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='sub-ad-container'>
                                    <span>Online voucher sales are coming soon to Russian Federation with payments in Fresha</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: `${step == 1 ? "block" : "none"}` }}>
                        <div className="text-container group-container">
                            <div className='group-container-title'>
                                <span className='title'>Text</span>
                                <span className='sub-title'>Add a title and a message on the voucher.</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Voucher title</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' value={title} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <span className='group-hint'>This field is required</span>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Voucher description</span>
                                <div className='input-container'>
                                    <textarea cols="30" rows="6" value={description} onChange={e => setDescription(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="voucher-colour group-container">
                            <div className='group-container-title'>
                                <span className='title'>Voucher colour</span>
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
                        <div className='spliter-grid'></div>
                        <div className="buttons-container group-container">
                            <div className='group-container-title'>
                                <span className='title'>Buttons</span>
                                <span className='sub-title'>Add buttons to the voucher.</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='enable-online-sales' type="checkbox" value={enableAddButton} onChange={e => setEnableAddButton(e.target.checked)}/>
                                        <span className='check-content'>Add a Book now button</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='spliter-grid'></div>
                        <div className="notes-container group-container">
                            <div className='group-container-title'>
                                <span className='title'>Notes for the client</span>
                                <span className='sub-title'>Add a note for clients. This will always be visible.</span>
                            </div>
                            <div className='group'>
                                <div className='check-container'>
                                    <div className='form-check form-switch'>
                                        <input className="form-check-input" id='enable-online-sales' type="checkbox" checked={enableNote} onChange={e => setEnableNode(e.target.checked)}/>
                                        <span className='check-content'>Enable notes for clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className='voucher-whole-container'>
                        <div className='whole-header'>
                            <span>Voucher preview</span>
                        </div>
                        <div className='voucher-sub-container'>
                            <div className='sub-header'>
                                <span id='sub1'>Voucher email subject:</span><span id='sub2'>Voucher from Ninja</span>
                            </div>
                            <div className='voucher-container'>
                                <div className='voucher-ticket'>
                                    <div className='header'>
                                        <div className='voucher-logo'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81"><g fill="none" fillRule="evenodd"><path d="M0 0h81v81H0z"></path><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M37.0488 56.2195v-9.3658h6.2439v9.3658"></path><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M27.683 42.9512v13.2683h24.9755V42.9512M57.3415 34.3659c-.0631 2.6473-2.2588 4.743-4.9062 4.6829a4.9647 4.9647 0 01-4.0882-2.0964 5.0341 5.0341 0 01-8.1764 0 5.0341 5.0341 0 01-8.1764 0 4.9647 4.9647 0 01-4.0882 2.0964c-2.6473.0602-4.843-2.0356-4.9061-4.683L29.2439 25h21.8537l6.2439 9.3659z"></path></g></svg>
                                        </div>
                                        <span className='voucher-title'>Ninja</span>
                                        <span className='voucher-content'>Your location address will appear here</span>
                                    </div>
                                    <div className='body'>
                                        <div className='left-square'></div>
                                        <span className='body-title'>Voucher value</span>
                                        <span className='body-content'>RUB 0.00</span>
                                        <div className='right-square'></div>
                                    </div>
                                    <div className='footer'>
                                        <span className='voucher-code'>Voucher code: XXXXXX</span>
                                        <button className='action-book'>Book now</button>
                                        <span>Redeem on all services</span>
                                        <span>Valid for 6 months</span>
                                        <span>For multiple-use until redeemed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
            </div>
        </div>
    )
}

export default CreateVoucherPage;