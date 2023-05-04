import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../../../../services/PostsService';
import './index.scss';

const QuickSaleConfig = () => {

    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState([{ _id: 1 }, { _id: 2 }, { _id: 3 }])
    const [resultProducts, setResultProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(0)
    const [searchGroupModal, setSearchGroupModal] = useState(true)

    useEffect(() => {
        getPosts(`/api/product?name=${productName}`)
            .then(res => {
                setResultProducts(res.data.data)
            })
    }, [productName])

    return (
        <div className='new-client-container' id='new-client-container'>
            <div className='topbar'>
                <Link id='edit-close' to='/clients/list'>
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                </Link>
                <button id='edit-save'>Save</button>
            </div>
            <div className='title'>
                <span>Your quick sale items</span>
            </div>
            <p style={{ display: "flex", justifyContent: "center" }}>Search for sellable items to add to your quick sale layout. Drag and drop to rearrange.</p>
            <div className='search-group'>
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                <input placeholder='Search by sellable items to add to quick sale' value={productName} onChange={e => setProductName(e.target.value)} />

                {
                    searchGroupModal &&
                    <div id='result-list'>
                        <div>
                            Product, RUB 333, 342 in stock
                        </div>
                        <div>
                            Product, RUB 333, 342 in stock
                        </div>
                    </div>
                }
            </div>
            <div className='main-container' style={{ margin: "30px 100px", columnCount: 4 }}>
                {
                    products?.map((item, key) => (
                        <div key={key} style={
                            {
                                width: "262px",
                                height: "135px",
                                border: "1px solid #878c98",
                                borderRadius: "8px",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                cursor: "pointer"
                            }} onClick={() => setSelectedProduct(item._id)}>
                            <span style={{ fontSize: "15px", fontWeight: "800", lineHeight: "21px" }}>Product 1</span>
                            <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "21px" }}>RUB 221</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuickSaleConfig;
