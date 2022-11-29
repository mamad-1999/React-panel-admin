import React from "react";
// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import Title from "../../../components/Title/Title";
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import { Grid, TextField } from "@mui/material";

import { useForm } from "react-hook-form";

// import Link

const AddUserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <PanelLayout>
      <Title>Add User</Title>
      <BoxLayout>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                id="First name"
                {...register("firstName", {
                  required: "This field is required",
                })}
                error={Boolean(errors.title)}
                helperText={errors.title ? errors.title.message : " "}
              />
              <TextField
                fullWidth
                label="Last Name"
                id="Last name"
                {...register("lastName", {
                  required: "This field is required",
                })}
                error={Boolean(errors.title)}
                helperText={errors.title ? errors.title.message : " "}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                {...register("email", {
                  required: "This field is required",
                })}
                error={Boolean(errors.title)}
                helperText={errors.title ? errors.title.message : " "}
              />
              <TextField
                fullWidth
                label="Age"
                id="age"
                {...register("age", {
                  required: "This field is required",
                })}
                error={Boolean(errors.title)}
                helperText={errors.title ? errors.title.message : " "}
              />
            </Grid>
          </Grid>
        </form>
      </BoxLayout>
    </PanelLayout>
  );
};

export default AddUserPage;
