import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/posts">Posts</Link>
      <Link to="/">Sign Up/ Log In</Link>
    </div>
  );
}
