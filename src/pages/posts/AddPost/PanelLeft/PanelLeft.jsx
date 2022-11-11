import React, { useState } from "react";
import {
  Paper,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
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
          marginBottom: 8,
        }}
      >
        <TextField fullWidth label="Author Name" id="Author Name" variant="standard" />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginBottom: 2,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
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
    </Paper>
  );
};

export default PanelLeft;
