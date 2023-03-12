import React from 'react';
import { Link } from 'react-router-dom';
import './accountsetting.scss';

const AccountSettingPage = () => {

    return (
        <div className='account-settings-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Business details</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save'>Save</button>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Business info</span>
                            <span className='sub-title'>Your business name is displayed across many areas including on your online booking profile, sales receipts and messages to clients</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Business name</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" value='Ninja' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='toastr-container default'>
                                    <span>Your country is set to <b>Russian Federation</b> with <b>RUB</b> currency. To change these settings, please
                                        <br /><Link to='https://fresha.com'>contact our support team</Link>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Time and calendar settings</span>
                            <span className='sub-title'>Choose the time zone and format which suit your business. Daylight savings changes will automatically apply based on your selected time zone</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Time zone</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>(GMT +03:00) Kuwait</option>
                                        <option>(GMT +03:00) Qatar</option>
                                        <option>(GMT +03:00) Moscow</option>
                                        <option>(GMT +03:00) Vlogorad</option>
                                        <option>(GMT +03:00) Kirov</option>
                                        <option>(GMT +03:00) Istanbul</option>
                                        <option>(GMT +03:00) Riyadh</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Time format</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>12 hours (e.g. 9:00pm)</option>
                                        <option>24 hours (e.g. 21:00)</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Week start</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Appointment color source</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>Team member</option>
                                        <option>Service group</option>
                                        <option>Status</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Language settings</span>
                            <span className='sub-title'>Choose the default language for appointment notification messages sent to your clients. Per-client language preferences can also be set within the settings for each client.</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Client notification language</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>🇧🇬 Bulgarian (български)</option>
                                        <option>🇨🇿 Czech (čeština)</option>
                                        <option>🇩🇰 Danish (dansk)</option>
                                        <option>🇩🇪 German (Deutsch)</option>
                                        <option>🇬🇷 Greek (Ελληνικά)</option>
                                        <option>🇬🇧 English (English)</option>
                                        <option>🇪🇸 Spanish (español)</option>
                                        <option>🇫🇮 Finnish (suomi)</option>
                                        <option>🇫🇷 French (français)</option>
                                        <option>🇭🇷 Croatian (hrvatski)</option>
                                        <option>🇭🇺 Hungarian (magyar)</option>
                                        <option>🇮🇹 Italian (italiano)</option>
                                        <option>🇳🇴 Norwegian Bokmål (norsk bokmål)</option>
                                        <option>🇳🇱 Dutch (Nederlands)</option>
                                        <option>🇵🇱 Polish (polski)</option>
                                        <option>🇧🇷 Brazilian Portuguese (português (Brasil))</option>
                                        <option>🇷🇴 Romanian (română)</option>
                                        <option>🇸🇪 Swedish (svenska)</option>
                                        <option>🇷🇺 Russian (русский)</option>
                                        <option>🇺🇦 Ukrainian (українська)</option>
                                        <option>🇸🇮 Slovenian (slovenščina)</option>
                                        <option>🇱🇹 Lithuanian (lietuvių)</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Default language for your team</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>🇧🇬 Bulgarian (български)</option>
                                        <option>🇨🇿 Czech (čeština)</option>
                                        <option>🇩🇰 Danish (dansk)</option>
                                        <option>🇩🇪 German (Deutsch)</option>
                                        <option>🇬🇷 Greek (Ελληνικά)</option>
                                        <option>🇬🇧 English (English)</option>
                                        <option>🇪🇸 Spanish (español)</option>
                                        <option>🇫🇮 Finnish (suomi)</option>
                                        <option>🇫🇷 French (français)</option>
                                        <option>🇭🇷 Croatian (hrvatski)</option>
                                        <option>🇭🇺 Hungarian (magyar)</option>
                                        <option>🇮🇹 Italian (italiano)</option>
                                        <option>🇳🇴 Norwegian Bokmål (norsk bokmål)</option>
                                        <option>🇳🇱 Dutch (Nederlands)</option>
                                        <option>🇵🇱 Polish (polski)</option>
                                        <option>🇧🇷 Brazilian Portuguese (português (Brasil))</option>
                                        <option>🇷🇴 Romanian (română)</option>
                                        <option>🇸🇪 Swedish (svenska)</option>
                                        <option>🇷🇺 Russian (русский)</option>
                                        <option>🇺🇦 Ukrainian (українська)</option>
                                        <option>🇸🇮 Slovenian (slovenščina)</option>
                                        <option>🇱🇹 Lithuanian (lietuvių)</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Appointment color source</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <select>
                                        <option>Team member</option>
                                        <option>Service group</option>
                                        <option>Status</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='toastr-container default'>
                                    <span>New team members will see Fresha in this language but they can override this in their personal user settings.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='title-side'>
                            <span className='main-title'>Online links</span>
                            <span className='sub-title'>Add your company website and social media links for sharing with clients</span>
                        </div>
                        <div className='detail-side'>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Website</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" value='https://ninjacoolers.xyz' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Facebook page</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" placeholder='www.facebook.com/ninjacoolers' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='group-title'>
                                    <span className='group-main-title'>Instagram page</span>
                                    <span className='group-sub-title'></span>
                                </div>
                                <div className='input-container'>
                                    <input type="text" placeholder='www.instagram.com/ninjacoolers' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettingPage;