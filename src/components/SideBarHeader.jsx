import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "blue" }}>
      <AppBar position="static" sx={{ padding: 2 }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            React Panel Admin
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
