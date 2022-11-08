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
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: (props) => -props.drawerWidth,
  },
  contentShift: {
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
