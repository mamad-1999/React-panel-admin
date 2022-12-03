import React, { useContext } from "react";
import LayoutContext from "../context/LayoutContext";
import NavigationContext from "../context/NavigationContext";
import { Box } from "@mui/material";

const Main = () => {
  const { open } = useContext(NavigationContext);
  const { content } = useContext(LayoutContext);

  return (
    <Box
      sx={(theme) => ({
        flexGrow: 1,
        padding: theme.spacing(2, 3),
        marginLeft: open ? (props) => -props.drawerWidth : "0 !important",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: "flex-end",
        })}
      />
      {content}
    </Box>
  );
};

export default Main;
