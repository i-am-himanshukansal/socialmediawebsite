import Post from "./Post";
import { Postlist } from "../store/post-list-store";
import { useContext } from "react";

const PostList=()=>{
    const {postList} = useContext(Postlist); //postList this is the array of the data consists post
                                            //Postlist this is the context api proider
    // console.log(postList);
    return<>
        {postList.map((post)=>(
             <Post  key={post.id} postdata={post} />
        ))}
    </>
}
export default PostList;