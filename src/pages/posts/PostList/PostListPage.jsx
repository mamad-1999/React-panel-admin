import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import Loading from "../../../components/Loading/Loading";

// import custom hook
import { useGetApi } from "../../../hooks/useGetApi";
import useDeleteApi from "../../../hooks/useDeleteApi";

import PostCard from "./components/PostCard";
import PostListTopBar from "./components/PostListTopBar";

const PostListPage = () => {
  const [filterKey, setFilterKey] = useState("");
  // filterdKey is optional property for filter post
  const { data, isLoading } = useGetApi(["posts"], "/posts", filterKey);
  const { mutate } = useDeleteApi(["posts"]);

  const deletePost = (postId) => {
    mutate(`/posts/${postId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  const handelFilterChange = (e) => {
    setFilterKey(e.target.value);
  };

  return (
    <PanelLayout>
      <Box>
        <PostListTopBar
          onFilterChange={handelFilterChange}
          filterKey={filterKey}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          marginTop={2}
        >
          {data.map((post, index) => (
            <PostCard post={post} key={index} onDeletePost={deletePost} />
          ))}
        </Grid>
      </Box>
    </PanelLayout>
  );
};

export default PostListPage;
