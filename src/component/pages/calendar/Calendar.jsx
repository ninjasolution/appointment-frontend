import React from 'react'
import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarConfig } from '../../../CalendarConfig';

export default function Calendar() {
  return (
    <BryntumCalendar {...calendarConfig} />
  )
}
