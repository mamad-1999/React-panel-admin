import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ text, link }) => {
  return (
    <Button
      LinkComponent={Link}
      to={link}
      size="medium"
      variant="contained"
      sx={{
        backgroundColor: "#0063cc",
        color: "#fff",
        width: { xs: "100%", sm: "200px" },
      }}
      startIcon={<AddIcon />}
    >
      {text}
    </Button>
  );
};

export default AddButton;
