import React, { useEffect } from 'react';
import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarConfig } from '../../../CalendarConfig';

export default function Calendar() {

  useEffect(() => {
    alert(calendarConfig.date)
  }, []);

  return (
    <BryntumCalendar {...calendarConfig} />
  )
}
