import React from "react";

import NavigationContext from "../context/NavigationContext";

import Header from "./Header";
import Drawer from "../components/Drawer/Drawer";
import Main from "./Main";

const BaseLayout = () => {
  return (
    <NavigationContext.Provider>
      <Header />
      <Drawer />
      <Main />
    </NavigationContext.Provider>
  );
};

export default BaseLayout;
