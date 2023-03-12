import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './leftbar.scss';

function LeftBar() {

    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, [])

    return (
        <div className='leftbar-layout'>
            {
                <Link className={`leftbar-item ${(location.pathname === "/dashboard" || location.pathname === "/") && 'active'}`} to="/dashboard">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.654 3.87a2 2 0 0 1 2.69 0l10.001 9.093a2 2 0 0 1 .655 1.48V26a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.442a2 2 0 0 1 .655-1.48l9.999-9.091ZM26 14.444 16 5.35 6 14.442V26h20V14.443Z" fill="#101928"></path></svg>
                </Link>
            }
            {
                <Link className={`leftbar-item ${location.pathname.includes("/calendar") && 'active'}`} to="/calendar">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm22 0H6v20h20V6Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M22 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM10 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM4 11a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" fill="#101928"></path></svg>
                </Link>
            }
            {
                <Link className={`leftbar-item ${location.pathname.includes("/sales") && 'active'}`} to="/sales/new-sale">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.3 30.6c-.3 0-.5-.1-.8-.2-.2-.1-.5-.2-.6-.4L2.8 16.9c-.2-.2-.4-.5-.5-.8-.1-.3-.1-.7 0-1L4.3 5c.1-.4.4-.7.8-.8l10.1-2c.3-.1.7 0 1 0 .3.1.6.3.8.5l13 13.2c.2.2.3.4.4.7.1.2.2.5.2.8 0 .3-.1.5-.2.8-.1.2-.2.5-.4.7L18.7 30c-.2.2-.4.3-.7.4-.2.1-.5.2-.7.2ZM6.1 6.1l-1.9 9.4 13.1 13.1 11.3-11.3L15.5 4.2l-.2-1 .2 1-9.4 1.9Z" fill="#101928"></path><path d="M10.5 12c.8 0 1.5-.7 1.5-1.5S11.3 9 10.5 9 9 9.7 9 10.5s.7 1.5 1.5 1.5Z" fill="#101928"></path></svg>
                </Link>
            }
            {
                <Link className={`leftbar-item ${location.pathname.includes("/clients") && 'active'}`} to="/clients/list">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5ZM3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16Z" fill="#101928"></path><path d="M11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M21.698 18.133a1 1 0 0 1 .366 1.366 7.002 7.002 0 0 1-12.127 0 1 1 0 0 1 1.732-1 5.002 5.002 0 0 0 8.663 0 1 1 0 0 1 1.366-.366Z" fill="#101928"></path></svg>
                </Link>
            }
            {
                <Link className={`leftbar-item ${location.pathname.includes("/catalogue") && 'active'}`} to="/catalogue/services">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.94 4.94A1.5 1.5 0 0 1 3 4.5h6A3.75 3.75 0 0 1 12 6a3.746 3.746 0 0 1 3-1.5h6A1.5 1.5 0 0 1 22.5 6v12a1.5 1.5 0 0 1-1.5 1.5h-6a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 9 19.5H3A1.5 1.5 0 0 1 1.5 18V6c0-.398.158-.78.44-1.06Zm9.31 13.81A3.75 3.75 0 0 0 9 18H3V6h6a2.25 2.25 0 0 1 2.25 2.25v10.5Zm1.5 0A3.75 3.75 0 0 1 15 18h6V6h-6a2.25 2.25 0 0 0-2.25 2.25v10.5Z" fill="#000"></path></svg>
                </Link>
            }
            {
                <Link className={`leftbar-item ${location.pathname.includes("/analytics") && 'active'}`} to="/analytics/dashboard">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 5a1 1 0 0 1 1 1v19h23a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M26.707 7.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0L12 15.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0L16 16.586l9.293-9.293a1 1 0 0 1 1.414 0Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M20 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9h-4a1 1 0 0 1-1-1Z" fill="#101928"></path></svg>
                </Link>
            }
            {
                <Link className={`leftbar-item ${location.pathname.includes("/setup") && 'active'}`} to="/setup">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 11a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm7 5a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z" fill="#101928"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.276 2.666a1 1 0 0 0-.82.095l-2.917 1.75a11.49 11.49 0 0 0-1.077 0l-2.915-1.748a1 1 0 0 0-.818-.095 13.986 13.986 0 0 0-5.14 2.962 1 1 0 0 0-.327.757l.057 3.402a11.5 11.5 0 0 0-.537.933l-2.972 1.65a1 1 0 0 0-.492.661 13.986 13.986 0 0 0-.004 5.931 1 1 0 0 0 .492.663L5.78 21.28c.165.318.345.63.539.931l-.057 3.4a1 1 0 0 0 .327.756 13.986 13.986 0 0 0 5.134 2.97 1 1 0 0 0 .82-.095l2.918-1.75c.358.016.718.015 1.076-.002l2.915 1.75a1 1 0 0 0 .819.094 13.986 13.986 0 0 0 5.139-2.962 1 1 0 0 0 .328-.757l-.058-3.402c.194-.302.374-.613.538-.933l2.972-1.65a1 1 0 0 0 .492-.66c.425-1.955.427-3.978.004-5.932a1 1 0 0 0-.492-.663l-2.974-1.651a11.5 11.5 0 0 0-.54-.932l.058-3.399a1 1 0 0 0-.327-.757 13.986 13.986 0 0 0-5.135-2.969Zm3.454 4.156-.054 3.245a1 1 0 0 0 .174.581c.268.393.506.805.713 1.233a1 1 0 0 0 .415.44l2.84 1.576a11.988 11.988 0 0 1-.004 4.209l-2.838 1.575a1 1 0 0 0-.416.442c-.206.428-.444.84-.711 1.234a1 1 0 0 0-.173.58l.054 3.246a11.988 11.988 0 0 1-3.646 2.102l-2.784-1.67a1 1 0 0 0-.59-.14c-.474.036-.95.036-1.424.001a1 1 0 0 0-.589.14l-2.784 1.67a11.984 11.984 0 0 1-3.644-2.107l.055-3.245a1 1 0 0 0-.174-.581 9.492 9.492 0 0 1-.713-1.233 1 1 0 0 0-.416-.44l-2.839-1.576a11.986 11.986 0 0 1 .003-4.209l2.839-1.575a1 1 0 0 0 .416-.442c.205-.428.443-.84.71-1.233a1 1 0 0 0 .174-.58l-.055-3.247a11.986 11.986 0 0 1 3.647-2.102l2.783 1.67a1 1 0 0 0 .59.14 9.49 9.49 0 0 1 1.425-.001 1 1 0 0 0 .588-.14l2.785-1.67a11.987 11.987 0 0 1 3.643 2.107Z" fill="#101928"></path></svg>
                </Link>
            }
        </div>
    )
}

export default LeftBar;
