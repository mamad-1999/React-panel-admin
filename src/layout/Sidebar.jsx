import React from "react";
import { Stack } from "@mui/material";
import Drawer from "../components/Drawer";

// component
import SideBarHeader from "../components/SideBarHeader";

const Sidebar = () => {
  return (
    <Stack sx={{ backgroundColor: "red" }}>
      {/* <SideBarHeader /> */}
      <Drawer />
    </Stack>
  );
};

export default Sidebar;
