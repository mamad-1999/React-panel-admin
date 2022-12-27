import React from "react";
import { TextField } from "@mui/material";

const Input = React.forwardRef((props, ref) => {
  return <TextField {...props} ref={ref} />;
});

export default Input;
