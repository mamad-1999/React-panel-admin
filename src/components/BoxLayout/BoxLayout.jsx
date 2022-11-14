import React from "react";
import { Paper } from "@mui/material";

const BoxLayout = ({ children }) => {
  return (
    <Paper
      sx={{
        padding: "15px",
        marginTop: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default BoxLayout;
