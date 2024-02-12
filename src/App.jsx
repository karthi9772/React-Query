import { PostList } from "./components/Post-list";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1 className="title">My Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
