import PaymentIcons from "./PaymentIcons";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="Pit Stop logo" />
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <a className="phone-link" href="tel:5074935222">
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-phone" />
                </svg>
                507-493-5222
              </a>
              <a
                className="footer-address"
                href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-pin" />
                </svg>
                <span className="address-block">
                  102 W Prairie Ave.
                  <br />
                  Mabel, MN&nbsp;55954
                </span>
              </a>
              <a href="mailto:pitstopllc26@gmail.com">
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-mail" />
                </svg>
                pitstopllc26@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#why">Why Us</a>
              </li>
              <li>
                <a href="/#about">About Us</a>
              </li>
              <li>
                <a href="/#reviews">Customer Reviews</a>
              </li>
              <li>
                <a href="/#area">Service Area</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-meta">
            <div className="footer-social">
              <span>Find Us Online</span>
              <a
                href="https://www.facebook.com/profile.php?id=61589255056547"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-facebook" />
                </svg>
              </a>
            </div>
            <div className="footer-hours">
              <span className="label">Business Hours</span>
              <p>
                Monday - Friday: 8 AM - 4&nbsp;PM
                <br />
                Saturday &amp; Sunday:&nbsp;Closed
              </p>
            </div>
            <div className="footer-pay">
              <span className="label">Payment</span>
              <span className="footer-pay-text">Cash, check, credit, debit or&nbsp;Venmo</span>
              <PaymentIcons />
            </div>
          </div>
        </div>
        <div className="footer-bottom" id="footer-bottom">
          <span>© 2026 Pit Stop&nbsp;LLC</span>
          <span className="footer-pipe" aria-hidden="true">|</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="footer-pipe" aria-hidden="true">|</span>
          <a href="/ai-policy">AI Policy</a>
          <span className="footer-pipe" aria-hidden="true">|</span>
          <a href="/ai-readiness-service-index">AI Readiness Service Index</a>
        </div>
      </div>
    </footer>
  );
}
