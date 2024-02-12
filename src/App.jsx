import { useQuery } from "@tanstack/react-query";
import { FetchPosts } from "./Api/Api";
import { PostList } from "./components/Post-list";
const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: FetchPosts,
  });
  console.log(data, isLoading, isError);
  return (
    <div>
      <PostList />
    </div>
  );
};

export default App;
