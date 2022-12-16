import { memo } from "react";
import { Paper } from "@mui/material";

const BoxLayout = ({
  column = false,
  justify = "center",
  alignItems = "center",
  gap = 0,
  children,
}) => {
  return (
    <Paper
      sx={{
        padding: "15px",
        marginTop: 2,
        display: "flex",
        flexDirection: column ? "column" : "row",
        justifyContent: justify,
        alignItems: alignItems,
        gap: gap,
      }}
    >
      {children}
    </Paper>
  );
};

export default memo(BoxLayout);
