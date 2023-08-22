import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <h6>in another life this would be a functioning nav bar below</h6>
      <Link to="/posts">Posts</Link>
      <Link to="/">Sign Up/ Log In</Link>
    </div>
  );
}
