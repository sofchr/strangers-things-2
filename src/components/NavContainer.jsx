import { Routes, Route } from "react-router-dom";
import AllPosts from "./AllPosts";
import Messages from "./Messages";
import Login from "./SignUpForm";

export default function NavContainer() {
  return (
    <>
      <h1>I am a Navbar</h1>
      {/* // <div id="nav-section">
    //   <Routes>
    //     <Route path="/" element={AllPosts()} />
    //     <Route path="/messages" element={Messages()} />
    //     <Route path="/logout" element={Login()} />
    //   </Routes>
    // </div> */}
    </>
  );
}
