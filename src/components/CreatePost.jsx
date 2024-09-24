import { useContext, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { Postlist } from "../store/post-list-store";


const CreatePost = () => {
    
    const {addPost} = useContext(Postlist);

    const UserIDelement = useRef();
    const PostTitleelement = useRef(); 
    const Postbodyelement = useRef();
    const Reactionselement = useRef();
    const Hashtagselement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const UserID  = UserIDelement.current.value;
        const PostTitle  = PostTitleelement.current.value;
        const PostBody  = Postbodyelement.current.value;
        const Reactions  = Reactionselement.current.value;
       const Hashtags  = Hashtagselement.current.value
        .split(/\s+/)  // Split by any number of spaces
        .filter(tag => tag.trim() !== ''); // Remove empty tags

    // console.log(Hashtags);  // Check the format of the hashtags
        addPost(UserID, PostTitle, PostBody, Reactions,Hashtags);
        

    };  


    return (
        <>
            <div className="bd-example m-0 border-0">
                <form onSubmit={handleSubmit} className="create-post">
                                <div className="mb-3">
                                    <label htmlFor="USERID" className="form-label">UserID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="USERID"
                                        aria-describedby="userhelp"
                                        placeholder="Enter your userID"
                                        ref={UserIDelement}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="titleofpost" className="form-label">Post title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titleofpost"
                                        aria-describedby="posttitlehelp"
                                        placeholder="How are you feeling today..."
                                        ref={PostTitleelement}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="bodyofpost" className="form-label">Post content</label>
                                    <textarea
                                        className="form-control"
                                        id="bodyofpost"
                                        aria-describedby="contenthelp"
                                        placeholder="Tell us more about it..."
                                        rows="4"
                                        ref={Postbodyelement}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="reactions" className="form-label">Reactions</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="reactions"
                                        aria-describedby="reactionshelp"
                                        placeholder="How many people reacted to your post..."
                                        ref={Reactionselement}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="hashtags" className="form-label">Hashtags</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="hashtags"
                                        aria-describedby="hashtagshelp"
                                        placeholder="Enter hashtags like: #cheetah #sher #cool #enjoying #party #college_life #kansal_system"
                                        ref={Hashtagselement}
                                    />
                                </div> 
                    <button type="submit" className ="btn btn-primary"
                    onClick={handleSubmit}><IoSend/>  Post</button>
                </form>
            </div>
        </>
    );
};

export default CreatePost;
