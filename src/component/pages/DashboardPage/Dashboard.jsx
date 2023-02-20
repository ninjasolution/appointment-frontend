import React, { useEffect } from 'react';
import './dashboard.scss';

export default function Dashboard() {

  useEffect(() => {
    alert()
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='details-container recent-sales'></div>
      <div className='details-container upcoming-appointments'></div>
      <div className='details-container appointments-activity'></div>
      <div className='details-container next-appointments'></div>
      <div className='details-container top-services'></div>
      <div className='details-container top-team-member'></div>
    </div>
  )
}
