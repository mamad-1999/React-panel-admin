import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
} from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";

import NavigationGroup from "./NavigationGroup";
import NavigationItem from "./NavigationItem";
import NavigationLink from "./NavigationLink";

const NavigationCollapse = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ul>
      <ListItem button onClick={handleClick}>
        {item.icon && (
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <NavigationGroup item={item} />}

              {item.type === "collapse" && <NavigationCollapse item={item} />}

              {item.type === "item" && <NavigationItem item={item} />}

              {item.type === "link" && <NavigationLink item={item} />}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </ul>
  );
};

export default NavigationCollapse;
