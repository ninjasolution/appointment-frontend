import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import './dashboard.scss';

export default function Dashboard() {

  const state = {
    options: {
      chart: {
        id: 'recent sales'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: 'Sales',
        data: [0, 0, 0, 0, 0, 0, 0, 11, 0]
      },
      {
        name: 'Appointment',
        data: [0, 0, 0, 0, 0, 0, 0, 91, 0]
      },
    ]
  }

  useEffect(() => {
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='details-container recent-sales'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Recent sales</span>
            <span id="title2">Last 7 days</span>
          </div>
          <button className='setting'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
          </button>
        </div>
        <span className='price'>RUB 4.00</span>
        <div className='content'>
          <div>
            <span>Appointments</span><span>1</span>
          </div>
          <div>
            <span>Appointments value</span><span>RUB 56.00</span>
          </div>
        </div>
        <div className='graph'>
          <Chart options={state.options} series={state.series} type="line" />
        </div>
      </div>
      <div className='details-container upcoming-appointments'>
        <div className='graph'>
          <Chart options={state.options} series={state.series} type="bar" />
        </div>
      </div>
      <div className='details-container appointments-activity'>
      </div>
      <div className='details-container next-appointments'>
      </div>
      <div className='details-container top-services'></div>
      <div className='details-container top-team-member'></div>
    </div>
  )
}
