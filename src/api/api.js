import axios from "axios";

const url = "http://localhost:8000/posts";

export const FetchPosts = () => axios.get(url);

// export const CreatePosts = (newPost) => axios.post(url, newPost);
