import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkPanel = React.forwardRef((props, ref) => {
  return <NavLink innerRef={ref} {...props} />;
});

export default NavLinkPanel;
