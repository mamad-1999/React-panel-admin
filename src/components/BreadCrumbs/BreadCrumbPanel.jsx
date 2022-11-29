import * as React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import NavLinkPanel from "../NavLinkPanel/NavLinkPanel";

export default function BreadCrumbPanel() {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((name, index) => {
          const routeLink = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <Link
              underline="hover"
              key={name}
              component={NavLinkPanel}
              color="Highlight"
              to={routeLink}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
