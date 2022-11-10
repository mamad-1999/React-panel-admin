import React from "react";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import { Paper, Typography, Grid } from "@mui/material";

// import chart
import AreaChartPanel from "../../components/Charts/AreaChart/AreaChartPanel";
import CircleChartPanel from "../../components/Charts/CircleChartPanel";

const DashboardPanel = () => {
  return (
    <PanelLayout>
      <Typography variant="h6">Dashboard</Typography>
      <Grid container>
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
        <Grid item xs={4}>
          <Paper
            sx={{
              padding: "10px",
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleChartPanel />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </PanelLayout>
  );
};

export default DashboardPanel;
