import ContactForm from "../components/ContactForm";
import PaymentIcons from "../components/PaymentIcons";

export default function HomePage() {
  return (
<main id="top">
    <section className="hero" data-screen-label="Hero" aria-label="Hero">
      <img className="hero-media" src="/assets/hero.png" alt="Pit Stop shop, 102 W Prairie Ave, Mabel" />
      <div className="hero-grad-y" aria-hidden="true"></div>
      <div className="hero-grad-x" aria-hidden="true"></div>
      <div className="container hero-content">
        <div className="eyebrow">Mabel, Minnesota · Est.&nbsp;2026</div>
        <h1>Oil, tires and brakes for whatever you <span>drive or&nbsp;mow.</span></h1>
        <p className="hero-lead">Pit Stop is a small shop on West Prairie Avenue in Mabel. We handle the everyday maintenance that keeps your car, pickup, side-by-side and lawnmower doing its job, plus the minor repairs that always seem to show up at the worst&nbsp;time.</p>
        <div className="hero-actions">
          <a className="btn btn-red" href="#services">See what we&nbsp;do</a>
          <a className="btn btn-cream" href="#about">Read about&nbsp;us</a>
        </div>
        <div className="hero-meta">
          <div>
            <span className="meta-label">Hours</span>
            <span className="meta-value">Mon-Fri · 8 AM - 4&nbsp;PM</span>
          </div>
          <div>
            <span className="meta-label">Location</span>
            <a className="meta-value address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave,<br />Mabel, MN&nbsp;55954</a>
          </div>
          <div>
            <span className="meta-label">Phone</span>
            <a className="meta-value phone-link" href="tel:5074935222">
              <svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
              507-493-5222
            </a>
          </div>
        </div>
      </div>
    </section>

    <div className="marquee">
      <div className="container marquee-inner">
        <span>Oil changes</span><span className="marquee-sep">/</span>
        <span>Tire repairs</span><span className="marquee-sep">/</span>
        <span>Brake work</span><span className="marquee-sep">/</span>
        <span>Light maintenance</span>
      </div>
    </div>

    <section id="vehicles" className="vehicles" data-screen-label="What We Service">
      <div className="container vehicles-inner">
        <div className="section-head">
          <div className="section-head-copy">
            <div className="eyebrow dark">Drive it or mow&nbsp;it</div>
            <h2>What we&nbsp;service</h2>
          </div>
          <p className="section-intro vehicles-intro">Not sure we work on yours? Just ask. Chances are we can help, and if we can&apos;t, we&apos;ll tell you&nbsp;straight.</p>
        </div>
        <div className="vehicles-grid">
          <article className="vehicle-card">
            <img src="/assets/cars.jpg" alt="Cars lined up at a service lot" />
            <div className="vehicle-label">
              <span className="vehicle-name">Cars</span>
            </div>
          </article>
          <article className="vehicle-card">
            <img src="/assets/pickups.jpg" alt="White pickup truck" />
            <div className="vehicle-label">
              <span className="vehicle-name">Pickups</span>
            </div>
          </article>
          <article className="vehicle-card">
            <img src="/assets/suvs.jpg" alt="Blue SUV parked outdoors" />
            <div className="vehicle-label">
              <span className="vehicle-name">SUVs</span>
            </div>
          </article>
          <article className="vehicle-card">
            <img src="/assets/utv.jpg" alt="Side-by-side" />
            <div className="vehicle-label">
              <span className="vehicle-name">Side-by-sides</span>
            </div>
          </article>
          <article className="vehicle-card">
            <img src="/assets/4-wheelers.jpg" alt="Red 4-wheelers on sand" />
            <div className="vehicle-label">
              <span className="vehicle-name">4-wheelers</span>
            </div>
          </article>
          <article className="vehicle-card">
            <img src="/assets/lawnmowers.jpg" alt="Walk-behind lawnmower on a lawn" />
            <div className="vehicle-label">
              <span className="vehicle-name">Lawnmowers</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="services" className="section" data-screen-label="Services">
      <div className="container">
        <div className="section-head">
          <div className="section-head-copy">
            <div className="eyebrow">Services</div>
            <h2>The routine stuff, and the&nbsp;surprises</h2>
          </div>
          <p className="section-intro">Most of what we do is regular upkeep. Some of it is a flat tire you didn&apos;t plan on. Either way, give us a call and we&apos;ll get you back on the road, the trail or the&nbsp;lawn.</p>
        </div>
        <div className="services-grid">
          <article className="service-card" id="service-tires">
            <div className="service-media">
              <img src="/assets/car-tire.jpg" alt="Mechanic handling a car tire" />
            </div>
            <div className="service-body">
              <div className="service-top">
                <span className="service-num">1</span>
                <span className="service-tag">Cars · Trucks ·&nbsp;UTVs</span>
              </div>
              <h3>Tires</h3>
              <p>Flat or slow leak? We repair tires on cars, pickups, SUVs, side-by-sides and&nbsp;4-wheelers.</p>
            </div>
          </article>
          <article className="service-card" id="service-oil">
            <div className="service-media">
              <img src="/assets/oil-change.jpg" alt="Mechanic pouring fresh oil during an oil change" />
            </div>
            <div className="service-body">
              <div className="service-top">
                <span className="service-num">2</span>
                <span className="service-tag">Everything we&nbsp;service</span>
              </div>
              <h3>Oil changes</h3>
              <p>Fresh oil for the car you drive to work, the side-by-side you ride on weekends and the mower that keeps the yard in&nbsp;shape.</p>
            </div>
          </article>
          <article className="service-card" id="service-brakes">
            <div className="service-media">
              <img src="/assets/brake-work.jpg" alt="Mechanic installing a brake caliper" />
            </div>
            <div className="service-body">
              <div className="service-top">
                <span className="service-num">3</span>
                <span className="service-tag">Cars · Trucks ·&nbsp;UTVs</span>
              </div>
              <h3>Brake work</h3>
              <p>Squealing, grinding or a pedal that feels soft? Bring it in and we&apos;ll take a&nbsp;look.</p>
            </div>
          </article>
          <article className="service-card" id="service-maintenance">
            <div className="service-media">
              <img src="/assets/maintenance.jpg" alt="Mechanic performing light maintenance under the hood" />
            </div>
            <div className="service-body">
              <div className="service-top">
                <span className="service-num">4</span>
                <span className="service-tag">Everything we&nbsp;service</span>
              </div>
              <h3>Light maintenance</h3>
              <p>The smaller jobs that keep things running, and most minor repairs too. If it&apos;s on your list, ask&nbsp;us.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="about" className="section" data-screen-label="About">
      <div className="container about-grid">
        <div className="about-photo-wrap">
          <div className="about-corner" aria-hidden="true"></div>
          <img className="about-photo" src="/assets/family.jpg" alt="The family behind Pit Stop" />
          <img className="about-photo-secondary" src="/assets/utv.jpg" alt="Blue side-by-side serviced at Pit Stop" />
          <div className="about-badge">
            <span>Established</span>
            <span>2026</span>
          </div>
        </div>
        <div className="about-copy">
          <div className="eyebrow">About Pit&nbsp;Stop</div>
          <h2>A family shop in&nbsp;Mabel</h2>
          <p>We opened Pit Stop in 2026 to give folks around Mabel one friendly place to bring all of it: the car, the pickup, the side-by-side and the&nbsp;mower.</p>
          <p>We&apos;re a small-town business and we run it like one. You get honest answers, careful work and a fair bill, from people who are glad you stopped in. Keeping your equipment in shape shouldn&apos;t be a hassle, and we work to keep it that&nbsp;way.</p>
        </div>
      </div>
    </section>

    <section id="why" className="why" data-screen-label="Why Choose Us">
      <div className="container why-inner">
        <div className="eyebrow">Why choose us</div>
        <h2>Why folks pick <span style={{color: 'var(--red)'}}>Pit&nbsp;Stop</span></h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Honest work</h3>
            <p>We&apos;ll tell you what needs doing now and what can&nbsp;wait.</p>
          </div>
          <div className="why-card">
            <h3>Done right</h3>
            <p>We take the time to do the job properly, so you&apos;re not back next week for the same&nbsp;thing.</p>
          </div>
          <div className="why-card">
            <h3>Fair prices</h3>
            <p>Small-town shop, small-town prices. No surprises on the&nbsp;bill.</p>
          </div>
          <div className="why-card">
            <h3>Friendly service</h3>
            <p>Pull in, say hi, ask questions. That&apos;s how a local shop should&nbsp;feel.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="reviews" className="section reviews" data-screen-label="Customer reviews">
      <div className="container">
        <div className="section-head">
          <div className="section-head-copy">
            <div className="eyebrow dark">Customer reviews</div>
            <h2>Word around&nbsp;Mabel</h2>
          </div>
        </div>
        <div className="reviews-grid">
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Nicholas Martins</span>
              </div>
              <span className="review-time">a month ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
              <blockquote>Kaiser knows his stuff!! Go see&nbsp;him!!</blockquote>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Nathan</span>
              </div>
              <span className="review-time">a week ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Lee Senne</span>
              </div>
              <span className="review-time">5 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
              <blockquote>Great job on any work I bring&nbsp;in!</blockquote>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Juan Rosas</span>
              </div>
              <span className="review-time">4 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★</div>
              <blockquote>Fast and friendly&nbsp;service.</blockquote>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Bob Snedden-Fitler</span>
              </div>
              <span className="review-time">7 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
              <blockquote>Good shop to get your work&nbsp;done</blockquote>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Chris Sauer</span>
              </div>
              <span className="review-time">9 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
              <blockquote>Because of BP gas stations using green nozzles for gas instead of diesel we put gas in our diesel truck. Duane came to our rescue on a late Friday afternoon. He towed us to his garage and spent 4 hours working on our truck. He was very professional, skilled and thoughtful. He did this all during a cold hard driving rain. We are very thankful to him. Highly&nbsp;recommend.</blockquote>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Senne Outdoors</span>
              </div>
              <span className="review-time">6 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Justin Trosper</span>
              </div>
              <span className="review-time">7 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★★</div>
            </div>
          </figure>
          <figure className="review-card">
            <figcaption>
              <div className="review-author">
                <svg className="review-google" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="review-name">Amber Helgeson</span>
              </div>
              <span className="review-time">9 years ago</span>
            </figcaption>
            <div className="review-body">
              <div className="review-stars">★★★★</div>
            </div>
          </figure>
        </div>
        <div className="reviews-cta">
          <a className="btn btn-red" href="https://www.google.com/maps/place/Pit+Stop/@43.5223361,-91.7702188,17z/data=!4m8!3m7!1s0x87fbcbc6c85e7199:0x58c40a3060250a00!8m2!3d43.5223361!4d-91.7702188!9m1!1b1!16s%2Fg%2F1thxlmmk" target="_blank" rel="noopener noreferrer">Leave us a review on&nbsp;Google</a>
        </div>
      </div>
    </section>

    <section id="area" className="area" data-screen-label="Service Area">
      <div className="area-copy-wrap">
        <div className="area-copy">
          <div className="eyebrow">Service area</div>
          <h2>Right here in&nbsp;Mabel</h2>
          <div className="area-address">
            <p>We&apos;re on West Prairie Avenue and happy to help anyone from Mabel and the surrounding&nbsp;area.</p>
            <a className="address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave,<br />Mabel, MN&nbsp;55954</a>
          </div>
          <a className="btn btn-cream" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
      </div>
      <div className="area-map">
        <iframe
          title="Map to Pit Stop"
          src="https://www.google.com/maps?q=102+W+Prairie+Ave,+Mabel,+MN+55954&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen></iframe>
      </div>
    </section>

    <div className="tread-2" aria-hidden="true"></div>

    <section id="contact" className="section contact" data-screen-label="Contact">
      <div className="container contact-grid">
        <div className="contact-info-wrap">
          <div className="contact-copy">
            <div className="eyebrow">Get in&nbsp;touch</div>
            <h2>Make Pit Stop your next&nbsp;stop!</h2>
            <a className="contact-phone" href="tel:5074935222">
              <svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
              507-493-5222
            </a>
            <div className="contact-details">
              <div>
                <span className="label">Email</span>
                <a href="mailto:pitstopllc26@gmail.com">pitstopllc26@gmail.com</a>
              </div>
              <div>
                <span className="label">Address</span>
                <a className="contact-address-link address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave,<br />Mabel, MN&nbsp;55954</a>
              </div>
              <div>
                <span className="label">Hours</span>
                <span className="value">Mon - Fri: 8:00 am - 4:00&nbsp;pm<br />Sat &amp; Sun:&nbsp;Closed</span>
              </div>
              <div className="contact-pay">
                <span className="label">Payment</span>
                <span className="value">Cash, check, credit, debit or&nbsp;Venmo</span>
                <PaymentIcons />
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>

    <section id="faq" className="section faq" data-screen-label="FAQ">
      <div className="container faq-layout">
        <div className="faq-left">
          <div className="eyebrow dark">FAQ</div>
          <h2>Before you stop&nbsp;in</h2>
          <p>Didn&apos;t find your answer? Call us at{" "}
            <a className="phone-link faq-phone" href="tel:5074935222">
              <svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
              <span>507-493-5222</span>
            </a>.
          </p>
          <img className="faq-visual" src="/assets/faq-utv.png" alt="Green side-by-side UTV" />
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3 className="faq-q">What do you work&nbsp;on?</h3>
            <p className="faq-a">Cars, pickups, SUVs, side-by-sides, 4-wheelers and&nbsp;lawnmowers.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">What kind of work do you&nbsp;do?</h3>
            <p className="faq-a">Oil changes, tire repairs, brake work and other light maintenance, plus most minor&nbsp;repairs.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">What if I&apos;m not sure you can fix&nbsp;it?</h3>
            <p className="faq-a">Just ask. Call us{" "}
              <a className="phone-link faq-phone" href="tel:5074935222">
                <svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
                <span>507-493-5222</span>
              </a>,
              tell us what&apos;s going on, and we&apos;ll let you know whether it&apos;s something we can take care&nbsp;of.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">How can I&nbsp;pay?</h3>
            <p className="faq-a">Cash, check, credit, debit or&nbsp;Venmo.</p>
            <PaymentIcons className="faq-pay-icons" />
          </div>
          <div className="faq-item">
            <h3 className="faq-q">When are you&nbsp;open?</h3>
            <p className="faq-a">Monday through Friday, 8 am to 4 pm. We&apos;re closed on&nbsp;weekends.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">Where are&nbsp;you?</h3>
            <p className="faq-a"><a className="address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave,<br />Mabel, MN&nbsp;55954</a></p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">If you don&apos;t know if we can help, just&nbsp;ask!</h3>
            <p className="faq-a">We are here to help if we can with all your maintenance and most of your repair needs. Make Pit Stop your next&nbsp;stop!</p>
          </div>
        </div>
      </div>
    </section>

    <div className="area-footer-sep" aria-hidden="true"></div>
  </main>
  );
}
