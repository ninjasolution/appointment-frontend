import React from 'react';
import { Link } from 'react-router-dom';
import './forms.scss';

const FormsPage = () => {
    return (
        <div className='forms-container'>
            <div className='details'>
                <div className='content-container'>
                    <span id='content-title'>Go paperless with online forms for clients</span>
                    <span id='content-sub-title'>Automatically get clients sharing important info ahead of their visit:</span>
                    <div className='content-items'>
                        <span className='item'>✔ Build your own forms or use our ready-made templates</span>
                        <span className='item'>✔ Tight integration with your client profiles and appointments</span>
                        <span className='item'>✔ Automatically request clients to fill forms ahead of their visit</span>
                    </div>
                    <span id='learn-more-title'>Free unlimited use</span>
                    <div className='link-container'>
                        <Link id='start-now' to='/clients/forms/form-list'>
                            <span>Start now</span>
                        </Link>
                        <Link id='learn-more' to='https://support.fresha.com/hc/en-us/articles/4402043117074-How-do-I-manage-client-reviews' target='_blank'>
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className='image-container'></div>
            </div>
        </div>
    )
}

export default FormsPage;