import React, { memo } from "react";

import { ListSubheader } from "@mui/material";

// import component
import NavigationItem from "./NavigationItem";
import NavigationCollapse from "./NavigationCollapse";
import NavigationLink from "./NavigationLink";

const NavigationGroup = ({ item }) => {
  return (
    <>
      <ListSubheader>{item.title}</ListSubheader>
      <React.Fragment>
        {item.children &&
          item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <NavigationGroup item={item} />}
              {item.type === "item" && <NavigationItem item={item} />}
              {item.type === "collapse" && <NavigationCollapse item={item} />}
              {item.type === "link" && <NavigationLink item={item} />}
            </React.Fragment>
          ))}
      </React.Fragment>
    </>
  );
};

export default memo(NavigationGroup);
