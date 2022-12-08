import React from "react";

import {
  Grid,
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// import component
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import BreadCrumbPanel from "../../../components/BreadCrumbs/BreadCrumbPanel";

import { useForm } from "react-hook-form";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import usePostApi from "../../../hooks/usePostApi";

const AddEventsPage = () => {
  const { mutate } = usePostApi(["events"], "/events", "post");
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      start: new Date(),
      end: "",
      status: "start",
    },
  });

  const handelStatusDate = (e) => {
    setValue("status", e.target.value);
  };

  const handelCalendarChange = (value) => {
    if (watch("status") === "start") {
      setValue("start", value);
    } else if (watch("status") === "end") {
      setValue("end", value);
    }
  };

  const onSubmit = (data) => {
    mutate(data);
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
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={watch("status")}
                    onChange={handelStatusDate}
                    sx={{ marginBottom: "10px" }}
                  >
                    <FormControlLabel
                      value="start"
                      control={<Radio />}
                      label="Start Event Date"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="End Event Date"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  disabled={true}
                  value={watch("start")}
                  fullWidth
                  id="Event Title"
                  placeholder="Chose start event date in calendar"
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  disabled={true}
                  value={watch("end")}
                  fullWidth
                  id="Event Title"
                  placeholder="Chose end event date in calendar"
                  sx={{ marginBottom: "20px" }}
                />
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#0063cc",
                    color: "#fff",
                  }}
                  startIcon={<AddIcon />}
                >
                  Add User
                </Button>
              </Box>
            </BoxLayout>
          </Grid>
          <Grid item xs={5}>
            <BoxLayout>
              <Calendar
                onChange={handelCalendarChange}
                value={
                  watch("status") === "start"
                    ? watch("start")
                    : watch("end")
                }
              />
            </BoxLayout>
          </Grid>
        </Grid>
      </form>
    </PanelLayout>
  );
};

export default AddEventsPage;
