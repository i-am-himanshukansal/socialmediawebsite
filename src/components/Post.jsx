const Post = ({postdata}) => {//this 
    return (
        <>
         <div className="posts">
         <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title title">{postdata.title}</h5>
                    <p className="card-text body">{postdata.body}</p>
                    {postdata.tags.map((tag)=>( <a href="#" className="btn btn-primary reactions userid"> #{tag} </a>))}
                    
                </div>
            </div>
         
          
         </div>
        </>
    );
};

export default Post;
