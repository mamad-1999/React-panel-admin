import React from "react";
import { ListItem, ListItemIcon, ListItemText, Icon } from "@mui/material";

const NavigationLink = ({ item }) => {
  return (
    <ListItem
      button
      component="a"
      //   href={item.url}
      //   target={item.target ? item.target : "_blank"}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default NavigationLink;
