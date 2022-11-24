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

// default image for post item
import postImage from "../../../assets/images/default_blog.jpg"

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
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={post.poster ? post.poster : postImage}
                  alt="post panel"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography> */}
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: 2,
                  }}
                >
                  {post.tags.map((tag) => (
                    <Button
                      key={tag}
                      sx={{
                        borderRadius: "30px",
                        padding: "0 10px",
                        height: "25px",
                        fontSize: "14px",
                        backgroundColor: "#8a8a8a",
                        textTransform: "capitalize",
                      }}
                      size="sm"
                      variant="contained"
                    >
                      {tag}
                    </Button>
                  ))}
                </Box>
                <CardActions sx={{ borderTop: "1px solid #505050" }}>
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
