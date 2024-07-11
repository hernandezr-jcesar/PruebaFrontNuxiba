import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";

const UserPosts = ({ posts }) => {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        Posts:
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          paddingTop: 3, // Añadir padding alrededor del contenido
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            maxHeight: "55vh", // Altura máxima
            overflowY: "auto", // Scroll vertical si es necesario
            flexGrow: 1,
          }}
        >
          {posts.length > 0 ? (
            posts.map((post) => (
              <Paper
                key={post.id}
                elevation={3}
                sx={{ padding: 3, marginBottom: 4 }}
              >
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  {post.title}
                </Typography>
                <Typography variant='body1' paragraph>
                  {post.body}
                </Typography>
                <Divider variant='middle' />
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{ marginTop: 2 }}
                  align='left'
                >
                  Comments:
                </Typography>
                <List>
                  {post.comments.map((comment) => (
                    <ListItem
                      key={comment.id}
                      alignItems='flex-start'
                      sx={{ pl: 4 }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant='subtitle1' color='textSecondary'>
                            <strong>{comment.name}</strong>
                          </Typography>
                        }
                        secondary={comment.body}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            ))
          ) : (
            <Typography variant='body1'>No posts available</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPosts;
