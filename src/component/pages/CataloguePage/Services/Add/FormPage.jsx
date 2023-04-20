import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORY_TYPE_SERVICE, priceTypeByIndex, SERVICE_TARGET, timesByIndex } from '../../../../../config';
import { createPost, getPosts } from '../../../../../services/PostsService';
import { getLogo } from '../../../../../utils';
import '../services.scss';

const AddFormPage = () => {

    const [employees, setEmployees] = useState([])
    const [name, setName] = useState("");
    const [enableSelectAllTeam, setEnableSelectAllTeam] = useState(true);
    const [treatmentId, setTreatmentId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [description, setDescription] = useState("");
    const [aftercareDescription, setAftercareDescription] = useState("");
    const [target, setTarget] = useState(0);
    const [enableOnline, setEnableOnline] = useState(true);
    const [enableCommission, setEnableCommission] = useState(false);
    const [enableExtraTime, setEnableExtraTime] = useState(false);
    const [extraTime, setExtraTime] = useState({});
    const [memberIds, setMemberIds] = useState([]);
    const [priceAndDurations, setPriceAndDurations] = useState([{}]);
    const [taxId, setTaxId] = useState(0);
    const [enableVoucherSales, setEnableVoucherSales] = useState(false);
    const [voucherExpirePeriod, setVoucherExpirePeriod] = useState(0);
    const [categories, setCategores] = useState([]);
    const [treatments, setTreatments] = useState([]);
    const [taxes, setTaxes] = useState([])
    const selectedCategoryType = useSelector(s => s.globals.selectedCategoryType);

    useEffect(() => {
        if(selectedCategoryType > 0)  {
            setCategoryId(selectedCategoryType);
        }
    }, [])

    useEffect(() => {
        if (enableSelectAllTeam) {
            setMemberIds(employees?.map(item => item._id));
        }
    }, [enableSelectAllTeam])

    useEffect(() => {
        getPosts(`/api/category?type=${CATEGORY_TYPE_SERVICE}`)
            .then(res => {
                setCategores(res.data.data)
            })

        getPosts(`/api/treatment`)
            .then(res => {
                setTreatments(res.data.data)
            })

        getPosts(`/api/tax`)
            .then(res => {
                setTaxes(res.data.data)
            })
        getPosts(`/api/user/member`)
            .then(res => {
                setEmployees(res.data.data);
            })
    }, [])

    const navigate = useNavigate();

    const submitHandler = () => {

        const service = {
            name,
            treatmentId,
            categoryId,
            description,
            aftercareDescription,
            target,
            memberIds,
            enableOnline,
            priceAndDurations,
            enableExtraTime,
            extraTime,
            enableCommission,
            taxId,
            enableVoucherSales,
            voucherExpirePeriod,
        }
        
        
        createPost(`/api/service`, service)
        .then(res => {
            navigate("/")
        }).catch(err => {

        })
    }

    return (
        <div className='add-form-container' id='add-form-container'>
            <div className='topbar'>
                <Link className='edit-close' to='/catalogue/services'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <button className='edit-save' onClick={submitHandler}>Save</button>
            </div>
            <div className='title'>
                <span>Add a new single service</span>
            </div>
            <div className='main-container'>
                <div className="basic-info group-container">
                    <div className='group-title'>
                        <span className='title'>Basic info</span><br />
                        <span className='sub-title'>Add a service name and choose the treatment type.</span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Service name</span>
                            <div className='input-container'>
                                <input type="text" id='first-name' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Treatment type</span>
                            <div className='input-container'>
                                <select value={treatmentId} onChange={e => setTreatmentId(e.target.value)}>
                                    {
                                        treatments?.map((item, idx) => (
                                            <option key={idx} value={item._id}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Service category</span>
                            <div className='input-container'>
                                <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                                    {
                                        categories?.map((item, key) => (
                                            <option key={key} value={item._id}>{item?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Service description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="5" placeholder='Add a short description' value={description} onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span className='group-title'>Aftercare description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="5" placeholder='Add aftercare description' value={aftercareDescription} onChange={e => setAftercareDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '0px 26px 40px' }}>
                        <div className='group'>
                            <span className='group-title'>Service available for</span>
                            <div className='input-container'>
                                <select value={target} onChange={e => setTarget(e.target.value)}>
                                    {
                                        Object.keys(SERVICE_TARGET).map((item) => (
                                            <option key={item} value={item}>{SERVICE_TARGET[item]}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="online-booking-info group-container">
                    <div className='group-title'>
                        <span className='title'>Online booking</span><br />
                        <span className='sub-title'>Enable online bookings, choose who the service is available for and add a short description.</span>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '20px 30px 30px' }}>
                        <div className='group'>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" value={enableOnline} onChange={e => setEnableOnline(e.target.checked)} />
                                <span className='check-content'>Enable online bookings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-info group-container">
                    <div className='group-title'>
                        <span className='title'>Team</span><br />
                        <span className='sub-title'>Assign team members to the service and manage commission</span>
                    </div>
                    <div className='two-group sub-container' style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                        <div className='group'>
                            <div className='check-group'>
                                <div className='form-group'>
                                    <input className="form-check-input" type="checkbox" value={enableSelectAllTeam} onChange={e => setEnableSelectAllTeam(e.target.checked)} />
                                    <span className='check-username'>Select All</span>
                                </div>
                            </div>
                            <div className='check-group'>
                                {
                                    employees?.map((item, key) => (

                                        <div key={key} className='form-group'>
                                            <input className="form-check-input" type="checkbox" checked={memberIds.includes(item._id)} onChange={e => {
                                                if (e.target.checked) {
                                                    setMemberIds([...memberIds, item._id])
                                                } else {
                                                    setMemberIds(memberIds.filter(m => m != item._id))
                                                }
                                            }} />
                                            <div className='user-avatar'>
                                                <div className='user-nickname'>{getLogo(item.firstName, item.lastName)}</div>
                                            </div>
                                            <span className='check-username'>{`${item.firstName} ${item.lastName}`}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container' style={{ padding: '20px 30px 30px' }}>
                        <div className='group'>
                            <span className='group-total-title'>Team member commission</span><br />
                            <span className='group-sub-title'>Calculate team member commission when the service is sold.</span>
                            <div className='form-check form-switch' style={{ margin: '20px 0px 0px' }}>
                                <input className="form-check-input" type="checkbox" defaultChecked value={enableCommission} onChange={e => setEnableCommission(e.target.checked)} />
                                <span className='check-content'>Enable team member commission</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-duration group-container">
                    <div className='group-title'>
                        <span className='title'>Pricing and Duration</span><br />
                        <span className='sub-title'>Add the pricing options and duration of the service.</span>
                    </div>
                    {
                        priceAndDurations?.map((item, key) => (

                            <div key={key} className='tow-group option-container'>
                                <span className='option-title'>Pricing option {key + 1}</span>
                                <div className='option-details'>
                                    <div className='two-group sub-container'>
                                        <div className='group'>
                                            <span className='group-title'>Duration</span>
                                            <div className='input-container'>
                                                <select value={item["duration"]} onChange={e => {
                                                    setPriceAndDurations(priceAndDurations.map((_item, _key) => {
                                                        if (key == _key) {
                                                            return {
                                                                ..._item,
                                                                "duration": e.target.value
                                                            }
                                                        } else {
                                                            return _item
                                                        }
                                                    }))
                                                }}>
                                                    {
                                                        Object.keys(timesByIndex)?.map((item) => (
                                                            <option key={item} value={timesByIndex[item].value}>{timesByIndex[item].label}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className='group'>
                                            <span className='group-title'>Price type</span>
                                            <div className='input-container'>
                                                <select value={item["type"]} onChange={e => {
                                                    setPriceAndDurations(priceAndDurations.map((_item, _key) => {
                                                        if (key == _key) {
                                                            return {
                                                                ..._item,
                                                                "type": e.target.value
                                                            }
                                                        } else {
                                                            return _item
                                                        }
                                                    }))
                                                }}>
                                                    {
                                                        Object.keys(priceTypeByIndex).map((key) => (
                                                            <option key={key} value={key}>{priceTypeByIndex[key]}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='two-group sub-container'>
                                        <div className='group'>
                                            <span className='group-title'>Price</span>
                                            <div className='input-container'>
                                                <input type="text" placeholder='RUB 0.00' value={item["price"]} onChange={e => {
                                                    setPriceAndDurations(priceAndDurations.map((_item, _key) => {
                                                        if (key == _key) {
                                                            return {
                                                                ..._item,
                                                                "price": e.target.value
                                                            }
                                                        } else {
                                                            return _item
                                                        }
                                                    }))
                                                }} />
                                            </div>
                                        </div>
                                        <div className='group'>
                                            <span className='group-title'>Special price</span>
                                            <div className='input-container'>
                                                <input type="text" placeholder='RUB 0.00' value={item["specialPrice"]} onChange={e => {
                                                    setPriceAndDurations(priceAndDurations.map((_item, _key) => {
                                                        if (key == _key) {
                                                            return {
                                                                ..._item,
                                                                "specialPrice": e.target.value
                                                            }
                                                        } else {
                                                            return _item
                                                        }
                                                    }))
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='option-details pricing-name-container'>
                                    <div className='two-group sub-container'>
                                        <div className='group'>
                                            <span className='group-title'>Pricing name</span>
                                            <div className='input-container'>
                                                <input type="text" placeholder='e.g. Long hair' value={item["label"]} onChange={e => {
                                                    setPriceAndDurations(priceAndDurations.map((_item, _key) => {
                                                        if (key == _key) {
                                                            return {
                                                                ..._item,
                                                                "label": e.target.value
                                                            }
                                                        } else {
                                                            return _item
                                                        }
                                                    }))
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className='advanced-options'>Advanced pricing options</span>
                            </div>
                        ))
                    }
                    <div className='two-group sub-container' style={{ padding: '15px 25px 30px' }}>
                        <div className='group'>
                            <div className='add-pricing-option' style={{ cursor: "pointer" }} onClick={() => setPriceAndDurations([...priceAndDurations, {}])}>
                                <span className='add-logo'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                </span>
                                <span className='add-content'>Add pricing option</span>
                            </div>
                        </div>
                    </div>
                    <div className='two-group sub-container extra-time-group' style={{ padding: '20px 30px 40px' }}>
                        <div className='group'>
                            <span className='group-total-title'>Extra time</span><br />
                            <span className='group-sub-title'>Enable extra time after the service.</span>
                            <div className='form-check form-switch' style={{ margin: '20px 0px 0px' }}>
                                <input className="form-check-input" type="checkbox" defaultChecked value={enableExtraTime} onChange={e => setEnableExtraTime(e.target.checked)} />
                                <span className='check-content'>Enable extra time</span>
                            </div>
                            <div className='extra-items-container'>
                                <div className={`extra-item ${extraTime?.type == 0 && "active"}`} onClick={e => { setExtraTime({ ...extraTime, "type": 0 }) }}>
                                    <span className='item-title'>Processing time</span>
                                    <span className='item-content'>Take other bookings during this time</span>
                                </div>
                                <div className={`extra-item ${extraTime?.type == 1 && "active"}`} onClick={e => { setExtraTime({ ...extraTime, "type": 1 }) }}>
                                    <span className='item-title'>Blocked time</span>
                                    <span className='item-content'>Block time between appointments</span>
                                </div>
                            </div>
                            <div className='extra-duration-container'>
                                <div className='duration-group'>
                                    <span className='duration-group-title'>Duration</span>
                                    <div className='select-duration'>
                                        <select onChange={e => {
                                            setExtraTime({ ...extraTime, time: e.target.value })
                                        }}>
                                            {
                                                Object.keys(timesByIndex).map((key) => (
                                                    <option key={key} value={timesByIndex[key].value}>{timesByIndex[key].label}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="sales-settings group-container">
                    <div className='group-title'>
                        <span className='title'>Resources</span> <br />
                        <span className='sub-title'>Enable resources required for the service.</span>

                    </div>

                    <div className='group voucher-sales-group'>
                        <div className='check-group'>
                            {
                                employees?.map((item, key) => (

                                    <div key={key} className='form-group'>
                                        <input className="form-check-input" type="checkbox" defaultChecked />
                                        <div className='user-avatar'>
                                            <div className='user-nickname'>MS</div>
                                        </div>
                                        <span className='check-username'>{`${item.firstName} ${item.lastName}`}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> */}

                <div className="sales-settings group-container">
                    <div className='group-title'>
                        <span className='title'>Pricing and Duration</span>
                    </div>
                    <div className='group'>
                        <div className='tax-container'>
                            <div className='tax-group'>
                                <span className='tax-group-title'>Tax</span>
                                <div className='select-tax'>
                                    <select value={taxId} onChange={e => setTaxId(e.target.value)}>
                                        {
                                            taxes?.map((item, key) => (
                                                <option key={key}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='group voucher-sales-group'>
                        <span className='group-total-title'>Voucher sales</span>
                        <div className='form-check form-switch'>
                            <input className="form-check-input" type="checkbox" value={enableVoucherSales} defaultChecked onChange={e => setEnableVoucherSales(e.target.checked)} />
                            <span className='check-content'>Enable voucher sales</span>
                        </div>
                        <div className='voucher-expiry-container'>
                            <div className='voucher-group'>
                                <span className='voucher-group-title'>Voucher expiry period</span>
                                <div className='select-voucher'>
                                    <select value={voucherExpirePeriod} onChange={e => setVoucherExpirePeriod(e.target.value)}>
                                        <option value={30 * 6}>Default (6 Months)</option>
                                        <option value={14 * 6}>14 Days</option>
                                        <option value={30 * 1}>1 Month</option>
                                        <option value={30 * 2}>2 Months</option>
                                        <option value={30 * 3}>3 Months</option>
                                        <option value={30 * 4}>4 Months</option>
                                        <option value={30 * 6}>6 Months</option>
                                        <option value={365}>1 Year</option>
                                        <option value={365 * 3}>3 Years</option>
                                        <option value={365 * 5}>5 Years</option>
                                        <option value={365 * 1000}>No Expiry</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFormPage;