import { useNavigate } from "react-router-dom";
// import CreatePlayerForm from "./NewPlayerForm";
import { makePost } from "../API";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

export default function AllPosts({ posts }) {
  const [token, setToken] = useState(null);
  // const navigate = useNavigate();
  const post1 = {
    title: "Car",
    description: "clunker",
    price: "$250",
    location: "tbd",
    willDeliver: false,
  };

  return (
    <div>
      <SignUpForm token={token} setToken={setToken} />
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
