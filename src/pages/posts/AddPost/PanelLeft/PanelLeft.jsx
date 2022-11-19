import React, { useContext } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddTag from "./AddTag";

// import component
import BoxLayout from "../../../../components/BoxLayout/BoxLayout";

// context
import { PostPageContext } from "../../../../context/PostPageContext";

const PanelLeft = () => {
  const {
    postData,
    textFieldHandler,
    commentHandler,
    addPostHandler,
    resetState,
  } = useContext(PostPageContext);

  return (
    <BoxLayout column={true}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginBottom: 5,
        }}
      >
        <TextField
          fullWidth
          label="Author Name"
          id="Author Name"
          variant="standard"
          name="author"
          value={postData.author}
          onChange={textFieldHandler}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginBottom: 2,
        }}
      >
        <Typography variant="p" sx={{ paddingLeft: 1 }}>
          option
        </Typography>
        <FormControl sx={{ marginTop: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={postData.category}
            label="category"
            name="category"
            onChange={textFieldHandler}
          >
            <MenuItem value="Politics">Politics</MenuItem>
            <MenuItem value="Sport">Sport</MenuItem>
            <MenuItem value="Programming">Programming</MenuItem>
            <MenuItem value="Computer">Computer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <AddTag />
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginBottom: 4,
          paddingLeft: 2,
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={postData.comment} onChange={commentHandler} />
            }
            label="Comment On"
          />
        </FormGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          onClick={resetState}
          sx={{ width: "50%" }}
          variant="outlined"
          color="error"
        >
          Cancel
        </Button>
        <Button
          sx={{ width: "202px" }}
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          onClick={addPostHandler}
        >
          Send
        </Button>
      </Box>
    </BoxLayout>
  );
};

export default PanelLeft;
