import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Home from "../Home/Home";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUserCircle,
  faBars,
  faSearch,
  faTimesCircle,
  faUser,
  faHome,
  faHeart,
  faStar,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
const [style, setStyle] = useState(true)
const toggleNav = () => {
    setStyle(!style)
}
// const toggleNav1 = () => {
//     setStyle('s-sidebar__nav')
// }

    return (
        <div class="s-layout">
 {/* Sidebar */}
<div class="s-layout__sidebar">
  <div class="s-sidebar__trigger">
  <FontAwesomeIcon
          icon={faBars}
          size="lg"
          style={{ display: 'inline-block',
          margin: '1.5em 0 0 1.5em',
          color: '#f07ab0'}}
        //   className={classes.MenuIcon}
          onClick={toggleNav}
        />
  </div>

  <nav class={style ? 's-sidebar__nav' : 'displayNone'}>
  <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          style={{ display: 'inline-block',
          marginTop: '1em', marginLeft: '11rem',
          color: 'white'}}
        //   className={classes.MenuIcon}
          onClick={toggleNav}
        />
     <ul>
        <li>
           <a class="s-sidebar__nav-link" href="/">
           <FontAwesomeIcon
          icon={faHome}
          size="lg"
          style={{color:'white'}}
        /><em>Home</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="/">
           <FontAwesomeIcon
          icon={faUser}
          size="lg"
          style={{color:'white'}}
        /><em>My Profile</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="/">
           <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          style={{color:'white'}}
        /><em>Camera</em>
           </a>
        </li>
     </ul>
  </nav>
</div>

{/* Content */}
<main class="s-layout__content">
  <Home/>
</main>
</div>
    )

}
export default Nav