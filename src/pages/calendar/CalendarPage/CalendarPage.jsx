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
import useDeleteApi from "../../../hooks/useDeleteApi";
import { useConfirm } from "material-ui-confirm";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const { data, isLoading } = useGetApi(["events"], "/events");
  const { mutate } = useDeleteApi(["events"]);
  const confirm = useConfirm();

  if (isLoading) {
    return <Loading />;
  }

  const handelSelect = (item) => {
    confirm({ title: "Are you sure to delete?" })
      .then(() => {
        mutate(`/events/${item.id}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const events = data.map(({ start, end, ...rest }) => {
    return {
      start: new Date(Date.parse(start)),
      end: new Date(Date.parse(end)),
      ...rest,
    };
  });

  return (
    <PanelLayout>
      <BoxLayout justify="space-between">
        <Title>Calendar</Title>
        <AddButton text={"Add new event"} link={"/calendar/addevent"} />
      </BoxLayout>
      <Calendar
        localizer={localizer}
        events={events}
        onSelectEvent={handelSelect}
        style={{ height: 500, marginTop: 20, fontFamily: "sans-serif" }}
      />
    </PanelLayout>
  );
};

export default CalendarPage;
