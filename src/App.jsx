import React, { useEffect } from "react";
import memories from "./images/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";

import { useDispatch } from "react-redux";
import { fetchPostRequest } from "./actions/PostAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  return (
    <div className="h-fit w-full lg:w-[80%] mx-auto">
      <div className="text-center flex border-2 justify-center border-grey-100 bg-white shadow-xl rounded-lg">
        <div>
          {" "}
          <h1 className="text-3xl font-bold py-5 px-5">Memories</h1>
        </div>
        <div>
          {" "}
          <img src={memories} alt="memories" className="w-14 py-2" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between  py-10">
        <div className="">
          <Posts />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
