import { memo } from "react";
import { Typography } from "@mui/material";

const Title = (props) => {
  return <Typography variant="h6">{props.children}</Typography>;
};

export default memo(Title);
