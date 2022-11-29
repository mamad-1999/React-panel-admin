import React from "react";
import { Paper, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// import component
import AddButton from "../../../../components/AddButton/AddButton";

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
      <AddButton text={"Add Post"} link={"/posts/addpost"} />
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
