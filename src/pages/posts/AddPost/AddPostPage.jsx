import React, { useRef, useState } from "react";
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import { Grid, Paper, Box, TextField } from "@mui/material";

// import editor
import JoditEditor from "jodit-react";
import PanelLeft from "./PanelLeft/PanelLeft";

// import component
import Title from "../../../components/Title/Title";

const AddPostPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <PanelLayout>
      <Title>Add Post</Title>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <PanelLeft />
        </Grid>
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
                marginBottom: 2,
              }}
            >
              <TextField fullWidth label="Post Title" id="Post Title" />
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <JoditEditor
                ref={editor}
                value={content}
                config={{
                  readonly: false,
                  style: {
                    height: "300px",
                  },
                  theme: "dark",
                }}
                tabIndex={1}
                onBlur={(value) => setContent(value)}
                onChange={(value) => {}}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </PanelLayout>
  );
};

export default AddPostPage;
