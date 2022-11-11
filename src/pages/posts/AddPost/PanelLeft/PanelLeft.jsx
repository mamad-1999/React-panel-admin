import React, { useState } from "react";
import {
  Paper,
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

const PanelLeft = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Paper
      sx={{
        padding: "20px 10px",
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
            value={category}
            label="category"
            onChange={handleChange}
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
            control={<Switch defaultChecked />}
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
        <Button sx={{ width: "50%" }} variant="outlined" color="error">
          Cancel
        </Button>
        <Button
          sx={{ width: "202px" }}
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default PanelLeft;
