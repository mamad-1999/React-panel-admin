import React, { useRef } from "react";
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import { Grid, Box, TextField } from "@mui/material";

// import editor
import JoditEditor from "jodit-react";
import PanelLeft from "./PanelLeft/PanelLeft";

// import component
import Title from "../../../components/Title/Title";
import BoxLayout from "../../../components/BoxLayout/BoxLayout";

// context
import { PostPageContext } from "../../../context/PostPageContext";
import { useContext } from "react";

// validation
import { useForm } from "react-hook-form";

const AddPostPage = () => {
  const editor = useRef(null);
  const { postData, contentHandler, onSubmit } = useContext(PostPageContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <PanelLayout>
      <Title>Add Post</Title>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <PanelLeft register={register} errors={errors} />
          </Grid>
          <Grid item xs={8}>
            <BoxLayout column={true}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  marginBottom: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Post Title"
                  id="Post Title"
                  name="title"
                  {...register("title", {
                    required: "required",
                  })}
                  error={Boolean(errors.title)}
                  helperText={errors.title ? errors.title.message : " "}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <JoditEditor
                  ref={editor}
                  value={postData.content}
                  config={{
                    readonly: false,
                    style: {
                      height: "300px",
                    },
                    theme: "dark",
                  }}
                  tabIndex={1}
                  onBlur={(value) => contentHandler(value)}
                  onChange={(value) => {}}
                />
              </Box>
            </BoxLayout>
          </Grid>
        </Grid>
      </form>
    </PanelLayout>
  );
};

export default AddPostPage;
