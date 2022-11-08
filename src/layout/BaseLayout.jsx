import React, { useState } from "react";

import NavigationContext from "../context/NavigationContext";

import Header from "./Header";
import DrawerPanel from "../components/Drawer/Drawer"
import Main from "./Main";

const BaseLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <NavigationContext.Provider value={{ open }}>
      {/* <Header drawerWidth={300} /> */}
      <DrawerPanel drawerWidth={300} />
      <Main drawerWidth={300} />
    </NavigationContext.Provider>
  );
};

export default BaseLayout;
