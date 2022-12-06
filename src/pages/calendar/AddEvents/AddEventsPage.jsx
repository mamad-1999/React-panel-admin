import React, { useState } from "react";

import { Grid, Box, TextField } from "@mui/material";

// import component
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import BreadCrumbPanel from "../../../components/BreadCrumbs/BreadCrumbPanel";

import { useForm } from "react-hook-form";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AddEventsPage = () => {
  const [value, onChange] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <PanelLayout>
      <BoxLayout justify="start">
        <BreadCrumbPanel />
      </BoxLayout>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <BoxLayout column={true}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Event Title"
                  id="Event Title"
                  {...register("title", {
                    required: "This field is required",
                  })}
                  error={Boolean(errors.title)}
                  helperText={errors.title ? errors.title.message : " "}
                />
              </Box>
            </BoxLayout>
          </Grid>
          <Grid item xs={5}>
            <BoxLayout>
              <Calendar onChange={onChange} value={value} />
            </BoxLayout>
          </Grid>
        </Grid>
      </form>
    </PanelLayout>
  );
};

export default AddEventsPage;
