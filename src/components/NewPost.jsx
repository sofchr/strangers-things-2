// export default function NewPost() {
//   return <h1>I'm a form to post new things</h1>;
// }

import React, { useState } from "react";
import { makePost } from "../API/index";

export default function NewPost({ posts, setPosts, token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await makePost(
      {
        title: title,
        description: description,
        price: price,
        location: location,
        delivery: delivery,
      },
      token
    );
    if (response.success) {
      console.log("New Post: ", response.data.posts.newListing);

      // Resetting all players manually
      const newPostsList = [...posts, response.data.posts.newListing];
      setPosts(newPostsList);

      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
      setDelivery(null);
    } else {
      setError(response.error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        value={title}
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={description}
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        value={price}
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        value={location}
        type="text"
        name="location"
        placeholder="location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
