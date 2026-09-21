import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Easy<span>Rent</span></h2>

          <p>
            Find your perfect rental home with EasyRent.
            Search trusted apartments, houses and villas
            easily and quickly.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Property */}
        <div className="footer-section">
          <h3>Explore</h3>

          <Link to="/properties">Apartments</Link>
          <Link to="/properties">Houses</Link>
          <Link to="/properties">Villas</Link>
          <Link to="/properties">Rental Homes</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <span className="footer-icon">📍</span>
            Pune, Maharashtra, India
          </p>

          <p>
            <span className="footer-icon">📞</span>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </p>

          <p>
            <span className="footer-icon">✉️</span>
            <a href="mailto:easyrent@gmail.com">
              easyrent@gmail.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 EasyRent. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;