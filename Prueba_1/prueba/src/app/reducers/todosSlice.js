import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    newTodo
  );
  return response.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

export default todosSlice.reducer;
