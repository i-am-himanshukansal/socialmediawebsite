import { BiSolidLike } from "react-icons/bi";//like
import { MdDelete } from "react-icons/md";//delete
import { MdOutlinePeopleAlt } from "react-icons/md";    
import styles from "./Post.module.css";
import { Postlist } from "../store/post-list-store";
import { useContext } from "react";
import { BiSolidDislike } from "react-icons/bi";

const Post = ({postdata}) => {//this 

    console.log(postdata)

    const {deletePost} = useContext(Postlist);
    return (
        <>
         <div className={`posts ${styles.allposts}`}>
         <div className={`card ${styles.postss}`}>
                <div className={`card-body %${styles.cardbody}`}>
                    <h5 className="card-title title">{postdata.title}
                                     <button className="delete" onClick={()=>{
                                        console.log("clicked by himanshu kansal");
                                     }}>
                                            <span  key={postdata.id} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
                                            onClick={()=>deletePost(postdata.id)}>
                                                {/* deleting post where post id  */}
                                            <MdDelete />
                                            </span>
                                     </button>
                    </h5>
                    {typeof postdata.reactions==="object" && (
                    <h5><BiSolidLike />{postdata.reactions.likes} <BiSolidDislike/>{postdata.reactions.dislikes}</h5>
                              )}
                              {postdata.reactions.length>0 && (
                    <h5><BiSolidLike />{postdata.reactions}</h5>
                )}

                    <p className="card-text body">{postdata.body}</p>
                    {postdata.tags.map((tag,index)=>( <span key={index} className="btn btn-primary reactions userid hashtag   "> #{tag} </span>))}
                                <div className="alert alert-success reactionalert" role="alert" >
                              {typeof postdata.reactions==="object" && (
                                <span>
                              This post is reacted by <BiSolidLike /> {postdata.reactions.likes} ,  <BiSolidDislike/>{postdata.reactions.dislikes} people<MdOutlinePeopleAlt />  . 
                              </span>
                              )}
                              {postdata.reactions.length>0 && (
                                <span>
                              This post is reacted by <BiSolidLike /> {postdata.reactions}. 
                              </span>
                              )}
                                </div>
                        </div>
            </div>
         
          
         </div>
        </>
    );
};

export default Post;
