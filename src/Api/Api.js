export const FetchPosts=async ()=>{
    const res=await fetch("http://localhost:3000/posts?_sort=-id");
    const postData=await res.json()
    console.log(postData);
    return postData;

}
export const addPost=async(post)=>{
const response=await fetch("http://localhost:3000/posts",{
    method:"POST",
    headers:{
        "content/type": "application/json"
    },
    body:JSON.stringify(post)

})
return response.json();
}