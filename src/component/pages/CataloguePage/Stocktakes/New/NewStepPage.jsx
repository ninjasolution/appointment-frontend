import React from 'react';
import { Link } from 'react-router-dom';
import './newstep.scss';

const NewStepPage = () => {
    return (
        <div className='stocktake-new-container' id='stocktake-new-container'>
            <div className='topbar'>
                <div className='topbar-close'>
                    <Link className='action-close' to='/catalogue/stocktakes'>
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                    </Link>
                </div>
                <Link className='action-save' to='/catalogue/stocktakes/count'>Start stocktake</Link>
            </div>
            <div className='main-container'>
                <div className='details-title'>
                    <span className='small-title'>Create a new stocktake</span>
                    <span className='main-title'>Add the stocktake info</span>
                    <span className='title-content'>Start a full inventory count to keep accurate stock levels. <Link to='https://support.fresha.com/hc/en-us/articles/360021691299'> Learn more</Link></span>
                </div>
                <div className='details-group'>
                    <div className="stocktake-info group-container">
                        <div className='group-container-title'>
                            <span className='title'>Stocktake info</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Stocktake name (Optional)</span>
                            <div className='input-container'>
                                <input type="text" id='first-name' />
                            </div>
                            <span className='group-hint'>This field is required</span>
                        </div>
                        <div className='group'>
                            <span className='group-title'>Stocktake description (Optional)</span>
                            <div className='input-container'>
                                <textarea cols="30" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStepPage;