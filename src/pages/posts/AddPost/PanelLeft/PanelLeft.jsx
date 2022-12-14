import React, { useContext } from "react";
import {
  Box,
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
import { Input } from "../../../../components/FormControl";

// context
import { PostPageContext } from "../../../../context/PostPageContext";
import ImageUpload from "./ImageUpload";

import categoryPost from "../../../../config/categoryPostConfig";

const PanelLeft = () => {
  const { resetState, register, errors, setValue, getValues } =
    useContext(PostPageContext);

  return (
    <BoxLayout column={true}>
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
        <Input
          sx={{ marginTop: 2 }}
          fullWidth
          select
          id="demo-simple-select"
          label="category"
          onChange={(e) => setValue("category", e.target.value, true)}
          defaultValue="Programming"
          {...register("category", {
            required: "required",
          })}
          error={Boolean(errors.category)}
        >
          {categoryPost.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Input>
      </Box>
      <AddTag />
      <ImageUpload />
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginY: 3,
          paddingLeft: 2,
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                defaultChecked={getValues("comment")}
                {...register("comment")}
              />
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
          type="submit"
        >
          Send
        </Button>
      </Box>
    </BoxLayout>
  );
};

export default PanelLeft;
