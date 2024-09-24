import { act, createContext, useReducer } from "react";
import { BiCurrentLocation } from "react-icons/bi";
const DEFAULT_POST_LIST =[
    // {
    //     id: "1",
    //     title: "GO TO MUMBAI",
    //     body: "I AM GOING TO MUMBAI, good bye see you soon",
    //     reactions: 2,
    //     userID: "user-9",
    //     tags: ["vacations", "trip", "holidays", "summer"]
    // },
    // {
    //     id: "2",
    //     title: "GO TO PARIS",
    //     body: "Excited for my trip to Paris! Can't wait to see the Eiffel Tower.",
    //     reactions: 7,
    //     userID: "user-12",
    //     tags: ["vacations", "trip", "Europe", "summer"]
    // },
    // {
    //     id: "3",
    //     title: "SUMMER HOLIDAY PLAN",
    //     body: "Planning a beach vacation in Goa next month.",
    //     reactions: 4,
    //     userID: "user-11",
    //     tags: ["vacations", "beach", "summer", "relaxation"]
    // },
    // {
    //     id: "4",
    //     title: "TRIP TO JAPAN",
    //     body: "I'm planning a cultural trip to Japan next spring. Can't wait to explore Kyoto!",
    //     reactions: 5,
    //     userID: "user-15",
    //     tags: ["vacations", "trip", "Asia", "cultural"]
    // },
    // {
    //     id: "5",
    //     title: "ROAD TRIP ACROSS THE USA",
    //     body: "Thinking about a cross-country road trip this summer! Any recommendations?",
    //     reactions: 10,
    //     userID: "user-20",
    //     tags: ["vacations", "road trip", "USA", "adventure"] // Fixed the comma before tags
    // },
    // {
    //     id: "6",
    //     title: "EXPERIMENTING WITH ITALIAN CUISINE",
    //     body: "Tried making homemade pasta for the first time! It was delicious!",
    //     reactions: 8,
    //     userID: "user-18",
    //     tags: ["food", "cooking", "Italian", "recipes"]
    // },
    // {
    //     id: "7",
    //     title: "BAKING A CHOCOLATE CAKE",
    //     body: "Baked a rich chocolate cake for my friend's birthday. It was a hit!",
    //     reactions: 15,
    //     userID: "user-22",
    //     tags: ["food", "baking", "dessert", "celebration"]
    // }
]

const DEFAULT_CONTEXT = {
    postlist:[],
    addPost : ()=>{},
    addInitialposts:()=>{},
    deletePost : ()=>{},
};
export const Postlist  = createContext([]);//is me bhi yahi de diya and usereducer me bhi DEFAULT_CONTEXT ED DIYA HAI

const postListReducer=( currPostlist,action)=>{
    let newpostlist  =  currPostlist;
                    if(action.type==="DELETE_POST"){
                        newpostlist =  currPostlist.filter((post)=>post.id!==action.payload.postid);
                    }else if(action.type ==="ADD_NEW_POST"){
//    
//         newpostlist = [...currPostlist,{
//             id : Date.now(),
//             userID : action.payload.UserID,
//             title : action.payload.PostTitle,
//             body : action.payload.PostBody,
//             reactions : action.payload.Reactions,
//             tags: action.payload.Hashtags,
//         }]}
//                          ///////////////////////////////////////////dono method sahi hai, bas pehle me currpostlist ke bad add ho raha hai
                            ////////////////////////////and second me pehle add ho raha hai
                            newpostlist = [action.payload , ...currPostlist];
                        }else if(action.type==="ADD_INITIAL_POSTS"){
                            newpostlist = action.payload.posts;
                        }
   return newpostlist;
}

const PostListprovider = ({children})=>{
    const [postList , dispatchpostList] = useReducer(postListReducer,DEFAULT_POST_LIST); 

    const addPost=(userID, title, body, reactions,tags)=>{//can take as a,b,c,d,e
            console.log(`${userID} ${title} ${body} ${reactions} ${tags}`);
            dispatchpostList({
                type : "ADD_NEW_POST",
                payload : {
                    id : Date.now(),
                    userID, title, body, reactions,tags
                }
            })
    }

    const addInitialposts=(posts)=>{
        dispatchpostList({
                type :"ADD_INITIAL_POSTS",  
                payload :{
                    posts,
                },
            });
    };
    const deletePost=(postid)=>{
        console.log(`deleete post call for : ${postid}`);
        dispatchpostList({
            type : "DELETE_POST",
            payload : {
                    postid,
            },
        });
    };
        return (<Postlist.Provider value={{postList,addPost,addInitialposts,deletePost}}>{children}</Postlist.Provider>
                
        );
};


export default PostListprovider;