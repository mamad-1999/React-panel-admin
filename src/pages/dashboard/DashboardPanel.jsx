import React from "react";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import { Paper, Grid } from "@mui/material";

// import chart
import AreaChartPanel from "../../components/Charts/AreaChart/AreaChartPanel";
import CircleChartPanel from "../../components/Charts/CircleChart/CircleChartPanel";
import TinyBarChartPanel from "../../components/Charts/TinyBarChart/TinyBarChartPanel";

// import table
import DashboardTable from "./components/DoshboardTable/DashboardTable";

// import component
import Title from "../../components/Title/Title";
import BoxLayout from "../../components/BoxLayout/BoxLayout";

const DashboardPanel = () => {
  return (
    <PanelLayout>
      <Title>Dashboard</Title>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <BoxLayout>
            <AreaChartPanel />
          </BoxLayout>
        </Grid>
        <Grid item xs={4}>
          <BoxLayout>
            <CircleChartPanel />
          </BoxLayout>
        </Grid>
        <Grid item xs={8}>
          <BoxLayout>
            <TinyBarChartPanel />
          </BoxLayout>
        </Grid>
        <Grid item xs={12}>
          <BoxLayout>
            <DashboardTable />
          </BoxLayout>
        </Grid>
      </Grid>
    </PanelLayout>
  );
};

export default DashboardPanel;
