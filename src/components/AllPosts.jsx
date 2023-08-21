import { useNavigate } from "react-router-dom";
import { makePost } from "../API";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import LoginForm from "./LoginForm";
import NewPost from "./NewPost";

export default function AllPosts({ posts }) {
  const [token, setToken] = useState(null);
  // const [post, setPost] = useState();
  const navigate = useNavigate();
  const post1 = {
    title: "Blender",
    description: "still works, barely used",
    price: "$20",
    location: "",
    willDeliver: false,
  };

  return (
    <div>
      <SignUpForm token={token} setToken={setToken} />
      <LoginForm token={token} setToken={setToken} />
      <NewPost token={token} setToken={setToken} />
      {token == null ? null : (
        <button onClick={() => makePost(post1, token)}>Click me</button>
      )}
      {posts.map((post) => {
        return (
          <div className="single-post" key={post._id}>
            <p>Offering: {post.title}</p>
            <p>About: {post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
          </div>
        );
      })}
    </div>
  );
}
