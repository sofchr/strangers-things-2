import { useState } from "react";

export default function SignUpForm(props) {
  console.log(props);
  const { token, setToken } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //new state for when someone inputs their username
  const [newUsername, setNewUsername] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: { username, password } }),
        }
      );
      const result = await response.json();
      setToken(result.data.token);
      //attempt at displaying username
      if (result.success) {
        setNewUsername(username);
      }
      console.log(newUsername);
      console.log("token", token);
      console.log("result", result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      {/* display new username below*/}
      {newUsername && <p>Welcome, {newUsername}!</p>}
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: {""}
          <input
            // type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password: {""}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
