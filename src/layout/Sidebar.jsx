import React from "react";
import { Stack } from "@mui/material";
import Drawer from "../components/Drawer/Drawer";

// component

const Sidebar = () => {
  return (
    <Stack sx={{ backgroundColor: "red" }}>
      {/* <SideBarHeader /> */}
      <Drawer />
    </Stack>
  );
};

export default Sidebar;
