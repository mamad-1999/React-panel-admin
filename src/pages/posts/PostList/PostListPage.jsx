import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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

const fetchPosts = () => {
  return axios.get("http://localhost:8000/posts");
};

const PostListPage = () => {
  const { data, isLoading } = useQuery(["posts"], fetchPosts);
  console.log(data);

  if (isLoading) {
    return <h2>is Loading ...</h2>;
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
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
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
