import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkPanel = React.forwardRef((props, ref) => {
  return (
    <NavLink
      end
      style={({ isActive }) => ({
        color: isActive ? "#fff" : "",
        background: isActive ? "#01abbb" : "",
      })}
      innerRef={ref}
      {...props}
    />
  );
});

export default NavLinkPanel;
