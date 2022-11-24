import React, { memo } from "react";
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

// default image for post item
import postImage from "../../../../assets/images/default_blog.jpg";

const PostCard = ({ post, onDeletePost }) => {
  return (
    <Grid xs={12} sm={4} md={4}>
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
                fontSize: "12px",
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
            onClick={() => onDeletePost(post.id)}
            size="small"
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default memo(PostCard);
