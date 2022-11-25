import React from "react";
import { Box, Paper, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// import Link to create button link
import { Link } from "react-router-dom";
// import component

const PostListTopBar = () => {
  return (
    <Paper
      sx={{
        padding: "15px",
        marginTop: 2,
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button
        LinkComponent={Link}
        to="/posts/addpost"
        size="medium"
        variant="contained"
        sx={{
          backgroundColor: "#0063cc",
          color: "#fff",
          width: { xs: "100%", sm: "150px" },
        }}
        startIcon={<AddIcon />}
      >
        Add Post
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <TextField
          label="Filter By Tag"
          id="Post Title"
          size="small"
        />
        <TextField
          label="Filter By Title
        "
          id="Post Title"
          size="small"
        />
      </Box>
    </Paper>
  );
};

export default PostListTopBar;
