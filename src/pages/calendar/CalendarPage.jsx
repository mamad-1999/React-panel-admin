import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import component
import PanelLayout from "../../components/PanelLayout/PanelLayout";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
   
  },
];

const CalendarPage = () => {
  return (
    <PanelLayout>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </PanelLayout>
  );
};

export default CalendarPage;
