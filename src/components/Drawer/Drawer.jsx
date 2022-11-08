import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import NavigationPanel from "../Navigation/NavigationPanel";
import NavigationContext from "../../context/NavigationContext";

const drawerWidth = 300;

export default function PermanentDrawerLeft() {
  const { open } = React.useContext(NavigationContext);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        backgroundColor: "red",
        flexShrink: 0,
        display: !open && "none",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          borderRight: "2px solid #fff",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Toolbar variant="dense" sx={{ paddingY: 3 }}>
        <Typography variant="h6" color="inherit" component="div">
          React Panel Admin
        </Typography>
      </Toolbar>
      <Divider />
      <NavigationPanel />
    </Drawer>
  );
}
