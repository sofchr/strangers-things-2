import { fetchAllPosts } from "./API";
import { useState } from "react";
import AllPosts from "./components/AllPosts";
import { useEffect } from "react";
import Nav from "./components/Nav";
// import NavContainer from "./components/NavContainer";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchAllPosts().then((response) => {
      setPosts(response.data.posts);
    });
  }, []);
  return (
    <div>
      <Nav></Nav>
      <h1>Strangers' Things</h1>
      <AllPosts posts={posts} setPosts={setPosts} />
    </div>
  );
}
