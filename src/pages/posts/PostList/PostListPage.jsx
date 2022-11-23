import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import Loading from "../../../components/Loading/Loading";

// import custom hook
import { useGetApi } from "../../../hooks/useGetApi";
import useDeleteApi from "../../../hooks/useDeleteApi";

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
            <Grid xs={12} sm={4} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.poster}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">
                    Share
                  </Button>
                  <Button
                    onClick={() => deletePost(post.id)}
                    size="small"
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PanelLayout>
  );
};

export default PostListPage;
