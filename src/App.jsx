import { fetchAllPosts } from "./API";
import { useState } from "react";
import AllPosts from "./components/AllPosts";
import { useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchAllPosts().then((res) => {
      setPosts(res.data.posts);
    });
  }, []);
  return (
    <div>
      Hi
      <AllPosts posts={posts} />
    </div>
  );
}

// export default function AllPlayers({ players }) {
//   const navigate = useNavigate();

//   return (
//     <h1>
//       {players.map((player) => {
//         return (
//           <>
//             <div key={player.id}>
//               <h2>{player.name}</h2>
//               <p>{player.id}</p>
//               <p>{player.breed}</p>

//               <img src={player.imageUrl} alt={player.name} />
//               <br />
//               <button
//                 key={player.id}
//                 onClick={() => navigate(`players/${player.id}`)}
//               >
//                 See Pup Details
//               </button>
//             </div>

//             <div>
//               <h2>{player.name}</h2>
//             </div>
//           </>
//         );
//       })}
//     </h1>
//   );
// }
