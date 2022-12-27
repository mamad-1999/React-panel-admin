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
import categoryPost from "../../../../config/categoryPostConfig";

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

const AddTag = () => {
  const { postData, tagHandler, watch } = useContext(PostPageContext);

  const filterTagWithCategory = categoryPost.find(
    (item) => item.title === watch("category")
  );

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
          {filterTagWithCategory.subCategory.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddTag;
