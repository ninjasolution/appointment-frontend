import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_LINK } from '../../../../../config';
import { createPost, getPosts } from '../../../../../services/PostsService';
import { generateSku } from '../../../../../utils';
import './productadd.scss';

const ProductAddPage = () => {

    const [addressModalState, setAddressModalState] = useState(false);
    const [name, setName] = useState("");
    const [barcode, setBarcode] = useState("");
    const [brand, setBrand] = useState(0);
    const [measure, setMeasure] = useState(0);
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(0);
    const [image, setImage] = useState("");
    const [supplyPrice, setSupplyPrice] = useState(0);
    const [retailPrice, setRetailPrice] = useState(0);
    const [specialPrice, setSpecialPrice] = useState(0)
    const [markupPrice, setMarkupPrice] = useState(0);
    const [enableRetailSale, setEnableRetailSale] = useState(0);
    const [enableCommission, setEnableCommission] = useState(false);
    const [enableTrackQuantity, setEnableTrackQuantity] = useState(false)
    const [brandModal, setBrandModal] = useState(false)
    const [newBrandModal, setNewBrandModal] = useState(false)
    const [tax, setTax] = useState(0);
    const [skus, setSkus] = useState([]);
    const [supplier, setSupplier] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [lowStockLevel, setLowStockLevel] = useState(0);
    const [reorderQuantity, setReorderRequntity] = useState(0);
    const [enableLowStockNotification, setEnableLowStockNotification] = useState(false)
    const [taxes, setTaxes] = useState([])
    const [brands, setBrands] = useState([]);
    const [measures, setMeasures] = useState([])
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([])
    const [brandName, setBrandName] = useState("")

    useEffect(() => {
        getPosts(`/api/tax`)
            .then(res => {
                setTaxes(res.data.data);
            })

        getPosts(`/api/measure`)
            .then(res => {
                setMeasures(res.data.data)
            })

        getPosts(`/api/category?type=product`)
            .then(res => {
                setCategories(res.data.data)
            })
        getPosts(`/api/user/supplier`)
            .then(res => {
                setSuppliers(res.data.data)
            })

    }, [])

    useEffect(() => {
        if (brandModal) {

            getPosts(`/api/brand`)
                .then(res => {
                    setBrands(res.data.data)
                })
        }
    }, [brandModal])

    const submitHandler = () => {
        const product = {
            name,
            barcode,
            brand,
            measure,
            shortDescription,
            description,
            category,
            image,
            supplier,
            supplyPrice,
            retailPrice,
            specialPrice,
            markupPrice,
            enableRetailSale,
            enableCommission,
            tax,
            skus,
            quantity,
            lowStockLevel,
            reorderQuantity,
            enableLowStockNotification
        }
        createPost(`/api/product`, product)
            .then(res => {
                console.log(res.data.data)
            })
    }

    const createHandler = () => {
        createPost(`/api/brand`, {
            name: brandName
        })
            .then(res => {
                setNewBrandModal(false)
            })
    }

    return (
        <div className='product-add-container' id='product-add-container'>
            {
                addressModalState &&
                <div className='add-address-modal'>
                    <div className='modal-header'>
                        <span className='modal-title'>New address</span>
                        <span className='modal-close' onClick={() => setAddressModalState(false)}>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='group'>
                            <span className='group-title-content'>Address name</span>
                            <div className='input-container'>
                                <input type="text" id='address-name' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className='group'>
                            <span className='group-title-content'>Address</span>
                            <div className="input-container">
                                <div className='address-container'>
                                    <span id='select-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M7 .75c3.653 0 6.75 2.79 6.75 6.75 0 1.12-.452 2.416-1.266 3.873-.507.906-1.146 1.857-1.886 2.833a40.249 40.249 0 01-3.064 3.571.75.75 0 01-1.068 0 38.437 38.437 0 01-.962-1.033 40.249 40.249 0 01-2.102-2.538c-.74-.976-1.379-1.927-1.886-2.833C.702 9.916.25 8.621.25 7.5.25 3.54 3.347.75 7 .75zm0 1.5c-2.858 0-5.25 2.155-5.25 5.25 0 .813.375 1.888 1.076 3.14.47.84 1.07 1.735 1.772 2.66A38.771 38.771 0 007 16.16l.38-.417c.69-.77 1.38-1.595 2.022-2.443.702-.925 1.303-1.82 1.772-2.66.701-1.252 1.076-2.327 1.076-3.14 0-3.095-2.392-5.25-5.25-5.25zM7 4.5a3 3 0 110 6 3 3 0 010-6zM7 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>
                                    </span>
                                </div>
                                <input type="text" id='mobile-number' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className='group'>
                            <div className="address-details">
                                <div className="items-list">
                                    <div className='item' id="address-item">
                                        <span className='item-title'>Address</span>
                                        <span className='item-add' id="add-address">+ Add</span>
                                    </div>
                                    <div className='item' id="apt-item">
                                        <span className="item-title">Apt./Suite etc</span>
                                        <span className="item-add" id='add-apt'>+ Add</span>
                                    </div>
                                    <div className='item' id="district-item">
                                        <span className="item-title">District</span>
                                        <span className="item-add" id='add-district'>+ Add</span>
                                    </div>
                                    <div className='item' id="city-item">
                                        <span className="item-title">City</span>
                                        <span className="item-add" id='add-city'>+ Add</span>
                                    </div>
                                    <div className='item' id="region-item">
                                        <span className="item-title">Region</span>
                                        <span className="item-add" id='add-region'>+ Add</span>
                                    </div>
                                    <div className='item' id="postcode-item">
                                        <span className="item-title">Postcode</span>
                                        <span className="item-add" id='add-postcode'>+ Add</span>
                                    </div>
                                    <div className='item' id="country-item">
                                        <span className="item-title">Country</span>
                                        <span className="item-add" id='add-country'>+ Add</span>
                                    </div>
                                </div>
                                <div className="actions-list">
                                    <span id="action-edit">Edit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <div className='actions-container'>
                            <button className='modal-button modal-close' onClick={() => setAddressModalState(false)}>Cancel</button>
                            <button className='modal-button modal-continue'>Continue</button>
                        </div>
                    </div>
                </div>
            }

            {
                brandModal &&
                <div className='brand-list-modal'>
                    <div className='modal-header'>
                        <span className='modal-title'>Select Brand</span>
                        <span className='modal-close' onClick={() => setBrandModal(false)}>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="Search services" value={brandName} onChange={e => setBrandName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='group sub-container' style={{ cursor: "pointer" }}>
                            <div style={{ margin: "10px 0", alignItems: "center", display: "flex" }} onClick={e => { setNewBrandModal(true); setBrandModal(false) }}>
                                <span className='logo m-2'>
                                    <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                </span>
                                <span style={{ fontSize: "16px", color: "#037aff" }}>Add new brand</span>

                            </div>

                            <div className="list-group">
                                {
                                    brands?.map((item, key) => (
                                        <div key={key}>

                                            <div className='list-item'>
                                                <div className='check-container'>
                                                    <div className='item-detail' onClick={() => { setBrand(item._id); setBrandModal(false) }}>
                                                        <span className='item-name'>{item.name}</span>
                                                    </div>
                                                </div>

                                            </div>
                                            {
                                                key !== brands.length - 1 &&
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
                            <button className='modal-button modal-close' onClick={() => setBrandModal(false)}>Cancel</button>
                            <button className='modal-button modal-continue' onClick={() => setBrandModal(false)}>Continue</button>
                        </div>
                    </div>
                </div>
            }

            {
                newBrandModal &&
                <div className='brand-list-modal'>
                    <div className='modal-header'>
                        <span className='modal-title'>Add a brand</span>
                        <span className='modal-close' onClick={() => setNewBrandModal(false)}>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Brand name</span>
                                <div className='input-container'>
                                    <input type="text" id='first-name' placeholder="e.g. Fresha" value={brandName} onChange={e => setBrandName(e.target.value)} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='modal-footer'>
                        <div className='actions-container'>
                            <button className='modal-button modal-close' onClick={() => setNewBrandModal(false)}>Cancel</button>
                            <button className='modal-button modal-continue' onClick={createHandler}>Create</button>
                        </div>
                    </div>
                </div>
            }
            <div className='topbar'>
                <Link className='edit-close' to='/clients/list'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <span className='edit-title'>Add new product</span>
                <button className='edit-save' onClick={submitHandler}>Save</button>
            </div>
            <div className='total-title'>
                <span>Add new product</span>
            </div>
            <div className='main-container'>
                <div className="left-side">
                    <div className="basic-info group-container">
                        <div className='group-title'>
                            <span className='title'>Basic info</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product name</span>
                            <div className='input-container'>
                                <input type="text" className='product-name' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <span className='group-hint'></span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product barcode</span>
                            <div className='input-container'>
                                <input type="text" className='last-name' placeholder="UPC, EAN, GTIN" value={barcode} onChange={e => setBarcode(e.target.value)} />
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product brand</span>
                            {
                                brand ?
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div className='group'>
                                            <div className='input-container  two-group'>
                                                <input type="text" disabled value={brands.find(b => b._id == brand)?.name} />
                                                <Link to={"#"} onClick={() => setBrandModal(true)} style={{ marginRight: "20px" }}> <span style={{ color: "#037aff", fontSize: "17px", fontWeight: "400" }}>Edit</span></Link>
                                            </div>
                                        </div>
                                        <div style={{ margin: "0px 15px", cursor: "pointer" }} onClick={e => setBrand(null)}>
                                            <svg style={{ width: "30px", height: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.035 5.37a.5.5 0 01.462.444l.002.09-.542 7.806c-.061.88-.742 1.578-1.594 1.653l-.152.007H4.79c-.87 0-1.597-.65-1.729-1.507l-.017-.153-.542-7.806a.5.5 0 01.984-.158l.014.089.542 7.806c.026.379.305.675.652.722l.096.007h6.422a.76.76 0 00.735-.628l.013-.101.542-7.806a.5.5 0 01.534-.464zM1 4.5a.5.5 0 01-.09-.992L1 3.5h3.5V1.75c0-.647.492-1.18 1.122-1.244L5.75.5h4.5c.647 0 1.18.492 1.244 1.122l.006.128V3.5H15a.5.5 0 01.09.992L15 4.5H1zm9.25-3h-4.5a.25.25 0 00-.243.193L5.5 1.75V3.5h5V1.75a.25.25 0 00-.193-.243L10.25 1.5z" fill="#DA2346"></path></svg>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <br/>
                                        <span className='link-button' onClick={() => setBrandModal(true)}>Select a brand</span>
                                    </div>
                            }


                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Measure</span>
                                <div className='input-container'>
                                    <select value={measure} onChange={e => setMeasure(e.target.value)}>
                                        {
                                            measures?.map((item, key) => (
                                                <option key={key}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Amount</span>
                                <div className='input-container'>
                                    <input type="text" className='email-address' value={quantity} onChange={e => setQuantity(e.target.value)} />
                                </div>
                                <span className='group-hint'></span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Short description</span>
                            <div className='input-container'>
                                <input type="text" className='last-name' value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product description</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="3" value={description} onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Product category</span>
                            <div className='input-container'>
                                <select value={category} onChange={e => setCategory(e.target.value)}>
                                    {
                                        categories?.map((item, key) => (
                                            <option key={key} value={item._id}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pricing group-container">
                        <div className='group-title'>
                            <span className='title'>Pricing</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Supply price</span>
                            <div className='input-container'>
                                <input type="text" placeholder='RUB 0.00' value={supplyPrice} onChange={e => setSupplyPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Retail sales</span><br />
                            <span className='group-sub-content'>Allow sales of this product at checkout.</span>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" value={enableRetailSale} onChange={e => setEnableRetailSale(e.target.checked)} />
                                <span className='check-content'>Enable retail sales</span>
                            </div>
                        </div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Retail price</span>
                                <div className='input-container'>
                                    <input type="text" id='retail-price' placeholder="RUB 0.00" value={retailPrice} onChange={e => setRetailPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Special price</span>
                                <div className='input-container'>
                                    <input type="text" id='special-price' placeholder="RUB 0.00" value={specialPrice} onChange={e => setSpecialPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Markup</span>
                                <div className='input-container'>
                                    <input type="text" id='markup' placeholder="% 0.00" value={markupPrice} onChange={e => setMarkupPrice(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Tax</span>
                            <div className='input-container'>
                                <select value={tax} onChange={e => setTax(e.target.value)}>
                                    {
                                        taxes?.map((item, key) => (
                                            <option key={key} value={item._id}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Team member commission</span><br />
                            <span className='group-sub-content'>Calculate team member commission when the product is sold.</span>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" value={enableCommission} onChange={e => setEnableCommission(e.target.value)} />
                                <span className='check-content'>Enable team member commission</span>
                            </div>
                        </div>
                    </div>
                    <div className="inventory group-container">
                        <div className='group-title'>
                            <span className='title'>Inventory</span><br />
                            <span>Manage stock levels of this product through Fresha.</span>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>SKU (Stock Keeping Unit)</span>
                            {
                                skus.map((item, key) => (

                                    <div key={key} style={{ display: "flex", alignItems: "center" }}>
                                        <div className='input-container' style={{ width: "100%" }}>
                                            <input type="text" value={item} onChange={e => setSkus(skus.map((s, idx) => idx === key ? e.target.value : s))} />
                                        </div>
                                        <div style={{ margin: "0px 15px", cursor: "pointer" }} onClick={e => setSkus(skus.filter((s, idx) => idx !== key))}>
                                            <svg style={{ width: "30px", height: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.035 5.37a.5.5 0 01.462.444l.002.09-.542 7.806c-.061.88-.742 1.578-1.594 1.653l-.152.007H4.79c-.87 0-1.597-.65-1.729-1.507l-.017-.153-.542-7.806a.5.5 0 01.984-.158l.014.089.542 7.806c.026.379.305.675.652.722l.096.007h6.422a.76.76 0 00.735-.628l.013-.101.542-7.806a.5.5 0 01.534-.464zM1 4.5a.5.5 0 01-.09-.992L1 3.5h3.5V1.75c0-.647.492-1.18 1.122-1.244L5.75.5h4.5c.647 0 1.18.492 1.244 1.122l.006.128V3.5H15a.5.5 0 01.09.992L15 4.5H1zm9.25-3h-4.5a.25.25 0 00-.243.193L5.5 1.75V3.5h5V1.75a.25.25 0 00-.193-.243L10.25 1.5z" fill="#DA2346"></path></svg>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='group sub-container' style={{ cursor: "pointer" }} onClick={e => {
                            setSkus(skus.map((item, key) => {
                                if (key == skus.length - 1) {
                                    return generateSku();
                                } else return item;
                            }))
                        }}>
                            <span className='link-button'>Generate SKU Automatically</span>
                        </div>
                        <div className='group sub-container' style={{ cursor: "pointer" }} onClick={e => setSkus([...skus, ""])}>
                            <div className='group'>
                                <span className='logo'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                                </span>
                                <span className='link-button'>Add another SKU code</span>
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Supplier</span>
                            <div className='input-container'>
                                <select value={supplier} onChange={e => setSupplier(e.target.value)}>
                                    {
                                        suppliers?.map((item, key) => (
                                            <option key={key} value={item._id}>{item?.info?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Stock quantity</span>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" value={enableTrackQuantity} onChange={e => setEnableTrackQuantity(e.target.value)} />
                                <span className='check-content'>Track stock quantity</span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <span className='group-title-content'>Current stock quantity</span>
                            <div className='input-container'>
                                <input type="text" id='retail-price' placeholder="0" value={quantity} onChange={e => setQuantity(e.target.value)} />
                            </div>
                        </div>
                        <div className='group-spliter'></div>
                        <div className='two-group sub-container'>
                            <div className='group'>
                                <span className='group-title-content'>Low stock level</span>
                                <div className='input-container'>
                                    <input type="text" id='retail-price' placeholder="0" value={lowStockLevel} onChange={e => setLowStockLevel(e.target.value)} />
                                </div>
                                <span className='group-hint'>The level to get notified to reorder</span>
                            </div>
                            <div className='group'>
                                <span className='group-title-content'>Reorder quantity</span>
                                <div className='input-container'>
                                    <input type="text" id='special-price' placeholder="0" value={reorderQuantity} onChange={e => setReorderRequntity(e.target.value)} />
                                </div>
                                <span className='group-hint'>The default amount to order</span>
                            </div>
                        </div>
                        <div className='group sub-container'>
                            <div className='form-check form-switch'>
                                <input className="form-check-input" type="checkbox" value={enableLowStockNotification} onChange={e => setEnableLowStockNotification(e.target.checked)} />
                                <span className='check-content'>Receive low stock notifications.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="product-photo">
                        <div className='container-title'>
                            <span className='title'>Product photos</span><br />
                            <span className='sub-title'>Drag and drop a photo to change the order.</span>
                        </div>
                        <div className='photo-group'>
                            <div className='select-group'>
                                {
                                    image ?
                                        <img src={image} width={300} height={300} alt="product-img" />
                                        :
                                        <div className='select-image' onClick={() => document.getElementById("product-img").click()}>
                                            <span className='container-logo'>
                                                <svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path d="M21.072 16.002a.75.75 0 01.75.75v1.842h1.842a.75.75 0 01.743.648l.007.102a.75.75 0 01-.75.75h-1.842v1.842a.75.75 0 01-.648.743l-.102.007a.75.75 0 01-.75-.75v-1.842H18.48a.75.75 0 01-.743-.648l-.007-.102a.75.75 0 01.75-.75h1.842v-1.842a.75.75 0 01.648-.743zM14.102.45a.75.75 0 01.624.334l1.621 2.43h3.285a2.593 2.593 0 012.593 2.594v7.494a.75.75 0 11-1.5 0V5.808c0-.604-.49-1.093-1.093-1.093h-3.686a.75.75 0 01-.624-.334L13.7 1.95H8.974l-1.62 2.43a.75.75 0 01-.624.335H3.043c-.604 0-1.093.49-1.093 1.093v11.98c0 .605.49 1.094 1.093 1.094h11.691a.75.75 0 110 1.5H3.044A2.593 2.593 0 01.45 17.789V5.808a2.593 2.593 0 012.593-2.593h3.285L7.948.784A.75.75 0 018.574.45zm-2.764 5.53a5.358 5.358 0 110 10.716 5.358 5.358 0 010-10.716zm0 1.5a3.858 3.858 0 100 7.716 3.858 3.858 0 000-7.716zM4.08 5.808a1.037 1.037 0 110 2.074 1.037 1.037 0 010-2.074z" fill="#037AFF" fillRule="evenodd"></path></svg>
                                            </span>
                                            <input accept="image/*" type={"file"} style={{ display: "none" }} id="product-img" onChange={e => {
                                                const avatar = new FormData();
                                                avatar.append("file", e.target.files[0]);
                                                createPost(`/api/file/avatar`, avatar)
                                                    .then(res => {
                                                        setImage(`${BACKEND_LINK}/api/file/avatar/${res.data.fileName}`)
                                                    })
                                            }} />
                                            <span className='container-content'>Add a photo</span>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAddPage;