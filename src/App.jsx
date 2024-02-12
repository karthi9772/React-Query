import { useQuery } from "@tanstack/react-query";
import { FetchPosts } from "./Api/Api";
import { PostList } from "./components/Post-list";
import "./App.css";
const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: FetchPosts,
  });
  console.log(data, isLoading, isError);
  return (
    <div>
      <h1 className="title">My Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
