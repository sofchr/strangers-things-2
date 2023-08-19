// export default function AllPosts() {
//   return <h1>"All Active Posts Below"</h1>;
// }
import { useNavigate } from "react-router-dom";
// import CreatePlayerForm from "./NewPlayerForm";

export default function AllPosts({ posts }) {
  const navigate = useNavigate();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.location}</p>
          </div>
        );
      })}
    </div>
  );
}
