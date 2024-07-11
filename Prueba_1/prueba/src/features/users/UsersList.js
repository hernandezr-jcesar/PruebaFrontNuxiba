import React, { useEffect } from "react";
import { Container, Grid, ListItemText, Paper } from "@mui/material";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUser } from "./usersSlice";
import UserDetail from "./UserDetail";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const handleUserClick = (user) => {
    dispatch(selectUser(user));
  };

  let content;
  console.log(userStatus);
  if (userStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (userStatus === "succeeded") {
    content = (
      <List component='nav' aria-label='user list'>
        {users.map((user) => (
          <ListItem button key={user.id} onClick={() => handleUserClick(user)}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    );
    console.log(users);
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <Container sx={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Grid container spacing={3}>
        {/* Lista de usuarios (1/3 de la pantalla) */}
        <Grid item xs={4}>
          <h2>Users</h2>
          <Paper elevation={3} style={{ padding: "20px" }}>
            {content}
          </Paper>
        </Grid>
        {/* Detalles del usuario (2/3 de la pantalla) */}
        <Grid item xs={8}>
          <UserDetail />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UsersList;
