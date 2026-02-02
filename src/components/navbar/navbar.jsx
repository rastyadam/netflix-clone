import React from 'react'
import './navbar.css'
import logo from "/assets_netflix2/logo.png";
import search_icon from "/assets_netflix2/search_icon.svg";
import bell_icon from "/assets_netflix2/bell_icon.svg";
import profile_img from "/assets_netflix2/profile_img.png";
import caret_icon from "/assets_netflix2/caret_icon.svg";



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
              <li>home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt=""  className='icons'/>
          <p>childern</p>
          <img src={bell_icon} alt=""  className='icons'/>
          <div className="navbar-profile">
            <img src={profile_img} alt=""  className='profile'/>
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
        </div>
    </div>
        </div>
        </div>
  )
}

export default Navbar