import React from "react";
// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import Title from "../../../components/Title/Title";
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useForm } from "react-hook-form";

import usePostApi from "../../../hooks/usePostApi";
import BreadCrumbPanel from "../../../components/BreadCrumbs/BreadCrumbPanel";

const AddUserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = usePostApi(["users"], "/users", "post");

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <PanelLayout>
      <BoxLayout justify="start">
        <BreadCrumbPanel />
      </BoxLayout>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <BoxLayout gap={2} column={true} justify={"center"} alignItems={"start"}>
          <Title>Add User</Title>
          <TextField
            fullWidth
            label="First Name"
            id="First name"
            {...register("firstName", {
              required: "This field is required",
            })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? errors.firstName.message : " "}
          />
          <TextField
            fullWidth
            label="Last Name"
            id="Last name"
            {...register("lastName", {
              required: "This field is required",
            })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? errors.lastName.message : " "}
          />
          <TextField
            fullWidth
            label="Email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : " "}
          />
          <TextField
            fullWidth
            label="Age"
            id="age"
            type={"number"}
            {...register("age", {
              required: "This field is required",
            })}
            error={Boolean(errors.age)}
            helperText={errors.age ? errors.age.message : " "}
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
        </BoxLayout>
      </form>
    </PanelLayout>
  );
};

export default AddUserPage;
