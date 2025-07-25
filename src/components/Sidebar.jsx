const Sidebar = ({selectedTab,setselectedtab}) => {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">SOCIAL MEDIA </span>
        </a>
        <hr />
                  <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item" onClick={()=>setselectedtab("home")} >
                              <a href="#" className={`nav-link text-white ${selectedTab === "home" ? 'active' : ''}`} aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                                Home
                              </a>
                            </li>
                                          <li onClick={()=>{  
                                            console.log("create post clicked");
                                            setselectedtab("createpost");
                                          }} >
                                            <a href="#" className={`nav-link text-white  ${selectedTab==="createpost" && 'active'}`}>
                                              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                                              Create Post
                                            </a>
                                          </li>
                  </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
           {/* this image tag is not useful when i am not using image instead of using text and hashtags */}
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Sidebar;