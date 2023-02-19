import React from 'react';
import './memberships.scss';

const MembershipsPage = () => {
    return (
        <div className='memberships-container'>
            <div className='detail-container'>
                <div className='content-container'>
                    <div className='content-detail'>
                        <div className='content-title'>Memberships sold</div>
                        <span className='content-summary'>
                            View and filter memberships purchased by your clients.
                            <a> Learn more</a>
                        </span>
                    </div>
                    <button className='select-action'>
                        Options
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.481l6.247-7.14a1 1 0 011.506 1.318l-7 8a1 1 0 01-1.506 0l-7-8a1 1 0 111.506-1.317L12 14.482z"></path></svg>
                    </button>
                </div>
                <div className='content-details'>
                    <div className='none-content'>
                        <div className='none-logo'>
                            <img src="/assets/img/85e7cdda259c52d7eaa9.png" alt="logo" />
                        </div>
                        <h3>No memberships created yet</h3>
                        <p>Add memberships in minutes and start selling</p>
                        <p>them online and via your store</p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipsPage;
