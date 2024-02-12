export const FetchPosts=async ()=>{
    const res=await fetch("http://localhost:3000/posts");
    const postData=await res.json()
    console.log(postData);
    return postData;

}