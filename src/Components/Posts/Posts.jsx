import React, { useState } from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import Form from "../Form/Form";

const Posts = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const { posts, loading, error } = useSelector((state) => state.posts);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-screen-lg">
            {posts.map((post) => (
              <Post key={post._id} post={post} onEdit={handleEdit} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
