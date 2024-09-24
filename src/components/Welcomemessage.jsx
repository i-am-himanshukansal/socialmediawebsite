const Welcomemessage = ({onGetpostClick})=>{
    console.log("welcome message due to no posts");
    return <center  className="welcome-message"> 
        <h1>There are no posts ....</h1>
        <button type="button" 
        className="btn btn-primary"
        onClick={onGetpostClick}>Get posts from server.</button>
    </center>
}
export default Welcomemessage;