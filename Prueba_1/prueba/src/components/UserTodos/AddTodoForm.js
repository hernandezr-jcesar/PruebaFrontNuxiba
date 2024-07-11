import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../app/reducers/todosSlice"; // Asegúrate de tener una acción para agregar todos

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [newTodoId, setNewTodoId] = useState(null); // Estado para guardar el ID de la nueva tarea
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    const newTodo = {
      userId: selectedUser.id,
      title,
      completed,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );

      if (response.ok) {
        const newTodoData = await response.json();
        dispatch(addTodo(newTodoData)); // Dispatch de la acción para agregar la tarea en el store
        setNewTodoId(newTodoData.id); // Guardar el ID de la nueva tarea para mostrarlo
        setTitle("");
        setCompleted(false);
      } else {
        console.error("Failed to save the todo");
      }
    } catch (error) {
      console.error("Failed to save the todo", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label='Title'
          variant='outlined'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{ flexGrow: 1 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          }
          label='Completed'
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
        {newTodoId && (
          <Typography variant='body1' color='success'>
            New todo saved with ID: {newTodoId}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default AddTodoForm;
