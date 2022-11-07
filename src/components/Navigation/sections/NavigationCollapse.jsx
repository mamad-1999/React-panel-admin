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
// import { withRouter } from "react-router-dom";


const persistCollapseOpen = (location, item) => {
  return location && checkPathInChildren(item, location.pathname);
};

const checkPathInChildren = (parent, url) => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (checkPathInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url)
    ) {
      return true;
    }
  }

  return false;
};

const NavigationCollapse = (props) => {
  const { item, location } = props;
  const [open, setOpen] = React.useState(() =>
    persistCollapseOpen(location, item)
  );
  // const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (persistCollapseOpen(location, item)) {
      setOpen(true);
    }
  }, [location, item]);

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

              {/* {item.type === "collapse" && <NavCollapse item={item} />} */}

              {item.type === "item" && <NavigationItem item={item} />}

              {item.type === "link" && <NavigationLink item={item} />}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </ul>
  );
};

// const NavCollapse = withRouter(React.memo(NavigationCollapse));

export default NavigationCollapse;
