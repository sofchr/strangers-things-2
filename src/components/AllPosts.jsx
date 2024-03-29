// import { useNavigate } from "react-router-dom";
import { deletePost, makePost } from "../API";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import LoginForm from "./LoginForm";
import NewPost from "./NewPost";

export default function AllPosts({ posts, setPosts }) {
  const [token, setToken] = useState(null);
  const [_id, set_Id] = useState("");

  return (
    <div>
      <div className="intro">
        <SignUpForm token={token} setToken={setToken} />
        <LoginForm token={token} setToken={setToken} />
        {token == null ? null : (
          <h4>You're logged in! Make or delete a post.</h4>
        )}

        <NewPost token={token} posts={posts} setPosts={setPosts} _id={set_Id} />
      </div>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="single-post" key={post._id}>
              <p>Offering: {post.title}</p>
              <p>About: {post.description}</p>
              <p>Price: {post.price}</p>
              <p>Location: {post.location}</p>
              {token == null ? null : (
                <button onClick={() => deletePost(token, post._id)}>
                  Delete Post
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
