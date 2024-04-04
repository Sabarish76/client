import React from "react";
import memories from "./images/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";

// import { fetchPostRequest } from "./actions/PostAction";
// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPostRequest());
  // }, [dispatch]);

  return (
    <div className="h-fit w-full lg:w-[80%] mx-auto">
      <div className="text-center flex border-2 justify-center border-grey-100 shadow-xl rounded-lg">
        <div>
          {" "}
          <h1 className="text-3xl font-bold py-5 px-5">Memories</h1>
        </div>
        <div>
          {" "}
          <img src={memories} alt="memories" className="w-14 py-2" />
        </div>
      </div>
      <div className="flex md:justify-around  py-10">
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
