import * as constants from "../constants/PostConstants";

const initialstate = {
  posts: [],
  loading: false,
  error: null,
};

const PostReducer = (state = initialstate, action) => {
  switch (action.type) {
    case constants.GET_POST_REQUEST:
    case constants.ADD_POST_REQUEST:
    case constants.UPDATE_POST_REQUEST:
    case constants.DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case constants.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    case constants.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case constants.UPDATE_POST_SUCCESS:
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      return {
        ...state,
        loading: false,
        posts: updatedPosts,
      };
    case constants.DELETE_POST_SUCCESS:
      const deletedPosts = state.posts.filter(
        (post) => post._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        posts: deletedPosts,
      };

    case constants.GET_POST_FAILURE:
    case constants.ADD_POST_FAILURE:
    case constants.UPDATE_POST_FAILURE:
    case constants.DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default PostReducer;
