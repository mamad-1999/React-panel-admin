import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";

// test data
const posts = [
  {
    id: 1,
    title: "Front end skill",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.",
    poster: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    date: "17:43",
    tags: ["programming", "computer", "javascript"],
    category: "computer",
    comment: false,
    author: "Mohammad Yousefvand",
  },
  {
    id: 2,
    title: "Front end skill",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.",
    poster: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    date: "17:43",
    tags: ["programming", "computer", "javascript"],
    category: "computer",
    comment: false,
    author: "Mohammad Yousefvand",
  },
  {
    id: 3,
    title: "Front end skill",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.",
    poster: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    date: "17:43",
    tags: ["programming", "computer", "javascript"],
    category: "computer",
    comment: false,
    author: "Mohammad Yousefvand",
  },
  {
    id: 4,
    title: "Front end skill",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.",
    poster: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    date: "17:43",
    tags: ["programming", "computer", "javascript"],
    category: "computer",
    comment: false,
    author: "Mohammad Yousefvand",
  },
  {
    id: 5,
    title: "Front end skill",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.",
    poster: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    date: "17:43",
    tags: ["programming", "computer", "javascript"],
    category: "computer",
    comment: false,
    author: "Mohammad Yousefvand",
  },
];

const PostListPage = () => {
  return (
    <PanelLayout>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts.map((post, index) => (
            <Grid xs={12} sm={4} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
