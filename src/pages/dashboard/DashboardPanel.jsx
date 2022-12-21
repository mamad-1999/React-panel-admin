import React from "react";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import { Grid } from "@mui/material";

// import chart
import AreaChartPanel from "../../components/Charts/AreaChart/AreaChartPanel";
import CircleChartPanel from "../../components/Charts/CircleChart/CircleChartPanel";
import TinyBarChartPanel from "../../components/Charts/TinyBarChart/TinyBarChartPanel";

// import table
import DashboardTable from "./components/DoshboardTable/DashboardTable";

// import component
import Title from "../../components/Title/Title";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import Loading from "../../components/Loading/Loading";

import { useGetApi } from "../../hooks/useGetApi";

const DashboardPanel = () => {
  const areaChartApi = useGetApi(["areaChart"], "/areaChartData");
  const circleChartApi = useGetApi(["circleChart"], "/circleChartData");
  const tinyBarChartApi = useGetApi(["tinyBarChart"], "/tinyBarChartData");

  return (
    <PanelLayout>
      <Title>Dashboard</Title>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <BoxLayout>
            {areaChartApi.isLoading ? (
              <Loading />
            ) : (
              <AreaChartPanel data={areaChartApi.data} />
            )}
          </BoxLayout>
        </Grid>
        <Grid item xs={4}>
          <BoxLayout>
            {circleChartApi.isLoading ? (
              <Loading />
            ) : (
              <CircleChartPanel data={circleChartApi.data} />
            )}
          </BoxLayout>
        </Grid>
        <Grid item xs={8}>
          <BoxLayout>
            {tinyBarChartApi.isLoading ? (
              <Loading />
            ) : (
              <TinyBarChartPanel data={tinyBarChartApi.data} />
            )}
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
