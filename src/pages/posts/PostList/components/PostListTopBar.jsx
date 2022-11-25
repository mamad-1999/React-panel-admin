import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// import Link to create button link
import { Link } from "react-router-dom";
// import component
import BoxLayout from "../../../../components/BoxLayout/BoxLayout";

const PostListTopBar = () => {
  return (
    <BoxLayout justify={"start"}>
      <Button
        LinkComponent={Link}
        to="/posts/addpost"
        size="medium"
        variant="contained"
        sx={{ backgroundColor: "#0063cc", color: "#fff" }}
        startIcon={<AddIcon />}
      >
        Add Post
      </Button>
    </BoxLayout>
  );
};

export default PostListTopBar;
