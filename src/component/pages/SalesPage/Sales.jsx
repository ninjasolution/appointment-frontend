import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './sales.scss';

const Sales = () => {

    const location = useLocation();
    const [hideState, setHideState] = useState(true);

    useEffect(() => {

        console.log(location)
    }, []);

    const hideMiniLeftBar = () => {

        hideState ? setHideState(false) : setHideState(true);

        if (document.getElementById('action-button').classList.contains('rotate-180')) {

            document.getElementById('action-button').classList.remove('rotate-180');
        } else {

            document.getElementById('action-button').classList.toggle('rotate-180');
        }
    }

    useEffect(() => {
        if (hideState) {

            document.getElementById('item-container').classList.remove('hide-leftside');
            document.getElementById('inner-container').classList.remove('w-100');
            document.getElementById('inner-container').classList.remove('set-max');

            document.getElementById('item-header').classList.remove('hide-item');
            for (let i = 1; i <= 7; i++) {
                document.getElementById(`item${i}`).classList.remove('hide-item');
            }
        } else {

            document.getElementById('item-container').classList.toggle('hide-leftside');
            document.getElementById('inner-container').classList.toggle('w-100');
            document.getElementById('inner-container').classList.toggle('set-max');

            document.getElementById('item-header').classList.toggle('hide-item');
            for (let i = 1; i <= 7; i++) {
                document.getElementById(`item${i}`).classList.toggle('hide-item');
            }
        }
    }, [hideState]);

    return (
        <div className='sales-layout'>
            <div className='inner-siderbar' id='item-container'>
                <div className='item header' id='item-header'>Sales</div>
                {
                    <div className={`item body ${location.pathname.includes("/sales/new-sale") && 'active'}`}
                        id='item1' onClick={() => { document.getElementById('item-new-sale').click() }}>
                        <Link to="/sales/new-sale/quick-sale" id='item-new-sale'>
                            New sale
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/daily-sales") && 'active'}`}
                        id='item2' onClick={() => { document.getElementById('item-daily-sales').click() }}>
                        <Link to="/sales/daily-sales" id='item-daily-sales'>
                            Daily sales
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/appointments-list") && 'active'}`}
                        id='item3' onClick={() => { document.getElementById('item-appointments').click() }}>
                        <Link to="/sales/appointments-list" id='item-appointments'>
                            Appointments
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/sales-list") && 'active'}`}
                        id='item4' onClick={() => { document.getElementById('item-sales').click() }}>
                        <Link to="/sales/sales-list" id='item-sales'>
                            Sales
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/payment-transactions") && 'active'}`}
                        id='item5' onClick={() => { document.getElementById('item-payment-transactions').click() }}>
                        <Link to="/sales/payment-transactions" id='item-payment-transactions'>
                            Payment transactions
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/vouchers") && 'active'}`}
                        id='item6' onClick={() => { document.getElementById('item-vouchers').click() }}>
                        <Link to="/sales/vouchers" id='item-vouchers'>
                            Vouchers sold
                        </Link>
                    </div>
                }
                {
                    <div className={`item body ${location.pathname.includes("/sales/paid-plans") && 'active'}`}
                        id='item7' onClick={() => { document.getElementById('item-paid-plans').click() }}>
                        <Link to="/sales/paid-plans" id='item-paid-plans'>
                            Memberships sold
                        </Link>
                    </div>
                }
                <div className='action' onClick={hideMiniLeftBar} id='action-button'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path d="M71 48.3C45.9 70.3 44.5 71.7 44.5 75c0 3.3 1.3 4.7 26 26.3 14.3 12.5 27 23 28.2 23.4 3.2.7 5.1-.2 6.5-3.2.8-1.7.8-3.4.2-4.9-.5-1.4-10.8-11-22.9-21.6-12.1-10.5-22-19.5-22-20 0-.4 9.9-9.5 22-20 12.1-10.6 22.3-19.8 22.7-20.4 2.6-3.8-.8-9.6-5.7-9.6-1.2 0-12.6 9.4-28.5 23.3z"></path></svg>
                </div>
            </div>
            <div className='inner-container' id='inner-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default Sales;