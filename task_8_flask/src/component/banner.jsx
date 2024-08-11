"../app/styles/global.css";
"../public/image/[image path]";
import React from 'react';
import Image from 'next/image';
import homepagepic from "/public/image/home/homepage.png";

const banner =()=>{
    return(
      <>
        <section className="banner">
        <div className="content">
          <h3>Looking for a Designer!</h3>
          <h1>I Am <span className="highlight">Freelancer</span></h1>
          <p> a dedicated freelancer specializing in Web Development and Graphic Design. With 1 year of experience, I bring creativity, precision, and professionalism to every project. Whether you're a startup looking to make a splash or an established business aiming to innovate, I am here to elevate your brand and achieve your goals</p>
          <div className="buttons">
            <button className="hire-me">Hire Me</button>
            <button className="download-cv">Download CV</button>
          </div>
          <button className="watch-video"><i class="ri-play-circle-fill"></i>Watch our company video!</button>
        </div>
        <Image src={homepagepic} alt="man on laptop" className="banner-img" width={500} height={500} />
      </section>
      </>
    );
}
export default banner;