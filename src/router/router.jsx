import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';

import Dashboard from '../component/pages/DashboardPage/Dashboard';

import Sales from '../component/pages/SalesPage/Sales';

import NewSalePage from '../component/pages/SalesPage/NewSale/NewSalePage';
import QuickSale from '../component/pages/SalesPage/NewSale/QuickSale';
import Appointments from '../component/pages/SalesPage/NewSale/Appointments';
import Products from '../component/pages/SalesPage/NewSale/Products';
import Services from '../component/pages/SalesPage/NewSale/Services';
import Memberships from '../component/pages/SalesPage/NewSale/Memberships';
import Vouchers from '../component/pages/SalesPage/NewSale/Vouchers';
import DailySalesPage from '../component/pages/SalesPage/DailySales/DailySalesPage';
import AppointmentsPage from '../component/pages/SalesPage/Appointments/AppointmentsPage';
import SalesPage from '../component/pages/SalesPage/Sales/SalesPage';
import PaymentTransactionsPage from '../component/pages/SalesPage/PaymentTransactions/PaymentTransactionsPage';
import VouchersPage from '../component/pages/SalesPage/Vouchers/VouchersPage';
import MembershipsPage from '../component/pages/SalesPage/Memberships/MembershipsPage';

import Clients from '../component/pages/ClientsPage/Clients';

import ClientsListPage from '../component/pages/ClientsPage/ClientsList/ClientsListPage';
import Calendar from '../component/pages/calendar/Calendar';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/dashboard' element={<Dashboard />} />

                    <Route path='/calendar' element={<Calendar />} />

                    <Route element={<Sales />}>
                        <Route path='/sales/new-sale' element={<NewSalePage />}>
                            <Route path='/sales/new-sale/quick-sale' element={<QuickSale />} />
                            <Route path='/sales/new-sale/appointments' element={<Appointments />} />
                            <Route path='/sales/new-sale/products' element={<Products />} />
                            <Route path='/sales/new-sale/services' element={<Services />} />
                            <Route path='/sales/new-sale/memberships' element={<Memberships />} />
                            <Route path='/sales/new-sale/vouchers' element={<Vouchers />} />
                        </Route>
                        <Route path='/sales/daily-sales' element={<DailySalesPage />}></Route>
                        <Route path='/sales/appointments-list' element={<AppointmentsPage />}></Route>
                        <Route path='/sales/sales-list' element={<SalesPage />}></Route>
                        <Route path='/sales/payment-transactions' element={<PaymentTransactionsPage />}></Route>
                        <Route path='/sales/vouchers' element={<VouchersPage />}></Route>
                        <Route path='/sales/paid-plans' element={<MembershipsPage />}></Route>
                    </Route>

                    <Route element={<Clients />}>
                        <Route path='/clients/list' element={<ClientsListPage />}>
                            <Route path='/clients/list/add' element={<QuickSale />} />
                            <Route path='/clients/list/appointments' element={<Appointments />} />
                            <Route path='/clients/list/products' element={<Products />} />
                            <Route path='/clients/list/services' element={<Services />} />
                            <Route path='/clients/list/memberships' element={<Memberships />} />
                            <Route path='/clients/list/vouchers' element={<Vouchers />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
