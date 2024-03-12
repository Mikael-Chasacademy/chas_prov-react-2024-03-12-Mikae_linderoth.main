// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      const filteredPosts = data.filter((post) => post.id <= 5);
      setPosts(filteredPosts);
    }

    getPosts();
  }, []);

  const handleClick = (postId) => {
    console.log("Clicked post ID:", postId);
  };

  return (
    <main>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <button onClick={() => handleClick(post.id)}>{post.title}</button>
          </div>
        );
      })}
    </main>
  );
}
export default App;
