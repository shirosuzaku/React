import React, { useState, useEffect ,useRef } from 'react';
import '../Nav.css'
const Nav = () => {
  const nav = useRef(null)
  const navlist = useRef(null)
  const navbtn = useRef(null)

  const showNavMoble = () => {
    nav.current.classList.toggle('expand')
    if(nav.current.classList.contains('expand')){
      navbtn.current.src = "/src/assets/close.svg"
    }else{
      navbtn.current.src = "/src/assets/menu.svg"
    }
  }
  
  let lastScrollTop = 0;

  useEffect(() => {
    // if(window.innerWidth < 700){
    //   nav.current.classList.add('moble')
    // }else{
    //   nav.current.classList.remove('moble')
    // }
  
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.current.classList.add("hidenav");
        if(nav.current.classList.contains('expand')){
          nav.current.classList.remove("expand");
          navbtn.current.src = "/src/assets/menu.svg"
        }
      } else {
        // Scrolling up
        nav.current.classList.remove("hidenav");
      }
      
      lastScrollTop = scrollTop;
    });




    return () => {
      console.log("Component Unmounted"); // Runs on Unmount
    };
  }); // Runs when `count` changes

  return (
    <div ref={nav} className='nav'>
      <div className="logo">
        {/* for dev */}
        {/* <img src="/src/assets/logo.svg"  width="80px" height="80px" alt=""  /> */}
        <img src="/assets/logo.svg"  width="80px" height="80px" alt=""  />
      </div>
      <div ref={navlist} className="navlist">
        <button className="navlink">Services</button>
        <button className="navlink">Blog</button>
        <button className="navlink">About</button>
        <button className="navlink">Contact</button>
      </div>
      <div className="showNav">
        {/* for dev */}
        {/* <img  ref={navbtn}  src="/assets/menu.svg" width="40px" height="40px" alt="" onClick={showNavMoble} /> */}
        <img  ref={navbtn}  src="/src/assets/menu.svg" width="40px" height="40px" alt="" onClick={showNavMoble} />
      </div>
    </div>
  );
};

export default Nav;
