import { useConfirm } from "material-ui-confirm";
import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import usePostApi from "../hooks/usePostApi";

export const PostPageContext = createContext({});

const initialState = {
  content: "",
  tags: [],
  poster: "",
};

const PostPageProvider = ({ children }) => {
  const [postData, setPostData] = useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      category: "Programming",
      comment: true,
    },
  });

  const confirm = useConfirm();

  const contentHandler = (value) => {
    setPostData({
      ...postData,
      content: value,
    });
  };

  const tagHandler = (e) => {
    const {
      target: { value },
    } = e;
    setPostData({
      ...postData,
      tags: typeof value === "string" ? value.split(",") : value,
    });
  };

  const convertImageToStringBase = (file) => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setPostData({
            ...postData,
            poster: result,
          });
        }
      };
      fileReader.readAsDataURL(file);
    } catch (err) {
      console.log(err.message);
    }
  };

  const resetImage = () => {
    setPostData({
      ...postData,
      poster: "",
    });
  };

  const { mutate } = usePostApi(["posts"], "/posts", "post");

  const onSubmit = (validateData) => {
    const formData = { ...validateData, ...postData };
    confirm({ title: "Are you sure add post?" })
      .then(() => {
        mutate(formData);
      })
      .catch(() => {
        console.log("Add Post failed");
      });
    console.log(formData);
  };

  const resetState = () => {
    setPostData(initialState);
    reset();
  };

  return (
    <PostPageContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        setValue,
        getValues,
        postData,
        contentHandler,
        tagHandler,
        convertImageToStringBase,
        resetImage,
        onSubmit,
        resetState,
        watch,
      }}
    >
      {children}
    </PostPageContext.Provider>
  );
};

export default PostPageProvider;
