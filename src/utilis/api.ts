import {idType, postType} from "../components/post/post-type";

export const URL = "http://localhost:8080";
export const fetchPost = async () => {
  const response = await fetch(`${URL}/posts`);
  return response.json();
};

export const getPost = async (id: idType) => {
  const response = await fetch(`${URL}/posts/${id}`);
  return response.json();
};

export const addPost = async (post: postType) => {
  console.log({post});
  const response = await fetch(`${URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const updatePost = async (post: postType) => {
  console.log({post});
  const response = await fetch(`${URL}/posts/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};
export const deletePost = async (id: idType) => {
  console.log({id});
  const response = await fetch(`${URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
