import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// import component

import NavigationPanel from "../Navigation/NavigationPanel";
import NavigationContext from "../../context/NavigationContext";

export default function PermanentDrawerLeft(props) {
  const { open } = React.useContext(NavigationContext);
  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        display: !open && "none",
        "& .MuiDrawer-paper": {
          width: props.drawerWidth,
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
