import React, { memo, useContext } from "react";
import { Button, Stack, IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { PostPageContext } from "../../../../context/PostPageContext";

const IMAGE_TYPE = /image\/(png|jpg|jpeg|gif)/i;

const ImageUpload = () => {
  const { convertImageToStringBase, resetImage, postData } =
    useContext(PostPageContext);

  const handelFileUpload = (file) => {
    if (file[0].type.match(IMAGE_TYPE) && file[0].size < 2_000_000) {
      convertImageToStringBase(file[0]);
    }
  };

  const handelChange = (e) => {
    const file = Array.from(e.target.files);
    handelFileUpload(file);
    e.target.value = null;
  };

  const dropHandler = (e) => {
    e.preventDefault();
    const file = Array.from(e.dataTransfer.files);
    handelFileUpload(file);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const styles = {
    paperContainer: {
      backgroundImage: `url(${postData.poster})`,
      backgroundSize: "70%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      // ...(onfile && { filter: "grayscale(100%)" }),
    },
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "120px",
        position: "relative",
        border: "0.15rem dashed #808080",
      }}
      style={styles.paperContainer}
    >
      {postData.poster ? (
        <Tooltip title="delete to change image upload" placement="top">
          <IconButton
            onClick={() => resetImage()}
            sx={{
              position: "absolute",
              right: 5,
              top: 5,
              zIndex: 4,
              opacity: 1,
            }}
            aria-label="delete"
            size="medium"
            color="error"
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      ) : null}
      <Tooltip
        title="Your image format should be jpg, jpeg, png, gif and smaller than 2MB"
        placement="top"
      >
        <Button
          sx={{
            height: "100%",
            fontSize: "12px",
            color: "#acacac",
          }}
          fullWidth
          color="primary"
          disableRipple
          component="label"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          size="large"
          startIcon={postData.poster ? null : <CloudUploadIcon />}
        >
          {postData.poster ? "" : "Drag & Drop or Browse to upload"}
          <input onChange={(e) => handelChange(e)} type="file" hidden />
        </Button>
      </Tooltip>
    </Stack>
  );
};

export default memo(ImageUpload);
