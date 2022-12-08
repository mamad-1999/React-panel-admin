import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import AddButton from "../../../components/AddButton/AddButton";
import Title from "../../../components/Title/Title";

import { useGetApi } from "../../../hooks/useGetApi";
import Loading from "../../../components/Loading/Loading";

const localizer = momentLocalizer(moment);

// const myEventsList = [
//   {
//     id: 11,
//     title: "Birthday Party",
//     start: "2022-12-07T20:30:00.000Z",
//     end: "2022-12-09T20:30:00.000Z",
//     resourceId: 4,
//   },
// ];

const CalendarPage = () => {
  const { data, isLoading } = useGetApi(["events"], "/events");

  if (isLoading) {
    return <Loading />;
  }

  console.log(data)

  return (
    <PanelLayout>
      <BoxLayout justify="space-between">
        <Title>Calendar</Title>
        <AddButton text={"Add new event"} link={"/calendar/addevent"} />
      </BoxLayout>
      <Calendar
        localizer={localizer}
        events={data}
        // startAccessor="start"
        // endAccessor="end"
        style={{ height: 500, marginTop: 20, fontFamily: "sans-serif" }}
      />
    </PanelLayout>
  );
};

export default CalendarPage;
