import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material";

const NavigationItem = ({ item }) => {
  return (
    <ListItem
      button
      //   component={NavLinkAdapter}
      //   to={item.url}
      //   activeClassName={classes.active}
      //   exact={item.exact}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title}  />
    </ListItem>
  );
};

export default NavigationItem;
