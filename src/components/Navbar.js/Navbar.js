import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  const handelOnclick=()=>{
      let targetelement=document.querySelector('.categories')
      targetelement.classList.toggle('active')
  }
 
  return (

    <nav className="navbar">
        <div className="logo-box">
            <img src="./logo.png" alt="logo" />
        </div>
        
        <div className="categories" >
            <ul className="nav-list">
            <li className="list-item" onClick={handelOnclick}><Link to="/top">top </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/business">business</Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/entertainment">entertainment </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/environment">environment </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/food">food</Link> </li>
            <li className="list-item" onClick={handelOnclick}><Link to="/health">health </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/politics">politics </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/science">science </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/sports">sports  </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/technology">technology </Link></li>
            <li className="list-item" onClick={handelOnclick}><Link to="/world">world </Link></li>
            </ul>
        </div>
        <div className="hamburger" onClick={handelOnclick}>
            <span className="ham-lines"></span>
            <span className="ham-lines"></span>
            <span className="ham-lines"></span>
        </div>
    </nav>
  )
};

export default Navbar;

