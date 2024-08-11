import React from 'react';
import Image from 'next/image';
import img1 from '/public/image/img-1.png';
import img2 from '/public/image/img-2.png';
import img3 from '/public/image/img-3.png';
import img4 from '/public/image/img-4.png';
import img5 from '/public/image/img-5.png';
import img6 from '/public/image/img-6.png';



const featReport = () => {
    return(
        
          <>
       
      <section className="features">
        <div className="features-header">
          <span className="features-tag">Our Features</span>
          <h2>Get work done in over 300+ different categories</h2>
          <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
        </div>
        <div className="features-content">
          <div className="feature-box">
            <h3>01</h3>
            <h4>Digital Product</h4>
            <p>A digital product is any product that is created, distributed, and consumed in an electronic format. Unlike physical products, digital products have no physical form and are delivered via the internet.</p>
            <a href="#">Learn more →</a>
          </div>
          <div className="feature-box">
            <h3>02</h3>
            <h4>Digital Marketing</h4>
            <p> Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands. It encompasses various online strategies and tactics to connect with potential customers.</p>
            <a href="#">Learn more →</a>
          </div>
          <div className="feature-box">
            <h3>03</h3>
            <h4>Business Consult</h4>
            <p>Passage you need sure there anything embarsing text hidden all necessary making generator Internet.</p>
            <a href="#">Learn more →</a>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio-header">
          <span className="portfolio-tag">Our Portfolio</span>
          <h2>We work fast, but we do not do it alone.</h2>
          <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
        </div>
        <div className="portfolio-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Brand</button>
          <button className="filter-btn">Design</button>
          <button className="filter-btn">Graphic</button>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-box">
            <Image src={img1} alt="Portfolio Item" />
          </div>
          <div className="portfolio-box">
            <Image src={img2} alt="Portfolio Item" />
          </div>
          <div className="portfolio-box">
            <Image src={img3} alt="Portfolio Item" />
          </div>
          <div className="portfolio-box">
            <Image src={img4} alt="Portfolio Item" />
          </div>
          <div className="portfolio-box">
            <Image src={img5} alt="Portfolio Item" />
          </div>
          <div className="portfolio-box">
            <Image src={img6} alt="Portfolio Item" />
          </div>
        </div>
      </section>
    </>
      
    );
} 
export default featReport;