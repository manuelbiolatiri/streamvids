import React, { useState } from "react";
import styled from "styled-components";
import {Link, useHistory } from "react-router-dom";
import './Navigation.css'


const Header = () => {

  // const [toggle, toggleNav] = useState(false);
        return (
            <div>
     <div class="header">
       <ul className="nav">
         <div className="logo">
    <li >StreamVids</li>
    </div>
    <div className='lists'>
    
    <li >Home</li>
    <li >Categories</li>
    <li><Link to={"/upload-a-video"}>Upload Videos</Link></li>
    <li >Login</li>
    <li >Sign Up</li>
    </div>

       </ul>
     </div>
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
          <li><Link to={"/upload-a-video"}>Upload Videos</Link></li>
            <li>Categories</li>
            <li>Photos</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
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