import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import EmptyLayout from '../layout/EmptyLayout';

import Dashboard from '../component/pages/DashboardPage/Dashboard';

import Calendar from '../component/pages/calendar/Calendar';

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
import AddClient from '../component/pages/ClientsPage/ClientsList/AddClient';
import ReviewsPage from '../component/pages/ClientsPage/Reviews/ReviewsPage';
import AutomatedMessagesPage from '../component/pages/ClientsPage/AutomatedMessages/AutomatedMessagesPage';
import ConfigRulesPage from '../component/pages/ClientsPage/AutomatedMessages/Config/Rules/ConfigRulesPage';
import ConfigChannelsPage from '../component/pages/ClientsPage/AutomatedMessages/Config/Channels/ConfigChannelsPage';
import ConfigDonePage from '../component/pages/ClientsPage/AutomatedMessages/Config/Done/ConfigDonePage';
import FormsPage from '../component/pages/ClientsPage/Forms/FormsPage';
import FormsList from '../component/pages/ClientsPage/Forms/FormsList';
import NotificationsPage from '../component/pages/ClientsPage/Notifications/NotificationsPage';

import Catalogue from '../component/pages/CataloguePage/Catalogue';
import ServicesPage from '../component/pages/CataloguePage/Services/ServicesPage';
import AppointmentTypePage from '../component/pages/CataloguePage/Services/NewItem/AppointmentTypePage';
import AddFormPage from '../component/pages/CataloguePage/Services/Add/FormPage';
import EditFormPage from '../component/pages/CataloguePage/Services/Edit/FormPage';
import CatalogueVouchers from '../component/pages/CataloguePage/Vouchers/VouchersPage';
import CreateVoucherPage from '../component/pages/CataloguePage/Vouchers/CreateVoucher/CreateVoucherPage';
import CatalogueMemberships from '../component/pages/CataloguePage/Memberships/MembershipsPage';
import CreateMembershipPage from '../component/pages/CataloguePage/Memberships/CreateMembership/CreateMembershipPage';
import CatalogueProducts from '../component/pages/CataloguePage/Products/ProductsPage';
import ProductAddPage from '../component/pages/CataloguePage/Products/ProductAdd/ProductAddPage';
import StocktakesPage from '../component/pages/CataloguePage/Stocktakes/StocktakesPage';
import NewStepPage from '../component/pages/CataloguePage/Stocktakes/New/NewStepPage';
import CountStepPage from '../component/pages/CataloguePage/Stocktakes/Count/CountStepPage';
import ReviewStepPage from '../component/pages/CataloguePage/Stocktakes/Review/ReviewStepPage';
import SummaryDetailPage from '../component/pages/CataloguePage/Stocktakes/Summary/SummaryDetailPage';
import StockOrders from '../component/pages/CataloguePage/Orders/OrdersPage';
import SuppliersPage from '../component/pages/CataloguePage/Suppliers/SuppliersPage';
import SupplierNewPage from '../component/pages/CataloguePage/Suppliers/New/SupplierNewPage';

import Reports from '../component/pages/ReportsPage/Reports';
import DashboardPage from '../component/pages/ReportsPage/Dashboard/DashboardPage';
import ReportsPage from '../component/pages/ReportsPage/Reports/ReportsPage';
import TempPage from '../component/pages/ReportsPage/Reports/Temp/TempPage';

import Settings from '../component/pages/SettingsPage/Settings';
import SettingsDashboard from '../component/pages/SettingsPage/SettingsDashboard/SettingsDashboard';
import AccountSettingPage from '../component/pages/SettingsPage/AccountSetting/AccountSettingPage';
import LocationsPage from '../component/pages/SettingsPage/Locations/LocationsPage';
import OnlineBookingPage from '../component/pages/SettingsPage/OnlineBooking/OnlineBookingPage';
import ResourcesPage from '../component/pages/SettingsPage/Resources/ResourcesPage';
import ClosedPeriodsPage from '../component/pages/SettingsPage/ClosedPeriod/ClosedPeriodsPage';
import ServicesSettingPage from '../component/pages/SettingsPage/ServicesSetting/ServicesSettingPage';
import ReferralSourcesPage from '../component/pages/SettingsPage/ReferralSources/ReferralSourcesPage';
import CancellationReasonsPage from '../component/pages/SettingsPage/CancellationReasons/CancellationReasonsPage';
import InvoiceSequencingPage from '../component/pages/SettingsPage/InvoiceSequencing/InvoiceSequencingPage';
import InvoicesPage from '../component/pages/SettingsPage/Invoices/InvoicesPage';
import TaxesPage from '../component/pages/SettingsPage/Taxes/TaxesPage';
import ServiceChargesPage from '../component/pages/SettingsPage/ServiceCharges/ServiceChargesPage';
import TipsSettingsPage from '../component/pages/SettingsPage/TipsSettings/TipsSettingsPage';
import PaymentTypesPage from '../component/pages/SettingsPage/PaymentTypes/PaymentTypesPage';
import TeamMembersPage from '../component/pages/SettingsPage/TeamMembers/TeamMembersPage';
import WorkingHoursPage from '../component/pages/SettingsPage/WorkingHours/WorkingHoursPage';
import PermissionsPage from '../component/pages/SettingsPage/Permissions/PermissionsPage';
import CommissionsSettingsPage from '../component/pages/SettingsPage/CommissionsSettings/CommissionsSettingsPage';

import Users from '../component/pages/UsersPage/UsersPage';
import SignInPage from '../component/pages/UsersPage/SignIn/SignInPage';
import PasswordPage from '../component/pages/UsersPage/SignIn/Password/PasswordPage';
import ForgotPasswordPage from '../component/pages/UsersPage/ForgotPassword/ForgotPasswordPage';
import SignUpPage from '../component/pages/UsersPage/SignUp/SignUpPage';
import MobileVerificationPage from '../component/pages/UsersPage/MobileVerification/MobileVerificationPage';
import VerifyCodePage from '../component/pages/UsersPage/MobileVerification/VerifyCode/VerifyCodePage';

import OnBoarding from '../component/pages/Onboarding/OnBoarding';
import BusinessNamePage from '../component/pages/Onboarding/BusinessName/BusinessNamePage';
import PartnerServiceTypesPage from '../component/pages/Onboarding/ServiceTypes/PartnerServiceTypesPage';
import TeamSizePage from '../component/pages/Onboarding/TeamSize/TeamSizePage';
import LocationAddressPage from '../component/pages/Onboarding/LocationAddress/LocationAddressPage';
import PreviousSoftwarePage from '../component/pages/Onboarding/PreviousSoftware/PreviousSoftwarePage';
import RecommendationSourcePage from '../component/pages/Onboarding/RecommendationSource/RecommendationSourcePage';
import AddEmpoyee from '../component/pages/SettingsPage/AddEmployee';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/' element={<Dashboard />} />
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
                        <Route path='/sales/daily-sales' element={<DailySalesPage />} />
                        <Route path='/sales/appointments-list' element={<AppointmentsPage />} />
                        <Route path='/sales/sales-list' element={<SalesPage />} />
                        <Route path='/sales/payment-transactions' element={<PaymentTransactionsPage />} />
                        <Route path='/sales/vouchers' element={<VouchersPage />} />
                        <Route path='/sales/paid-plans' element={<MembershipsPage />} />
                    </Route>

                    <Route element={<Clients />}>
                        <Route path='/clients/list' element={<ClientsListPage />}>
                            <Route path='appointments' element={<Appointments />} />
                            <Route path='products' element={<Products />} />
                            <Route path='services' element={<Services />} />
                            <Route path='memberships' element={<Memberships />} />
                            <Route path='vouchers' element={<Vouchers />} />
                        </Route>
                        <Route path='/clients/reviews' element={<ReviewsPage />} />
                        <Route path='/clients/automated-messages' element={<AutomatedMessagesPage />} />
                        <Route path='/clients/forms' element={<FormsPage />} />
                        <Route path='/clients/forms/form-list' element={<FormsList />} />
                        <Route path='/clients/notifications' element={<NotificationsPage />} />
                    </Route>

                    <Route element={<Catalogue />}>
                        <Route path='/catalogue/services' element={<ServicesPage />} />
                        <Route path='/catalogue/vouchers' element={<CatalogueVouchers />} />
                        <Route path='/catalogue/memberships' element={<CatalogueMemberships />} />
                        <Route path='/catalogue/products' element={<CatalogueProducts />} />
                        <Route path='/catalogue/stocktakes' element={<StocktakesPage />} />
                        <Route path='/catalogue/stocktakes/summary' element={<SummaryDetailPage />} />
                        <Route path='/catalogue/orders' element={<StockOrders />} />
                        <Route path='/catalogue/suppliers' element={<SuppliersPage />} />
                    </Route>

                    <Route element={<Reports />}>
                        <Route path='/analytics/dashboard' element={<DashboardPage />} />
                        <Route path='/analytics/list' element={<ReportsPage />} />
                        <Route path='/analytics/list/temp' element={<TempPage />} />
                    </Route>

                    <Route element={<Settings />}>
                        <Route path='/setup' element={<SettingsDashboard />} />
                        <Route path='/setup/account-settings' element={<AccountSettingPage />} />
                        <Route path='/setup/locations' element={<LocationsPage />} />
                        <Route path='/setup/online-booking/settings' element={<OnlineBookingPage />} />
                        <Route path='/setup/resources' element={<ResourcesPage />} />
                        <Route path='/setup/closed-dates' element={<ClosedPeriodsPage />} />
                        <Route path='/setup/services-settings' element={<ServicesSettingPage />} />
                        <Route path='/setup/referral-sources' element={<ReferralSourcesPage />} />
                        <Route path='/setup/cancellation-reasons' element={<CancellationReasonsPage />} />
                        <Route path='/setup/invoice-sequencing' element={<InvoiceSequencingPage />} />
                        <Route path='/setup/invoices' element={<InvoicesPage />} />
                        <Route path='/setup/taxes' element={<TaxesPage />} />
                        <Route path='/setup/service-charges' element={<ServiceChargesPage />} />
                        <Route path='/setup/tips-settings' element={<TipsSettingsPage />} />
                        <Route path='/setup/payment-types' element={<PaymentTypesPage />} />
                        <Route path='/setup/employees' element={<TeamMembersPage />} />
                        <Route path='/setup/schedule' element={<WorkingHoursPage />} />
                        <Route path='/setup/permissions' element={<PermissionsPage />} />
                        <Route path='/setup/commissions-settings' element={<CommissionsSettingsPage />} />
                    </Route>
                </Route>

                <Route element={<Users />}>
                    <Route path='/users/sign-in' element={<SignInPage />} />
                    <Route path='/users/sign-in/password' element={<PasswordPage />} />
                    <Route path='/users/forgot-password' element={<ForgotPasswordPage />} />
                    <Route path='/users/sign-up' element={<SignUpPage />} />
                    <Route path='/mobile-verification' element={<MobileVerificationPage />} />
                    <Route path='/mobile-verification/code' element={<VerifyCodePage />} />
                </Route>

                <Route element={<OnBoarding />}>
                    <Route path='/onboarding/partner_business_name' element={<BusinessNamePage />} />
                    <Route path='/onboarding/partner_service_types' element={<PartnerServiceTypesPage />} />
                    <Route path='/onboarding/partner_team_size' element={<TeamSizePage />} />
                    <Route path='/onboarding/partner_location_address' element={<LocationAddressPage />} />
                    <Route path='/onboarding/partner_previous_software' element={<PreviousSoftwarePage />} />
                    <Route path='/onboarding/partner_recommendation_source' element={<RecommendationSourcePage />} />
                </Route>

                <Route element={<EmptyLayout />}>
                    <Route path='/clients/list/add' element={<AddClient />} />
                    <Route path='/employee/add' element={<AddEmpoyee />} />
                    <Route path='/clients/automated-messages/configure/rules' element={<ConfigRulesPage />} />
                    <Route path='/clients/automated-messages/configure/channels' element={<ConfigChannelsPage />} />
                    <Route path='/clients/automated-messages/configure/done' element={<ConfigDonePage />} />
                    <Route path='/catalogue/services/new-item/appointment-type' element={<AppointmentTypePage />} />
                    <Route path='/catalogue/services/add/form' element={<AddFormPage />} />
                    <Route path='/catalogue/services/edit/form' element={<EditFormPage />} />
                    <Route path='/catalogue/vouchers/new/create-voucher' element={<CreateVoucherPage />} />
                    <Route path='/catalogue/memberships/add' element={<CreateMembershipPage />} />
                    <Route path='/catalogue/products/product-add' element={<ProductAddPage />} />
                    <Route path='/catalogue/stocktakes/new' element={<NewStepPage />} />
                    <Route path='/catalogue/stocktakes/count' element={<CountStepPage />} />
                    <Route path='/catalogue/stocktakes/review' element={<ReviewStepPage />} />
                    <Route path='/catalogue/suppliers/new' element={<SupplierNewPage />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
