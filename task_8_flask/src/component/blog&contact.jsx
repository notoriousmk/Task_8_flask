"../app/styles/global.css";
"../public/image/[image path]";
import React from 'react';
import Image from 'next/image';
import blog1 from '/public/image/blog/blog1.jpg';
import blog2 from '/public/image/blog/blog2.jpg';
import blog3 from '/public/image/blog/blog3.jpg';
import author1 from '/public/image/team/team1.jpg';
import author2 from '/public/image/team/team2.jpg';
import author3 from '/public/image/team/team3.jpg';
import contactImg from '/public/image/blog/custom.png';



const blogContact = () => {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <div className="header-tag">Our Blog</div>
            <h2>Our latest blog posts insights articles</h2>
            <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
          </div>
          <div className="blog-posts">
            <div className="blog-card">
              <div className="blog-img">
                <Image src={blog1} alt="Blog Post" />
                <div className="author-info">
                  <Image src={author1} alt="Author" />
                  <div className="author-text">
                    <p>Zachary Tevis</p>
                    <span>15 Sep 2020</span>
                  </div>
                </div>
              </div>
              <div className="blog-content">
                <h3>Phasellus sit amet tempus risus consectetur lobortis elementum elit commodo.</h3>
                <div className="blog-meta">
                  <span>45 Comments</span>
                  <span>256 Views</span>
                </div>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
                <Image src={blog2} alt="Blog Post" />
                <div className="author-info">
                  <Image src={author2} alt="Author" />
                  <div className="author-text">
                    <p>Zachary Tevis</p>
                    <span>21 Sep 2020</span>
                  </div>
                </div>
              </div>
              <div className="blog-content">
                <h3>Fusce vestibulum porta egestas phasellus laoreet lacus rutrum vitae eleifend laoreet.</h3>
                <div className="blog-meta">
                  <span>63 Comments</span>
                  <span>265 Views</span>
                </div>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
                <Image src={blog3} alt="Blog Post" />
                <div className="author-info">
                  <Image src={author3} alt="Author" />
                  <div className="author-text">
                    <p>Brandon Carney</p>
                    <span>24 Sep 2020</span>
                  </div>
                </div>
              </div>
              <div className="blog-content">
                <h3>Maecenas lobortis sem ultricies vestibulum duari purus mauris congue agittis risus.</h3>
                <div className="blog-meta">
                  <span>76 Comments</span>
                  <span>451 Views</span>
                </div>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <div className="header-tag">Contact Us</div>
            <h2>Let's talk about everything!</h2>
            <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
          </div>
          <div className="contact-content">
            <div className="contact-left">
              <Image src={contactImg} alt="Contact Us" />
              <div className="contact-info">
                <div className="contact-info-row">
                  <div className="contact-item">
                    <h3>Online Services</h3>
                    <p>Email: JohnPBeau@jourrapide.com</p>
                    <p>Website: mycheapsale.com</p>
                  </div>
                  <div className="contact-item">
                    <h3>Online Contact</h3>
                    <p>Phone: +112 708-231-9668</p>
                    <p>Phone: +125 458-565-9695</p>
                  </div>
                </div>
                <div className="contact-item">
                  <h3>Office Address</h3>
                  <p>3429 Gnarly Creek Road Farmingdale, NY 11735</p>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form action="#" method="post">
                <div className="form-group">
                  <input type="text" name="first_name" placeholder="First Name" required />
                  <input type="text" name="last_name" placeholder="Last Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default blogContact;