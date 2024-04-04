import * as api from "../api/api";

export const getposts = () => async (dispatch) => {
  try {
    const { data } = await api.FetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createposts = (post) => async (dispatch) => {
  try {
    const { data } = await api.CreatePosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
