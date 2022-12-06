import React from "react";

import { Grid, Box, TextField } from "@mui/material";

// import component
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import BreadCrumbPanel from "../../../components/BreadCrumbs/BreadCrumbPanel";

import { useForm } from "react-hook-form";

const AddEventsPage = () => {
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
          <Grid item xs={4}>
            <BoxLayout>
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
            </BoxLayout>
          </Grid>
          <Grid item xs={8}>
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
                <h1>test</h1>
              </Box>
            </BoxLayout>
          </Grid>
        </Grid>
      </form>
    </PanelLayout>
  );
};

export default AddEventsPage;
