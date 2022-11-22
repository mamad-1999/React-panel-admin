import React, { createContext, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import usePostApi from "../hooks/usePostApi";

export const PostPageContext = createContext({});

const initialState = {
  content: "",
  tags: [],
  comment: true,
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
  } = useForm({
    defaultValues: {
      title: "",
      author: "Admin",
      category: "",
    },
  });

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

  const commentHandler = (e) => {
    setPostData({
      ...postData,
      comment: e.target.checked,
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

  const { mutate } = usePostApi(["posts"]);

  const onSubmit = (validateData) => {
    const formData = { ...validateData, ...postData };
    mutate(formData);
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
        postData,
        contentHandler,
        tagHandler,
        commentHandler,
        convertImageToStringBase,
        resetImage,
        onSubmit,
        resetState,
      }}
    >
      {children}
    </PostPageContext.Provider>
  );
};

export default PostPageProvider;
