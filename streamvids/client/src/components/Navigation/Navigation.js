import React, { useState, useCallback } from "react";
import {Link, useHistory } from "react-router-dom";
import './Navigation.css'


const Header = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar(!showSidebar));
// useCallback(() => setShowSidebar(value => !value));
        return (
            <div>
     <div class="header">
       <ul className="nav">
         <div className="logo">
    <li >StreamVids</li>
    </div>
    <div className='lists'>
    
    <li ><Link to={"/"}>Home</Link></li>
    <li >Categories</li>
    <li><Link to={"/upload-a-video"}>Upload Videos</Link></li>
    <li >Login</li>
    <li >Sign Up</li>
    </div>
       </ul>
     </div>
     
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
  
  <label for="openSidebarMenu" class="sidebarIconToggle" onClick={toggleSidebar}>
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  {showSidebar &&(
         <div id="sidebarMenu">
         
          <ul class="sidebarMenuInner">
          <li><a href="/" >Home</a></li>
          <li><a href="/upload-a-video">Upload Videos</a></li>
            <li>Categories</li>
            <li>Photos</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>

        </div>)
        }
      {/* <div id='center' class="main center">
        <div class="mainInner">
          <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
        <div class="mainInner">
          <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
        <div class="mainInner">
          <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
      </div> */}
  </div>
        )
};

export default Header;