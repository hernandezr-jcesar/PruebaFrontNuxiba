import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div>
      <h3>Posts:</h3>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <h5>Comments:</h5>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}</strong>: {comment.body}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default UserPosts;
