import { AiOutlineLike } from "react-icons/ai";
import styles from "./Post.module.css";
const Post = ({postdata}) => {//this 
    return (
        <>
         <div className={`posts ${styles.allposts}`}>
         <div className={`card ${styles.postss}`} style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title title">{postdata.title}</h5>
                    <h5><AiOutlineLike />{postdata.reactions}</h5>
                    <p className="card-text body">{postdata.body}</p>
                    {postdata.tags.map((tag)=>( <span className="btn btn-primary reactions userid"> #{tag} </span>))}
                </div>
            </div>
         
          
         </div>
        </>
    );
};

export default Post;
