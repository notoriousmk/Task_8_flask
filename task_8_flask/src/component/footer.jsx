import React from 'react';
import Image from 'next/image';
// import appleLogo from 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg';
// import googlePlayBadge from 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';



const footer =() => {
    return(
      <>
      
      <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <h1>Floaks</h1>
            <p>Business opportunities Are Like Buses, There's Always Another One Coming...</p>
          </div>
          <div className="footer-section">
            <h2>Features</h2>
            <ul>
              <li><a href="#">6 Home</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">News & Events</a></li>
              <li><a href="#">Company</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Policies</h2>
            <ul>
              <li><a href="#">Security</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Condition</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Company</h2>
            <ul>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Maps</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
            </div>
            <h2>Follow Us</h2>
            <div className="app-icons">
              <a href="#"><Image src="" alt="App Store" className="app-store" /></a>
              <a href="#"><Image src="" alt="Google Play" className="google-play" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2024 © Floaks. Design by Themesdesign</p>
        </div>
      </footer>
    </>
   );
}
export default footer;