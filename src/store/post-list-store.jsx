import { createContext, useReducer } from "react";
const DEFAULT_POST_LIST =[ 
    {
        id: "1",
        title: "GO TO MUMBAI",
        body: "I AM GOING TO MUMBAI, good bye see you soon",
        reactions: 2,
        userID: "user-9",
        tags: ["vacations", "trip", "holidays", "summer"]
    },
    {
        id: "2",
        title: "GO TO PARIS",
        body: "Excited for my trip to Paris! Can't wait to see the Eiffel Tower.",
        reactions: 7,
        userID: "user-12",
        tags: ["vacations", "trip", "Europe", "summer"]
    },
    {
        id: "3",
        title: "SUMMER HOLIDAY PLAN",
        body: "Planning a beach vacation in Goa next month.",
        reactions: 4,
        userID: "user-11",
        tags: ["vacations", "beach", "summer", "relaxation"]
    },
    

]
const DEFAULT_CONTEXT = {
    postlist:[],
    addPost : ()=>{},
    deletePost : ()=>{},
};
export const Postlist  = createContext(DEFAULT_CONTEXT);//is me bhi yahi de diya and usereducer me bhi DEFAULT_CONTEXT ED DIYA HAI

const postListReducer=( currPostlist,action)=>{
    let newpostlist  =  currPostlist;
   if(action.type==="DELETE_POST"){
    newpostlist =  currPostlist.filter((post)=>post.id!==action.payload.postid);
   }
   return newpostlist;
}

const PostListprovider = ({children})=>{
    const [postList , dispatchpostList] = useReducer(postListReducer,DEFAULT_POST_LIST); 

    const addPost=()=>{
    }
    const deletePost=(postid)=>{
        console.log(`deleete post call for : ${postid}`);
        dispatchpostList({
            type : "DELETE_POST",
            payload : {
                    postid,
            },
        })
    }
        return (<Postlist.Provider value={{postList,addPost,deletePost}}>{children}</Postlist.Provider>
                
        );
};


export default PostListprovider;