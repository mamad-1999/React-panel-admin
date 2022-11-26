import React from "react";
import { Paper, Button, TextField, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

// import Link to create button link
import { Link } from "react-router-dom";
// import component

const PostListTopBar = ({ onFilterChange, filterKey }) => {
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
          width: { xs: "100%", sm: "200px" },
        }}
        startIcon={<AddIcon />}
      >
        Add Post
      </Button>

      <TextField
        fullWidth
        placeholder="Filter By Title"
        id="Post Title"
        size="small"
        onChange={onFilterChange}
        value={filterKey}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default PostListTopBar;
