import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './sales.scss';

const Sales = () => {

    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, []);

    return (
        <div className='sales-layout'>
            <div className='inner-siderbar'>
                <div className='item header'>Sales</div>
                {
                    <div className={`item body ${location.pathname.includes("/sales/new-sale") && 'active'}`}>
                        <Link to="/sales/new-sale">
                            New sale
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/daily-sales") && 'active'}`}>
                        <Link to="/sales/daily-sales">
                            Daily sales
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/appointments-list") && 'active'}`}>
                        <Link to="/sales/appointments-list">
                            Appointments
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/sales-list") && 'active'}`}>
                        <Link to="/sales/sales-list">
                            Sales
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/payment-transactions") && 'active'}`}>
                        <Link to="/sales/payment-transactions">
                            Payment transactions
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/vouchers") && 'active'}`}>
                        <Link to="/sales/vouchers">
                            Vouchers sold
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/paid-plans") && 'active'}`}>
                        <Link to="/sales/paid-plans">
                            Memberships sold
                        </Link>
                    </div>
                }
                <div className='action'><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path d="M71 48.3C45.9 70.3 44.5 71.7 44.5 75c0 3.3 1.3 4.7 26 26.3 14.3 12.5 27 23 28.2 23.4 3.2.7 5.1-.2 6.5-3.2.8-1.7.8-3.4.2-4.9-.5-1.4-10.8-11-22.9-21.6-12.1-10.5-22-19.5-22-20 0-.4 9.9-9.5 22-20 12.1-10.6 22.3-19.8 22.7-20.4 2.6-3.8-.8-9.6-5.7-9.6-1.2 0-12.6 9.4-28.5 23.3z"></path></svg></div>
            </div>
            <div className='inner-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default Sales;
