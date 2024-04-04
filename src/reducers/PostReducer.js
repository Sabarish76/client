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
    case constants.GET_POST_FAILURE:
    case constants.ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.patload,
      };

    default:
      return state;
  }
};

export default PostReducer;
