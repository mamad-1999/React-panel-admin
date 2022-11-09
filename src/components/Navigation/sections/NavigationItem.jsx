import React from "react";
import NavLinkPanel from "../../NavLinkPanel/NavLinkPanel";
import { ListItem, ListItemIcon, ListItemText, Icon } from "@mui/material";

const NavigationItem = ({ item }) => {
  return (
    <ListItem button component={NavLinkPanel} to={item.url} exact={item.exact}>
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default NavigationItem;
