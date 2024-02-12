import { useQuery } from "@tanstack/react-query";
import { FetchPosts } from "../Api/Api";

export const PostList = () => {
  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: FetchPosts,
  });
  return (
    <div className="container">
      {isLoading && <h1>loading</h1>}
      {isError && <h1>{error?.message}</h1>}
      {postData?.map((post) => {
        return (
          <div key={post.id} className="post">
            <div>{post.title}</div>
            {post.tags?.map((tag) => (
              <span className="tags" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};
