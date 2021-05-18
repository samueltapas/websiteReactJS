import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return(
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="footer-input">
          <form>
            <input type="email" name="email" placeholder="Your best email" className="footer-input" />
            <button buttonStyle='btn--outline'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2>About Us</h2>
              <Link to="/sign-up">How it's works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Term of Services</Link>
            </div>
            <div className="footer-links-items">
              <h2>Contact Us</h2>
              <Link to="/sign-up">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
        </div>
        <div className="footer-links-wrapper">
            <div className="footer-links-items">
                <h2>About Us</h2>
                <Link to="/sign-up">Submit Video</Link>
                <Link to="/">Ambassadors</Link>
                <Link to="/">Agency</Link>
                <Link to="/">Influencer</Link>
            </div>
            <div className="footer-links-items">
              <h2>About Us</h2>
              <Link to="/sign-up">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">YouTube</Link>
              <Link to="/">Twitter</Link>
            </div>   
        </div>
        <section className="social-media">
          <div className="social-media-wrapper">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRVL <i className="fa fa-typo3" />
              </Link>
            </div>
            <small className="website-rights">
              TRVL * 2020
            </small>
            <div className="social-icons">
              <Link className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
              >
                <i className="fa fa-facebook-f"/>
              </Link>
              <Link className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
              >
                <i className="fa fa-instagram"/>
              </Link>
              <Link className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Yotube"
              >
                <i className="fa fa-youtube"/>
              </Link>
              <Link className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
              >
                <i className="fa fa-twitter"/>
              </Link>
              <Link className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"/>
              </Link>
            </div>
          </div>
        </section>
  </div>
  )
}