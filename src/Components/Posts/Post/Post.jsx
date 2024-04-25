import React, { useState } from "react";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deletePostRequest,
  likePostRequest,
} from "../../../actions/PostAction";

const Post = ({ post, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleEditClick = () => {
    console.log(isEditing);
    setIsEditing(true);
    onEdit(post);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deletePostRequest(post._id));
  };

  const handlelikeClick = () => {
    dispatch(likePostRequest(post._id));
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <div className="max-w-sm  bg-white border-2 border-grey-200 shadow-xl rounded-lg">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="rounded-t-lg max-h-84 w-full"
            src={post.selectedFile}
            alt=""
          />
          {hovered && (
            <div className="absolute inset-0 flex flex-row justify-between bg-gray-900 bg-opacity-50 text-white">
              <div className="mx-2 my-2">
                <h5 className="text-xl font-bold mb-2">{post.creator}</h5>
                <p>{moment(post.createdAt).fromNow()}</p>
              </div>
              <button
                className="h-5 text-white font-bold rounded-sm my-2 mx-3 px-4 bg-gray-900 bg-opacity-30 hover:bg-opacity-100"
                onClick={handleEditClick}
              >
                <BsThreeDots />
              </button>
            </div>
          )}
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-md font-bold text-slate-400">
              {post.tags.map((tag) => `#${tag}`)}
            </h5>
          </div>
          <p className="mb-2 font-bold text-xl text-black">{post.title}</p>
          <p className="mb-2 font-normal text-gray-700">{post.message}</p>
        </div>
        <div className="flex justify-between p-5 ">
          <div
            className="flex items-center cursor-pointer text-blue-600 hover:text-blue-400"
            onClick={handlelikeClick}
          >
            <AiFillLike />
            <div className="px-2 flex items-center">
              Like <span className="px-1">{post.likeCount}</span>
            </div>
          </div>
          <div
            className="flex items-center cursor-pointer text-red-600 hover:text-red-400"
            onClick={handleDeleteClick}
          >
            <MdDelete />
            <div className="px-2">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
