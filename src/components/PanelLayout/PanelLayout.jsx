import React from "react";
import LayoutContext from "../../context/LayoutContext";
// import { CssBaseline } from "@mui/material";

import BaseLayout from "../../layout/BaseLayout";

const PanelLayout = (props) => {
  return (
    <LayoutContext.Provider value={{ content: props.children }}>
      <div style={{ display: "flex",backgroundColor: "#FeFeFe" }}>
        {/* <CssBaseline /> */}
        <BaseLayout />
      </div>
    </LayoutContext.Provider>
  );
};

export default PanelLayout;
