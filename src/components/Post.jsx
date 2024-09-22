import { BiSolidLike } from "react-icons/bi";//like
import { MdDelete } from "react-icons/md";//delete
import { MdOutlinePeopleAlt } from "react-icons/md";    
import styles from "./Post.module.css";
import { Postlist } from "../store/post-list-store";
import { useContext } from "react";
const Post = ({postdata}) => {//this 


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
                    <h5><BiSolidLike />{postdata.reactions}</h5>
                    <p className="card-text body">{postdata.body}</p>
                    {postdata.tags.map((tag,index)=>( <span key={index} className="btn btn-primary reactions userid hashtag   "> #{tag} </span>))}
                                <div className="alert alert-success reactionalert" role="alert" >
                              This post is reacted by <BiSolidLike /> {postdata.reactions} people<MdOutlinePeopleAlt />  . 
                                </div>
                        </div>
            </div>
         
          
         </div>
        </>
    );
};

export default Post;
