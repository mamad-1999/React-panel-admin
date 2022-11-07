import React from "react";
import { Divider, List } from "@mui/material";

import navigationConfig from "../../config/navigationConfig";

import NavigationGroup from "./sections/NavigationGroup";
import NavigationCollapse from "./sections/NavigationCollapse";
import NavigationItem from "./sections/NavigationItem";
import NavigationLink from "./sections/NavigationLink";

const NavigationPanel = () => {
  return (
    <div>
      <List>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <NavigationGroup item={item} />}

            {item.type === "collapse" && <NavigationCollapse item={item} />}

            {item.type === "item" && <NavigationItem item={item} />}

            {item.type === "link" && <NavigationLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default NavigationPanel;
