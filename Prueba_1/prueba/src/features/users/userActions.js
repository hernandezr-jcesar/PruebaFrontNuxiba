import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserPosts = createAsyncThunk(
  "users/fetchUserPosts",
  async (userId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    // Obtener comentarios para cada post
    const posts = response.data;
    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        const commentsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        const comments = commentsResponse.data;
        return { ...post, comments };
      })
    );
    return postsWithComments;
  }
);

export const fetchUserTodos = createAsyncThunk(
  "users/fetchUserTodos",
  async (userId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    );

    // Ordenar los todos por id de mayor a menor
    const todos = response.data.sort((a, b) => b.id - a.id);

    return todos;
  }
);
