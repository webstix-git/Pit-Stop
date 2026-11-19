export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="Pit Stop logo" />
            <div className="footer-social">
              <span>Social Media:</span>
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
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/#top">Home</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#about">About us</a>
              </li>
              <li>
                <a href="/#why">Why us</a>
              </li>
              <li>
                <a href="/#reviews">Customer reviews</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/#area">Service area</a>
              </li>
            </ul>
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
                  102 W Prairie Ave,
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
            <div className="footer-hours">
              <span className="label">Business hours</span>
              <p>
                Mon - Fri: 8:00 am - 4:00&nbsp;pm
                <br />
                Sat &amp; Sun:&nbsp;Closed
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom" id="footer-bottom">
          <span>© 2026 Pit Stop&nbsp;LLC</span>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/ai-policy">AI Policy</a>
            <a href="/ai-readiness-service-index">AI Readiness Service Index</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
