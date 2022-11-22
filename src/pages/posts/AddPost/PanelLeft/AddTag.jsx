import React, { useContext } from "react";
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@mui/material";

// context
import { PostPageContext } from "../../../../context/PostPageContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "React js",
  "Javascript",
  "Front-end",
  "Back-end",
  "Next js",
  "Css",
  "Bootstrap",
  "Material UI",
  "Linux",
  "Tailwind css",
];

const AddTag = () => {
  const { postData, tagHandler } = useContext(PostPageContext);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        marginBottom: 2,
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={postData.tags}
          onChange={tagHandler}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddTag;
