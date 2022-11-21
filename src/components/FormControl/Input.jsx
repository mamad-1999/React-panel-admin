import React from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  console.log(props);
  return <TextField {...props} />;
};

export default Input;
