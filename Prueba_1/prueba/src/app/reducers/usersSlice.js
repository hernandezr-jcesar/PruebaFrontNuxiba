import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUserPosts, fetchUserTodos } from "../actions/userActions"; // Importa las nuevas acciones

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data.slice(0, 10); // Se obtienen solo los primeros 10 usuarios
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: null,
    posts: [],
    todos: [],
    status: "idle",
    error: null,
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
      state.posts = []; // Limpiar posts cuando se selecciona un nuevo usuario
      state.todos = []; // Limpiar todos cuando se selecciona un nuevo usuario
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchUserTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});
export const { selectUser } = usersSlice.actions;

export default usersSlice.reducer;
