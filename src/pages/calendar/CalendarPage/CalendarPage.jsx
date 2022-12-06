import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import AddButton from "../../../components/AddButton/AddButton";
import Title from "../../../components/Title/Title";

const localizer = momentLocalizer(moment);

const myEventsList = [{}];

const CalendarPage = () => {
  return (
    <PanelLayout>
      <BoxLayout justify="space-between">
        <Title>Calendar</Title>
        <AddButton text={"Add new event"} link={"/calendar/addevent"} />
      </BoxLayout>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: 20, fontFamily: "sans-serif" }}
      />
    </PanelLayout>
  );
};

export default CalendarPage;
