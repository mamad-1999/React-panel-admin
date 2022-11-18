import React, { createContext, useState } from "react";
import usePostApi from "../hooks/usePostApi";

export const PostPageContext = createContext({});

const PostPageProvider = ({ children }) => {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    tags: [],
    comment: true,
  });

  const textFieldHandler = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

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

  const addPostHandler = () => {
    addPost(postData)
  }

  return (
    <PostPageContext.Provider
      value={{
        postData,
        textFieldHandler,
        contentHandler,
        tagHandler,
        commentHandler,
        addPostHandler
      }}
    >
      {children}
    </PostPageContext.Provider>
  );
};

export default PostPageProvider;
