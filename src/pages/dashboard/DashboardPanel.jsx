import React from "react";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import { Paper, Typography, Grid } from "@mui/material";

// import chart
import AreaChartPanel from "../../components/AreaChart/AreaChartPanel";

const DashboardPanel = () => {
  return (
    <PanelLayout>
      <Grid container>
        <Typography variant="h6">Dashboard</Typography>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: "20px",
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AreaChartPanel />
          </Paper>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </PanelLayout>
  );
};

export default DashboardPanel;
