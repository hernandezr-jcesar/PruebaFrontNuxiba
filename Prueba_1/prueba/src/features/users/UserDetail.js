import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserPosts, fetchUserTodos } from "./userActions"; // Agrega estas acciones si aún no existen
import UserPosts from "./UserPosts";
import UserTodos from "./UserTodos";
import UserDetailsTable from "./userDetailsTable";
import { Container, Grid, Button } from "@mui/material";

const UserDetail = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const posts = useSelector((state) => state.users.posts);
  const todos = useSelector((state) => state.users.todos);

  // Estado local para controlar qué sección mostrar
  const [displaySection, setDisplaySection] = useState(null);

  const handleFetchPosts = () => {
    if (selectedUser) {
      dispatch(fetchUserPosts(selectedUser.id));
      setDisplaySection("posts"); // Mostrar la sección de posts
    }
  };

  const handleFetchTodos = () => {
    if (selectedUser) {
      dispatch(fetchUserTodos(selectedUser.id));
      setDisplaySection("todos"); // Mostrar la sección de todos
    }
  };
  if (!selectedUser) {
    return (
      <Container>
        <Grid item xs={12}>
          <div>Select a user to see details</div>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>User Details</h2>
          <UserDetailsTable user={selectedUser} />
        </Grid>

        <Grid item xs={6}>
          <Button
            variant='contained'
            onClick={handleFetchPosts}
            fullWidth
            sx={{
              backgroundColor: displaySection === "posts" ? "#2196f3" : "",
            }}
          >
            Get Posts
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant='contained'
            onClick={handleFetchTodos}
            fullWidth
            sx={{
              backgroundColor: displaySection === "todos" ? "#2196f3" : "",
            }}
          >
            Get Todos
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            maxHeight: "60vh", // Altura máxima
            overflowY: "auto", // Scroll vertical si es necesario
            flexGrow: 1, // Ocupa todo el espacio disponible
            display: displaySection === "posts" ? "block" : "none", // Mostrar solo si se selecciona la sección de posts
          }}
        >
          <UserPosts posts={posts} />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            maxHeight: "60vh", // Altura máxima
            overflowY: "auto", // Scroll vertical si es necesario
            flexGrow: 1, // Ocupa todo el espacio disponible
            display: displaySection === "todos" ? "block" : "none", // Mostrar solo si se selecciona la sección de todos
          }}
        >
          <UserTodos todos={todos} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetail;
