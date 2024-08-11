"use client"
import React from 'react';
import Image from 'next/image';
import logo from '/public/image/home/logo-dark.png';
import 'remixicon/fonts/remixicon.css';
import { useState } from 'react';




const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  

    return(
        <>
    <header>
        
         <Image className="logo" src={logo}  alt="logo"></Image>
        <nav className="nav">
            <ul className="nav-ul">
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            {!isMenuOpen ? (
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    ) : (
                        <i className="ri-close-large-line" onClick={toggleMenu}></i>
                    )}
            <button id="sign-up-btn">Sign Up</button>
        </nav>
        
    </header>
    <section
                className='columMenu'
                style={{ display: isMenuOpen ? 'block' : 'none' }}
            >
           <ul className="navUl">
               <li><a href="#home">Home</a></li>
               <li><a href="#portfolio">Portfolio</a></li>
               <li><a href="#pricing">Pricing</a></li>
               <li><a href="#team">Team</a></li>
               <li><a href="#testimonial">Testimonial</a></li>
               <li><a href="#contact">Contact</a></li>
           </ul>
   </section>
   
    </>
    
    );
}

export default Navbar;