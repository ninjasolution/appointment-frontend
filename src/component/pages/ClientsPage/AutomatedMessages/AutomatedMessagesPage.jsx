import React from 'react';
import './automatedmessages.scss';
import { Link } from 'react-router-dom';

const AutomatedMessagesPage = () => {
    return (
        <div className='automated-messages-container'>
            <div className='content-container'>
                <div className='content-title'>Clients list</div>
                <span className='content-summary'>
                    View and manage all automated messages sent to your clients.
                    <a> Learn more</a>
                </span>
            </div>
            <div className='upcoming-appointments-container'>
                <div className='content-title'>Remind clients about upcoming appointments</div>
                <div className='alarm-container'>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="#037aff" height="30" viewBox="0 0 32 32" width="30" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m8.02537 14 .00001-.9677c.00085-.0119.00211-.0284.00387-.0492.00463-.0548.01272-.1395.02605-.2499.02669-.2212.07421-.5433.15649-.9326.1655-.7828.4668-1.81335 1.00599-2.83303 1.05542-1.99591 3.01282-3.96604 6.84702-3.96733 4.3787.03459 7.9108 3.68172 7.9108 8.11276v.887c0 4.618.9671 7.3967 1.897 8.9971l.0017.0029h-19.74857l.00169-.0029c.93038-1.6005 1.89795-4.3793 1.89795-8.9971zm8.04313-10.99976c-4.7319 0-7.29506 2.52912-8.61876 5.03243-.65054 1.23026-1.00343 2.44963-1.19469 3.35423-.09609.4545-.1526.8355-.18533 1.1065-.01639.1357-.02686.2443-.03337.3213-.00326.0386-.00552.0693-.00704.0915l-.00174.0271-.00051.0087-.00017.0031-.00007.0012c-.00003.0005-.00005.001.99856.0537l-.99861-.0527c-.00093.0176-.00139.0351-.00139.0527l-.00001 1c0 4.3342-.90602 6.7511-1.62635 7.9908-.17713.303-.27141.6473-.27335.9983-.00194.3517.08891.6977.26338 1.0031.17448.3054.42641.5594.73038.7363s.64923.2706 1.00095.2715h.00257 4.87705c0 1.3261.5268 2.5979 1.4645 3.5355.9376.9377 2.2094 1.4645 3.5355 1.4645s2.5979-.5268 3.5355-1.4645c.9377-.9376 1.4645-2.2094 1.4645-3.5355h4.877.0026c.3517-.0009.6969-.0945 1.0008-.2714.304-.1769.5559-.4309.7304-.7362s.2654-.6513.2635-1.003c-.0019-.351-.0961-.6953-.2732-.9983-.7199-1.2397-1.6255-3.6567-1.6255-7.9911v-.887c0-5.49289-4.3827-10.07171-9.8996-10.11273v-.00003zm11.5326 18.99086c-.0003-.0006-.0007-.0012-.001-.0018l-.8629.5055.8647-.5024c-.0003-.0004-.0005-.0009-.0008-.0013zm-8.6011 3.0089h-6c0 .7956.3161 1.5587.8787 2.1213s1.3257.8787 2.1213.8787 1.5587-.3161 2.1213-.8787.8787-1.3257.8787-2.1213z" fill="#037aff" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>72 hour reminder</span>
                        <span className='alarm-content'>Notifies clients reminding them of their upcoming appointment.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state disable'>APP</span>
                        </div>
                    </div>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="#037aff" height="30" viewBox="0 0 32 32" width="30" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m8.02537 14 .00001-.9677c.00085-.0119.00211-.0284.00387-.0492.00463-.0548.01272-.1395.02605-.2499.02669-.2212.07421-.5433.15649-.9326.1655-.7828.4668-1.81335 1.00599-2.83303 1.05542-1.99591 3.01282-3.96604 6.84702-3.96733 4.3787.03459 7.9108 3.68172 7.9108 8.11276v.887c0 4.618.9671 7.3967 1.897 8.9971l.0017.0029h-19.74857l.00169-.0029c.93038-1.6005 1.89795-4.3793 1.89795-8.9971zm8.04313-10.99976c-4.7319 0-7.29506 2.52912-8.61876 5.03243-.65054 1.23026-1.00343 2.44963-1.19469 3.35423-.09609.4545-.1526.8355-.18533 1.1065-.01639.1357-.02686.2443-.03337.3213-.00326.0386-.00552.0693-.00704.0915l-.00174.0271-.00051.0087-.00017.0031-.00007.0012c-.00003.0005-.00005.001.99856.0537l-.99861-.0527c-.00093.0176-.00139.0351-.00139.0527l-.00001 1c0 4.3342-.90602 6.7511-1.62635 7.9908-.17713.303-.27141.6473-.27335.9983-.00194.3517.08891.6977.26338 1.0031.17448.3054.42641.5594.73038.7363s.64923.2706 1.00095.2715h.00257 4.87705c0 1.3261.5268 2.5979 1.4645 3.5355.9376.9377 2.2094 1.4645 3.5355 1.4645s2.5979-.5268 3.5355-1.4645c.9377-.9376 1.4645-2.2094 1.4645-3.5355h4.877.0026c.3517-.0009.6969-.0945 1.0008-.2714.304-.1769.5559-.4309.7304-.7362s.2654-.6513.2635-1.003c-.0019-.351-.0961-.6953-.2732-.9983-.7199-1.2397-1.6255-3.6567-1.6255-7.9911v-.887c0-5.49289-4.3827-10.07171-9.8996-10.11273v-.00003zm11.5326 18.99086c-.0003-.0006-.0007-.0012-.001-.0018l-.8629.5055.8647-.5024c-.0003-.0004-.0005-.0009-.0008-.0013zm-8.6011 3.0089h-6c0 .7956.3161 1.5587.8787 2.1213s1.3257.8787 2.1213.8787 1.5587-.3161 2.1213-.8787.8787-1.3257.8787-2.1213z" fill="#037aff" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>72 hour reminder</span>
                        <span className='alarm-content'>Notifies clients reminding them of their upcoming appointment.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state disable'>APP</span>
                        </div>
                    </div>
                    <div className="alarm-item">
                        <div className='new-container'>
                            <span id='logo'>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#037AFF" cx="12" cy="12" r="11.5"></circle><path d="M12.26 6a.74.74 0 01.74.74V11h4.26a.74.74 0 01.74.74v.52a.74.74 0 01-.74.74H13v4.26a.74.74 0 01-.74.74h-.52a.74.74 0 01-.74-.74v-4.261L6.74 13a.74.74 0 01-.74-.74v-.52a.74.74 0 01.74-.74l4.26-.001V6.74a.74.74 0 01.74-.74h.52z" fill="#037AFF"></path></g></svg>
                            </span>
                            <span id='content'>
                                Add reminder
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='keep-clients-container'>
                <div className='content-title'>Keep clients up to date with their appointments</div>
                <div className='alarm-container'>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m23 3c0-.55228-.4477-1-1-1s-1 .44772-1 1v1h-10v-1c0-.55228-.4477-1-1-1-.55228 0-1 .44772-1 1v1h-3c-1.10457 0-2 .89543-2 2v5 15c0 1.1046.89543 2 2 2h20c1.1046 0 2-.8954 2-2v-15-5c0-1.10457-.8954-2-2-2h-3zm3 3h-3v1c0 .55228-.4477 1-1 1s-1-.44772-1-1v-1h-10v1c0 .55228-.4477 1-1 1-.55228 0-1-.44772-1-1v-1h-3v4h20zm-20 6h20v14h-20zm5.5 7c0-.5523.4477-1 1-1h2.5v-2.5c0-.5523.4477-1 1-1s1 .4477 1 1v2.5h2.5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2.5v2.5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2.5h-2.5c-.5523 0-1-.4477-1-1z" fill="#6d4aff" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>New appointment</span>
                        <span className='alarm-content'>Automatically sends to clients when an appointment is booked for them.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state success'>APP</span>
                        </div>
                    </div>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m23 3c0-.55228-.4477-1-1-1s-1 .44772-1 1v1h-10v-1c0-.55228-.4477-1-1-1-.55228 0-1 .44772-1 1v1h-3c-1.10457 0-2 .89543-2 2v5 15c0 1.1046.89543 2 2 2h20c1.1046 0 2-.8954 2-2v-15-5c0-1.10457-.8954-2-2-2h-3zm3 7v-4h-3v1c0 .55228-.4477 1-1 1s-1-.44772-1-1v-1h-10v1c0 .55228-.4477 1-1 1-.55228 0-1-.44772-1-1v-1h-3v4zm-20 2h20v14h-20zm7.9498 2.0502c-.3905-.3905-1.0237-.3905-1.4142 0l-4.24266 4.2426c-.39052.3906-.39052 1.0237 0 1.4143l4.24266 4.2426c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-2.5355-2.5355h9.1714l-2.5355 2.5355c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l4.2427-4.2426c.3905-.3906.3905-1.0237 0-1.4143l-4.2427-4.2426c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2.5356 2.5356h-9.1716l2.5356-2.5356c.3905-.3905.3905-1.0237 0-1.4142z" fill="#6d4aff" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>Rescheduled appointment</span>
                        <span className='alarm-content'>Automatically sends to clients when their appointment start time is changed.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state success'>APP</span>
                        </div>
                    </div>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m23 3c0-.55228-.4477-1-1-1s-1 .44772-1 1v1h-10v-1c0-.55228-.4477-1-1-1-.55228 0-1 .44772-1 1v1h-3c-1.10457 0-2 .89543-2 2v5 15c0 1.1046.89543 2 2 2h20c1.1046 0 2-.8954 2-2v-15-5c0-1.10457-.8954-2-2-2h-3zm3 3h-3v1c0 .55228-.4477 1-1 1s-1-.44772-1-1v-1h-10v1c0 .55228-.4477 1-1 1-.55228 0-1-.44772-1-1v-1h-3v4h20zm-20 6h20v14h-20zm13.7071 3.2929c.3905.3905.3905 1.0237 0 1.4142l-2.2929 2.2929 2.2929 2.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-2.2929-2.2929-2.2929 2.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l2.2929-2.2929-2.2929-2.2929c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l2.2929 2.2929 2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0z" fill="#6d4aff" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>Cancelled appointment</span>
                        <span className='alarm-content'>Automatically sends to clients when their appointment is cancelled.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state success'>APP</span>
                        </div>
                    </div>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m13.5 6c-3.58986 0-6.50001 2.91015-6.50001 6.5 0 3.5899 2.91015 6.5 6.50001 6.5 3.5898 0 6.5-2.9101 6.5-6.5 0-3.58985-2.9102-6.5-6.5-6.5zm-8.50001 6.5c0-4.69442 3.80558-8.5 8.50001-8.5 4.6944 0 8.5 3.80558 8.5 8.5 0 3.0322-1.5877 5.6935-3.9771 7.1981.6184.1955 1.225.4315 1.8158.7069 1.985.9255 3.7433 2.2744 5.1513 3.9519.3551.423.3 1.0538-.123 1.4089-.4231.355-1.0538.2999-1.4089-.1231-1.2203-1.4539-2.7441-2.6229-4.4645-3.425-1.7203-.8021-3.5954-1.2177-5.4936-1.2177-1.8981 0-3.77319.4156-5.49354 1.2177-1.72035.802-3.24421 1.9711-4.46452 3.4249-.35506.4231-.98582.4781-1.40885.1231-.42302-.3551-.47811-.9858-.12305-1.4089 1.40804-1.6775 3.16632-3.0264 5.15132-3.9518.59077-.2754 1.19735-.5114 1.81575-.7069-2.38941-1.5046-3.97712-4.1659-3.97712-7.1981zm19.00001 4.5c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1z" fill="#6d4aff" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>Did not show up</span>
                        <span className='alarm-content'>Automatically sends to clients when their appointment is marked as a no-show.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state success'>APP</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='encourage-client-container'>
                <div className='content-title'>Encourage client loyalty</div>
                <div className='alarm-container'>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                                <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m14.9993 2c-.3788 0-.7251.214-.8945.55279l-4.72357 9.44721h-5.38196c-.53044 0-1.03914.2107-1.41422.5858-.37507.3751-.58578.8838-.58578 1.4142v11c0 .5304.21071 1.0391.58578 1.4142.37508.3751.88379.5858 1.41422.5858h6 15.23443c.7312 0 1.4372-.267 1.9854-.751.5482-.4839.9007-1.1513.9914-1.8769l1.5-12c.0528-.4221.0152-.8506-.1103-1.257-.1255-.4065-.3359-.7816-.6175-1.1005-.2815-.31891-.6276-.57429-1.0153-.74921-.3878-.17493-.8083-.26539-1.2337-.26539h-6.7344v-2c0-.65661-.1294-1.30679-.3806-1.91342-.2513-.60663-.6196-1.15782-1.0839-1.62211-.4643-.4643-1.0155-.83259-1.6221-1.08387-.6066-.25127-1.2568-.3806-1.9134-.3806zm-4 23h14.2344c.2437 0 .4791-.089.6618-.2503s.3002-.3838.3305-.6257l1.5-12c.0176-.1407.005-.2835-.0368-.419s-.112-.2605-.2058-.3668c-.0939-.1063-.2092-.1914-.3385-.2497-.1292-.0583-.2694-.0885-.4112-.0885h-7.7344c-.5523 0-1-.4477-1-1v-3c0-.39397-.0776-.78407-.2284-1.14805s-.3717-.69469-.6503-.97327-.6093-.49955-.9733-.65032c-.1808-.07491-.3681-.13176-.5592-.17l-4.5888 9.17774zm-7.00003 0v-11h5v11z" fill="#00a36d" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>Thank you for visiting</span>
                        <span className='alarm-content'>Automatically sends to clients when their appointment is checked out, with a link to leave a review.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state success'>EMAIL</span>
                            <span className='alarm-state success'>APP</span>
                        </div>
                    </div>
                    <div className="alarm-item">
                        <div className='alarm-tool'>
                            <span className='alarm-logo'>
                            <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m21.9952 7h-11.9904-.01046-6.99434c-1.10457 0-2.000002.89543-2.000002 2v5.9952.0105 1.9886c-.000018.0035-.000018.007 0 .0105v5.9952c0 1.1046.895432 2 2.000002 2h6.99427.01063 11.9902.0106 6.9943c1.1046 0 2-.8954 2-2v-5.9952-.0104-1.9888-.0104-5.9952c0-1.10457-.8954-2-2-2h-6.9943zm-11.6195 16h11.2486l7.3757-6.4538v-1.0924l-7.3757-6.4538h-11.2486l-7.3757 6.4538v1.0924zm-7.3757-3.7962v3.7962h4.33855zm0-6.4076 4.33855-3.7962h-4.33855zm26 6.4076v3.7962h-4.3386zm0-10.2038h-4.3386l4.3386 3.7962zm-16 7c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3zm3-5c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5 5-2.2386 5-5-2.2386-5-5-5z" fill="#00a36d" fillRule="evenodd"></path></svg>
                            </span>
                            <span className='alarm-action'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
                            </span>
                        </div>
                        <span className='alarm-title'>Thank you for tipping</span>
                        <span className='alarm-content'>Automatically sends to clients when they add a tip after their appointment.</span>
                        <div className='alarm-states'>
                            <span className='alarm-state disable'>DISABLED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutomatedMessagesPage;