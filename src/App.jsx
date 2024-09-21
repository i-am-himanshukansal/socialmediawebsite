import "./App.css"
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListprovider from "./store/post-list-store";

function App() {


  const[selectedtab , setselectedtab]  = useState("home");
  return (
    <>
            <PostListprovider>
            <div className="app-container">
                    <Sidebar selectedTab = {selectedtab} setselectedtab = {setselectedtab}></Sidebar>
                           <div className="content"> 
                           <Header></Header>
                           { selectedtab == "home"? (<CreatePost></CreatePost>) :  (<PostList></PostList>)}
                           <Footer></Footer>
                           </div>
           </div>
            </PostListprovider>
           
     
    </>
  )
}

export default App
