import React, { useState } from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import Form from "../Form/Form";

const Posts = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const { posts, loading, error } = useSelector((state) => state.posts);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error:{error}</div>;
  }

  const handleEdit = (post) => {
    setSelectedPost(post);
  };

  const handleCancelEdit = () => {
    setSelectedPost(null);
    console.log("handleCancelEdit:", handleCancelEdit);
  };

  return (
    <div className="container mx-auto">
      {selectedPost ? (
        <Form initialData={selectedPost} onCancelEdit={handleCancelEdit} />
      ) : (
        <div className="grid grid-cols-1 gap-y-64 w-full mx-10 xl:grid-cols-2 xl:gap-10">
          {posts.map((post) => (
            <Post key={post._id} post={post} onEdit={handleEdit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
