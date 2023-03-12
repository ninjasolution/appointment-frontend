import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import './dashboard.scss';

export default function Dashboard() {

  const [recentViewState, setRecentViewState] = useState(false);
  const [upcomingViewState, setUpcomingViewState] = useState(false);

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

  const selectRecentPeriod = () => {
    setRecentViewState(true);
  }

  const selectUpcomingPeriod = () => {
    setUpcomingViewState(true);
  }

  return (
    <div className='dashboard-container'>
      <div className='details-container recent-sales'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Recent sales</span>
            <span id="title2">Last 7 days</span>
          </div>
          <button className='setting' onClick={() => selectRecentPeriod()}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
          </button>
          {
            recentViewState ?
            <div className='period-setting-container'>
              <span className='period-title'>Time period</span>
              <select className='period-during'>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
              <div className='period-action'>
                <button className='action-close' onClick={() => setRecentViewState(false)}>Close</button>
                <button className='action-apply'>Apply changes</button>
              </div>
            </div> : <></>
          }
        </div>
        <span className='price'>RUB 4.00</span>
        <div className='content'>
          <div id='content1'>
            <span id='content1-1'>Appointments</span><span id='content1-2'>1</span>
          </div>
          <div id='content2'>
            <span id='content2-1'>Appointments value</span><span id='content2-2'>RUB 56.00</span>
          </div>
        </div>
        <div className='graph'>
          <Chart options={state.options} series={state.series} type="line" width={'100%'} height={'300px'}/>
        </div>
      </div>
      <div className='details-container upcoming-appointments'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Upcoming appointments</span>
            <span id="title2">Next 7 days</span>
          </div>
          <button className='setting' onClick={() => selectUpcomingPeriod()}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 14a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4zm-8-2a2 2 0 104 0 2 2 0 00-4 0z" fill="#101928"></path></svg>
          </button>
          {
            upcomingViewState ?
            <div className='period-setting-container'>
              <span className='period-title'>Time period</span>
              <select className='period-during'>
                <option>Next 7 days</option>
                <option>Next 30 days</option>
              </select>
              <div className='period-action'>
                <button className='action-close' onClick={() => setUpcomingViewState(false)}>Close</button>
                <button className='action-apply'>Apply changes</button>
              </div>
            </div> : <></>
          }
        </div>
        <span className='price'>1 booked </span>
        <div className='content'>
          <div id='content1'>
            <span id='content1-1'>Confirmed appointments</span><span id='content1-2'>1</span>
          </div>
          <div id='content2'>
            <span id='content2-1'>Cancelled appointments</span><span id='content2-2'>0</span>
          </div>
        </div>
        <div className='graph'>
          <Chart options={state.options} series={state.series} type="bar" width={'100%'} height={'300px'}/>
        </div>
      </div>
      <div className='details-container appointments-activity'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Appointments activity</span>
          </div>
        </div>
        <div className='content-details'>
          <div className='content-item' id='content1'>
            <div className='item-details'>
              <div className='active-date'>
                <span className='active-day'>22</span>
                <span className='active-month'>Feb</span>
              </div>
              <div className='active-detail'>
                <span className='detail-date'>Wed, 22 Feb 2023 01:30<span>NEW</span></span>
                <span className='detail-type'>service-1</span>
                <span className='detail-service'>Walk-In, 15min with Mykhailo</span>
                <span className='detail-content'>It's very wonderful</span>
              </div>
            </div>
            <div className='item-price'>RUB 56</div>
          </div>
          <div className='content-item' id='content1'>
            <div className='item-details'>
              <div className='active-date'>
                <span className='active-day'>20</span>
                <span className='active-month'>Feb</span>
              </div>
              <div className='active-detail'>
                <span className='detail-date'>Wed, 22 Feb 2023 01:30<span>NEW</span></span>
                <span className='detail-type'>service-1</span>
                <span className='detail-service'>Walk-In, 15min with Mykhailo</span>
                <span className='detail-content'>It's very wonderful</span>
              </div>
            </div>
            <div className='item-price'>RUB 56</div>
          </div>
        </div>
      </div>
      <div className='details-container next-appointments'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Today's next appointments</span>
          </div>
        </div>
        <div className='content-details'>
          <div className='content-item' id='content1'>
            <div className='item-details'>
              <div className='active-date'>
                <span className='active-day'>22</span>
                <span className='active-month'>Feb</span>
              </div>
              <div className='active-detail'>
                <span className='detail-date'>Wed, 22 Feb 2023 01:30<span>NEW</span></span>
                <span className='detail-type'>service-1</span>
                <span className='detail-service'>Walk-In, 15min with Mykhailo</span>
                <span className='detail-content'>It's very wonderful</span>
              </div>
            </div>
            <div className='item-price'>RUB 56</div>
          </div>
        </div>
      </div>
      <div className='details-container top-services'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Top services</span>
          </div>
        </div>
        <div className='content-details'>
          <table className='w-100'>
            <thead>
              <tr>
                <th className='font-left'>Service</th>
                <th className='font-right'>This month</th>
                <th className='font-right'>Last month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font-left'>service-1</td>
                <td className='font-right'>2</td>
                <td className='font-right'>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='details-container top-team-member'>
        <div className='title'>
          <div id="title-container">
            <span id="title1">Top team member</span>
          </div>
        </div>
        <div className='content-details'>
          <table className='w-100'>
            <thead>
              <tr>
                <th className='font-left'>Team member</th>
                <th className='font-right'>This month</th>
                <th className='font-right'>Last month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font-left'>Mykhailo Savchuk</td>
                <td className='font-right'>RUB 4.00</td>
                <td className='font-right'>RUB 0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
