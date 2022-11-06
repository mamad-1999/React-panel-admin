import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Header from "./Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#343434" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  height: "100vh",
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3}>
          <Item sx={{ borderRight: "2px solid #fff" }}>Mohammad</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <Stack>
              <Header />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
