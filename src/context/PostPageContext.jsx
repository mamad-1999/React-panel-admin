import React, { createContext, useState } from "react";
import usePostApi from "../hooks/usePostApi";

export const PostPageContext = createContext({});

const initialState = {
  content: "",
  tags: [],
  comment: true,
};

const PostPageProvider = ({ children }) => {
  const [postData, setPostData] = useState(initialState);

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

  const { mutate: addPost } = usePostApi(["posts"]);

  const onSubmit = (data) => {
    const formData = { ...data, ...postData };
    addPost(formData);
    resetState()
    console.log(formData)
  };

  const resetState = () => {
    setPostData(initialState);
  };

  return (
    <PostPageContext.Provider
      value={{
        postData,
        contentHandler,
        tagHandler,
        commentHandler,
        onSubmit,
        resetState,
      }}
    >
      {children}
    </PostPageContext.Provider>
  );
};

export default PostPageProvider;
