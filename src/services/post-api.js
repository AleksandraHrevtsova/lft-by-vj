import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchPosts = () => {
  return axios.get(`/posts`).then(response => response.data);
};

export const postPost = post => {
  return axios.post(`/posts`, post).then(response => response.data);
};

export const deletePost = id => {
  return axios.delete(`/posts/${id}`);
};

export const updatePost = (id, update) => {
  return axios.patch(`/posts/${id}`, update).then(response => response.data);
};
