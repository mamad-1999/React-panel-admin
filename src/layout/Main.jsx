import React, { useContext } from "react";
import LayoutContext from "../context/LayoutContext";
import NavigationContext from "../context/NavigationContext";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    backgroundColor: "grey",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: (props) => -props.drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "0 !important",
  },
}));

const Main = (props) => {
  const classes = useStyles(props);

  const { open } = useContext(NavigationContext);
  const { content } = useContext(LayoutContext);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      {content}
    </main>
  );
};

export default Main;
