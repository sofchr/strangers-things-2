import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <h2>This is my nav bar</h2>
      <Link to="/posts">Posts</Link>
      <Link to="/">Sign Up/ Log In</Link>
    </div>
  );
}
