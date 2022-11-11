import React from "react";
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import { Grid, Paper, Typography, Box, TextField } from "@mui/material";

const AddPostPage = () => {
  return (
    <PanelLayout>
      <Typography variant="h6">Add Post</Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Paper
            sx={{
              padding: "10px",
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Post Title" id="Post Title" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </PanelLayout>
  );
};

export default AddPostPage;
