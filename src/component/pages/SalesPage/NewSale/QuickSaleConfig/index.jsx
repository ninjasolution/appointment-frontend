import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const QuickSaleConfig = () => {

    const [productName, setProductName] = useState()
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
                <br />
                <p>Search for sellable items to add to your quick sale layout. Drag and drop to rearrange.</p>
            </div>
            <div className='main-container'>
                <div className="basic-info group-container">
                    <div className='group-title'>
                        <span id='title'>Basic info</span>
                    </div>
                    <div className='two-group sub-container'>
                        <div className='group'>
                            <span id='group-title'>First name</span>
                            <div className='input-container'>
                                <input type="text" id='first-name' placeholder="Enter client's first name" value={productName} onChange={e => setProductName(e.target.value)} />
                            </div>
                            <span className='group-hint'>This field is required</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickSaleConfig;
