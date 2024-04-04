import React, { useEffect } from "react";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../../actions/PostAction";

// import { useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  console.log("posts:", posts);
  console.log("loading:", loading);
  console.log("error:", error);

  // const posts = useSelector((state) => state.posts);
  // console.log(posts);
  return (
    <div>
      Posts
      {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <h1>{post.title}</h1>
              <img src={post.selectedFile} alt="post" />
            </div>
          );
        })}
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
