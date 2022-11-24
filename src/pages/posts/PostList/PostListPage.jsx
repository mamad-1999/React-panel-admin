import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import Loading from "../../../components/Loading/Loading";

// import custom hook
import { useGetApi } from "../../../hooks/useGetApi";
import useDeleteApi from "../../../hooks/useDeleteApi";

import PostCard from "./components/PostCard";

const PostListPage = () => {
  const { data, isLoading } = useGetApi(["posts"], "/posts");
  const { mutate } = useDeleteApi(["posts"]);

  const deletePost = (postId) => {
    mutate(`/posts/${postId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PanelLayout>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.data.map((post, index) => (
            <PostCard post={post} key={index} onDeletePost={deletePost} />
          ))}
        </Grid>
      </Box>
    </PanelLayout>
  );
};

export default PostListPage;
