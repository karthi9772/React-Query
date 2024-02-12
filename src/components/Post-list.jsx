import { useQuery, useMutation } from "@tanstack/react-query";
import { FetchPosts, addPost, Fetchtags } from "../Api/Api";

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
  const { data: tagsdata } = useQuery({
    queryKey: ["tags"],
    queryFn: Fetchtags,
  });
  //   const {
  //     mutate,
  //     isPending,
  //     isSuccess,
  //     isError: isPostError,
  //     error: posterror,
  //     reset,
  //   } = useMutation({
  //     mutationFn: addPost,
  //   });

  const submitFn = () => {
    console.log("Posted");
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Enter the new post..."
          className="postbox"
        ></input>
        <div className="tags">
          {tagsdata?.map((tag) => {
            return (
              <div key={tag}>
                <input id={tag} type="checkbox" name={tag}></input>
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>
        <button className="post" onSubmit={submitFn}>
          Post
        </button>
      </form>
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
