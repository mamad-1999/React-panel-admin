import React, { useEffect, useState } from "react";

import NavigationContext from "../context/NavigationContext";

import Header from "./Header/Header";
import DrawerPanel from "../components/Drawer/Drawer";
import Main from "./Main";
import { checkboxClasses } from "@mui/material";

const checkDrawOpen = () => {
  if (window.innerWidth < 900) return false;
  return true;
};

const BaseLayout = () => {
  const [open, setOpen] = useState(() => checkDrawOpen());

  useEffect(() => {
    document.addEventListener("resize", drawSizeHandler);

    return () => {
      document.addEventListener("resize", drawSizeHandler);
    };
  }, []);

  const drawSizeHandler = () => {
    if (checkboxClasses()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  return (
    <NavigationContext.Provider value={{ open, toggleDrawer }}>
      <Header drawerWidth={300} />
      <DrawerPanel drawerWidth={300} />
      <Main drawerWidth={300} />
    </NavigationContext.Provider>
  );
};

export default BaseLayout;
