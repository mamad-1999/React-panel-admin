import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import PanelLayout from "../PanelLayout/PanelLayout";

const Loading = () => {
  return (
    <PanelLayout>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 16,
        }}
      >
        <CircularProgress color="success" />
      </Box>
    </PanelLayout>
  );
};

export default Loading;
