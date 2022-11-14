import React from "react";
import { Paper } from "@mui/material";

const BoxLayout = ({ column = false, children }) => {
  return (
    <Paper
      sx={{
        padding: "15px",
        marginTop: 2,
        display: "flex",
        flexDirection: column ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default BoxLayout;
