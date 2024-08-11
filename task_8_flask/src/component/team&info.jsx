import React from "react";
import Image from 'next/image';
import team1 from "/public/image/team/team1.jpg";
import team2 from "/public/image/team/team2.jpg";
import team3 from "/public/image/team/team3.jpg";
import team4 from "/public/image/team/team4.jpg";
import illustration from "/public/image/team/illustration.png";


const teaminfo = () =>{
   return( 
   <>

    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet our expert people of payonline</h2>
          <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
        </div>
        <div className="team">
          <div className="team-member">
            <Image src={team1} alt="Zachary Tevis" />
            <h3>Zachary Tevis</h3>
            <p>ZacharyT@gmail.com</p>
            <span>WEB DESIGNER</span>
          </div>
          <div className="team-member">
            <Image src={team2} alt="Jeremiah Eskew" />
            <h3>Jeremiah Eskew</h3>
            <p>JeremiahE@gmail.com</p>
            <span>MANAGER</span>
          </div>
          <div className="team-member">
            <Image src={team3} alt="Tom Higgins" />
            <h3>Tom Higgins</h3>
            <p>Tomhiggins@gmail.com</p>
            <span>WEB DEVELOPER</span>
          </div>
          <div className="team-member">
            <Image src={team4} alt="William Aldman" />
            <h3>William Aldman</h3>
            <p>WilliamA@gmail.com</p>
            <span>CEO</span>
          </div>
        </div>
      </div>
    </section>
    <div className="infocontainer">
      <p className="infoheading">You are just two steps away from us to know more about our work & aim</p>
      <form className="infoemail-form">
        <input type="email" className="infoemail-input" placeholder="Enter your email address" required />
        <button type="submit" className="infoemail-button">Send Now</button>
      </form>
    </div>
    <section className="testimonial-section">
      <div className="testContainer">
        <div className="section-header">
          <div className="header-tag">Our Feedback</div>
          <h2>Few Words From Our Satisfied Clients</h2>
          <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <Image src={team1} alt="Zachary Tevis" className="testimonial-img" />
            <div className="testimonial-text">
              <h3>Zachary Tevis</h3>
              <p className="designation">- Designer</p>
              <p>Vestibulum mollis auctor aliquam dolor sit amet consectetur adipiscing elit Aenean volutpat vitae metus quis diam dolor lobortis eros conetur ligula odio a magna interdum Maecenas sit amet malesuada dolor vitae commodo magna dapibus sit amet.</p>
            </div>
          </div>
          <div className="quote-mark">“</div>
        </div>
        <div className="illustration">
          <Image src={illustration} alt="Illustration" />
        </div>
      </div>
    </section>
    </>
    );
}

export default teaminfo;

