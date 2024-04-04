import React, { useState } from "react";
import FileBase from "react-file-base64";
import { addPostsRequest } from "../../actions/PostAction";
import { useDispatch } from "react-redux";

const Form = () => {
  const [postData, SetPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(addPostsRequest(postData));

    console.log("Posts Submitted Successfully", postData);
  };

  const clear = () => {};

  return (
    <div className="h-fit  border-2 shadow-2xl rounded-lg w-full px-10">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <h1 className="text-3xl font-bold py-5 px-5">Create Memory </h1>
        <div>
          <div className="relative z-0 w-full mb-5  group">
            <input
              type="text"
              name="creator"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={postData.creator}
              onChange={(e) =>
                SetPostData({ ...postData, creator: e.target.value })
              }
              required
            />
            <label
              htmlFor="creator"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Creator
            </label>
          </div>{" "}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={postData.title}
              onChange={(e) =>
                SetPostData({ ...postData, title: e.target.value })
              }
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={postData.message}
              onChange={(e) =>
                SetPostData({ ...postData, message: e.target.value })
              }
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="tags"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={postData.tags}
              onChange={(e) =>
                SetPostData({ ...postData, tags: e.target.value })
              }
              required
            />
            <label
              htmlFor="tags"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tags
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                SetPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white relative  z-0 mb-5 group bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-32 py-2.5 text-center"
        >
          Submit
        </button>
        <br></br>
        <button
          className="text-white relative  z-0 mb-5 group bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-32 pr-[46.5%] py-2.5 text-center"
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
