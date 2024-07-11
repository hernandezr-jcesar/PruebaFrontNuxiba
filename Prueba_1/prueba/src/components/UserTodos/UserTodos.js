import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import AddTodoForm from "./AddTodoForm";

const UserTodos = ({ todos }) => {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        Todos:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddTodoForm />
        </Grid>

        <Grid
          container
          sx={{
            paddingTop: 3, // Añadir padding alrededor del contenido
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              maxHeight: "36vh", // Altura máxima
              overflowY: "auto", // Scroll vertical si es necesario
              flexGrow: 1,
            }}
          >
            {todos.length > 0 ? (
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
                <List>
                  {todos.map((todo) => (
                    <ListItem key={todo.id} sx={{ pl: 2 }}>
                      <ListItemText
                        primary={
                          <>
                            <Typography variant='body1' component='span'>
                              ID: {todo.id} -
                            </Typography>
                            <Typography
                              variant='body1'
                              component='span'
                              fontWeight='bold'
                            >
                              {todo.title}
                            </Typography>
                          </>
                        }
                        secondary={
                          <Typography
                            variant='body2'
                            color={todo.completed ? "green" : "red"}
                          >
                            {todo.completed ? "Completed" : "Not Completed"}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            ) : (
              <Typography variant='body1'>No todos available</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserTodos;
