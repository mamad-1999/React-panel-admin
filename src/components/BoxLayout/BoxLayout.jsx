import React from "react";
import { Paper } from "@mui/material";

const BoxLayout = ({ column = false, justify = "center", children }) => {
  return (
    <Paper
      sx={{
        padding: "15px",
        marginTop: 2,
        display: "flex",
        flexDirection: column ? "column" : "row",
        justifyContent: justify,
        alignItems: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default BoxLayout;
