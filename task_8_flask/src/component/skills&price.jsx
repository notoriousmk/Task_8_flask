

const skillPrice = () =>
{
    return(
      <>
      <section className="skills">
        <div className="skills-header">
          <span className="skills-tag">Specialized Skill</span>
          <h2>Why do people love us</h2>
          <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
        </div>
        <div className="skills-content">
          <div className="skill-box">
            <h3>49 M</h3>
            <p>Creative User</p>
            <p>Aliquam erat volutpat elit quisque porta varius malesuada nuarnc turpis imperdiet id odio.</p>
          </div>
          <div className="skill-box">
            <h3>97 %</h3>
            <p>Successful rate</p>
            <p>Vivamus id lorem ut dolor sagittis elementum finibus vel felis maecenas laoreet leo sollicitudin.</p>
          </div>
          <div className="skill-bars">
            <div className="skill-bar">
              <div className="bar-info">
                <span>Html</span>
                <span>70%</span>
              </div>
              <div className="bar">
                <div className="bar-fill html"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="bar-info">
                <span>Css</span>
                <span>87%</span>
              </div>
              <div className="bar">
                <div className="bar-fill css"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="bar-info">
                <span>Bootstrap</span>
                <span>60%</span>
              </div>
              <div className="bar">
                <div className="bar-fill bootstrap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing">
        <div className="pricing-header">
          <span className="pricing-tag">Our Pricing</span>
          <h2>Choose the offering that works best for you</h2>
          <p>Donec dapibus dolor at semper dictum phasellus fringilla sem risus mollis faucibus dolor eleifend id maecenas viverra.</p>
          <div className="pricing-toggle">
            <button className="active">Monthly</button>
            <button>Yearly <span className="discount">20% OFF</span></button>
          </div>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Freelancer</h3>
            <p className="price">$199<span>/Month</span></p>
            <p className="users">1,000 Monthly Active Users</p>
            <div className="slider-container">
              <input type="range" min="0" max="1000" defaultValue="200" className="slider"/>
            </div>
            <ul className="features">
              <li>✔ Verified work and reviews</li>
              <li>✔ Dedicated accounts managers</li>
              <li>✔ Unlimited proposals</li>
              <li>✔ Project tracking</li>
              <li>✘ Easy payments</li>
            </ul>
            <button className="cta-button">Start with Floaks</button>
          </div>
          <div className="pricing-card">
            <div className="ribbon">Featured</div>
            <h3>Startup</h3>
            <p className="price">$299<span>/Month</span></p>
            <p className="users">5,000 Monthly Active Users</p>
            <div className="slider-container">
              <input type="range" min="0" max="5000" defaultValue="500" className="slider"/>
            </div>
            <ul className="features">
              <li>✔ Verified work and reviews</li>
              <li>✔ Dedicated accounts managers</li>
              <li>✔ Unlimited proposals</li>
              <li>✔ Project tracking</li>
              <li>✘ Easy payments</li>
            </ul>
            <button className="cta-button">Start with Floaks</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">$399<span>/Month</span></p>
            <p className="users">10,000 Monthly Active Users</p>
            <div className="slider-container">
              <input type="range" min="0" max="10000" defaultValue="700" className="slider"/>
            </div>
            <ul className="features">
              <li>✔ Verified work and reviews</li>
              <li>✔ Dedicated accounts managers</li>
              <li>✔ Unlimited proposals</li>
              <li>✔ Project tracking</li>
              <li>✔ Easy payments</li>
            </ul>
            <button className="cta-button">Start with Floaks</button>
          </div>
        </div>
      </section>
      </>
    );
}
    export default skillPrice;