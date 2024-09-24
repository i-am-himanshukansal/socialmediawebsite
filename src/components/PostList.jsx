import Post from "./Post";
import { Postlist } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import Welcomemessage from "./Welcomemessage";
import Loadingspinner from "./Loadingspinner";

const PostList=()=>{
    // const [dataFetched , setdatafetched] = useState(false);
    const {postList ,addInitialposts} = useContext(Postlist); //postList this is the array of the data consists post
                                            //Postlist this is the context api proider
    // console.log(postList);               //to check kin postList me array me post hai ya nhi


    const [fetching , setfetching] =useState(false); //loading message ke liye use kiya hai 

    // useEffect(()=>{
    //     setfetching(true);
    //     console.log( "fetch started");
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data=>{
    //     addInitialposts(data.posts);
    //     setfetching(false);
    //     console.log("fetch end");
    //     });
    // }, []);

    useEffect(()=>{
        setfetching(true);
        console.log("fetch started");
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{
        addInitialposts(data.posts);
        setfetching(false);
        console.log("fetched returned");
         })
            console.log("fetch ended");

            return ()=>{
                console.log("clean up calling");//ye tab call hua jab component mar raha hoga
            }
},[]);
        


    
    
    
    const handleGetPostsclick=()=>{
      //nothing to do
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>{
      addInitialposts(data.posts);
            }
      )};

    return<>
       <div className=" postlistitems">
        { fetching&&<Loadingspinner></Loadingspinner>}
        {!fetching &&  postList.length===0 && <Welcomemessage onGetpostClick={handleGetPostsclick}/>}
        {!fetching &&  postList.map((post)=>(<Post  key={post.id} postdata={post} />))}
       </div>
    </>
}
export default PostList;