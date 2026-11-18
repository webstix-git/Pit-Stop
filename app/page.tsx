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
          <div>
            <span className="meta-label">Payment</span>
            <span className="meta-value">Cash · Check · Card ·&nbsp;Venmo</span>
          </div>
        </div>
      </div>
    </section>

    <div className="tread" aria-hidden="true"></div>
    <div className="marquee">
      <div className="container marquee-inner">
        <span>Oil changes</span><span className="marquee-sep">/</span>
        <span>Tire repairs</span><span className="marquee-sep">/</span>
        <span>Brake work</span><span className="marquee-sep">/</span>
        <span>Light maintenance</span>
      </div>
    </div>

    <section id="services" className="section" data-screen-label="Services">
      <div className="container">
        <div className="section-head">
          <div className="section-head-copy">
            <div className="eyebrow">Services</div>
            <h2>The routine stuff, and the&nbsp;surprises</h2>
          </div>
          <p className="section-intro">Most of what we do is regular upkeep. Some of it is a flat tire you didn't plan on. Either way, give us a call and we'll get you back on the road, the trail or the&nbsp;lawn.</p>
        </div>
        <div className="services-grid">
          <article className="service-card">
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
          <article className="service-card">
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
          <article className="service-card">
            <div className="service-media">
              <img src="/assets/brake-work.jpg" alt="Mechanic installing a brake caliper" />
            </div>
            <div className="service-body">
              <div className="service-top">
                <span className="service-num">3</span>
                <span className="service-tag">Cars · Trucks ·&nbsp;UTVs</span>
              </div>
              <h3>Brake work</h3>
              <p>Squealing, grinding or a pedal that feels soft? Bring it in and we'll take a&nbsp;look.</p>
            </div>
          </article>
          <article className="service-card">
            <div className="service-media">
              <img src="/assets/maintenance.jpg" alt="Mechanic performing light maintenance under the hood" />
            </div>
            <div className="service-body">
              <div className="service-top">
                <span className="service-num">4</span>
                <span className="service-tag">Everything we&nbsp;service</span>
              </div>
              <h3>Light maintenance</h3>
              <p>The smaller jobs that keep things running, and most minor repairs too. If it's on your list, ask&nbsp;us.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

        <section id="why" className="why" data-screen-label="Why Choose Us">
      <div className="container why-inner">
        <div className="eyebrow dark">Why choose us</div>
        <h2>Why folks pick <span style={{color: 'var(--red)'}}>Pit&nbsp;Stop</span></h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Honest work</h3>
            <p>We'll tell you what needs doing now and what can&nbsp;wait.</p>
          </div>
          <div className="why-card">
            <h3>Done right</h3>
            <p>We take the time to do the job properly, so you're not back next week for the same&nbsp;thing.</p>
          </div>
          <div className="why-card">
            <h3>Fair prices</h3>
            <p>Small-town shop, small-town prices. No surprises on the&nbsp;bill.</p>
          </div>
          <div className="why-card">
            <h3>Friendly service</h3>
            <p>Pull in, say hi, ask questions. That's how a local shop should&nbsp;feel.</p>
          </div>
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
          <p>We're a small-town business and we run it like one. You get honest answers, careful work and a fair bill, from people who are glad you stopped in. Keeping your equipment in shape shouldn't be a hassle, and we work to keep it that&nbsp;way.</p>
        </div>
      </div>
    </section>

        <section id="reviews" className="section reviews" data-screen-label="Google reviews">
      <div className="container">
        <div className="section-head">
          <div className="section-head-copy">
            <div className="eyebrow">Google reviews</div>
            <h2>Word around&nbsp;Mabel</h2>
          </div>
        </div>
        <div className="reviews-grid">
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote>Kaiser knows his stuff!! Go see&nbsp;him!!</blockquote>
            </div>
            <figcaption>
              <span>Nicholas Martins</span>
              <span>Google review · a month ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-rating-only">5-star rating on Google (no written&nbsp;review).</blockquote>
            </div>
            <figcaption>
              <span>Nathan</span>
              <span>Google review · a week ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote>Great job on any work I bring&nbsp;in!</blockquote>
            </div>
            <figcaption>
              <span>Lee Senne</span>
              <span>Google review · 5 years ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★</div>
              <blockquote>Fast and friendly&nbsp;service.</blockquote>
            </div>
            <figcaption>
              <span>Juan Rosas</span>
              <span>Google review · 4 years ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote>Good shop to get your work&nbsp;done</blockquote>
            </div>
            <figcaption>
              <span>Bob Snedden-Fitler</span>
              <span>Google review · 7 years ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote>Because of BP gas stations using green nozzles for gas instead of diesel we put gas in our diesel truck. Duane came to our rescue on a late Friday afternoon. He towed us to his garage and spent 4 hours working on our truck. He was very professional, skilled and thoughtful. He did this all during a cold hard driving rain. We are very thankful to him. Highly&nbsp;recommend.</blockquote>
            </div>
            <figcaption>
              <span>Chris Sauer</span>
              <span>Google review · 9 years ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-rating-only">5-star rating on Google (no written&nbsp;review).</blockquote>
            </div>
            <figcaption>
              <span>Senne Outdoors</span>
              <span>Google review · 6 years ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-rating-only">5-star rating on Google (no written&nbsp;review).</blockquote>
            </div>
            <figcaption>
              <span>Justin Trosper</span>
              <span>Google review · 7 years ago</span>
            </figcaption>
          </figure>
          <figure className="review-card">
            <div>
              <div className="review-stars">★★★★</div>
              <blockquote className="review-rating-only">4-star rating on Google (no written&nbsp;review).</blockquote>
            </div>
            <figcaption>
              <span>Amber Helgeson</span>
              <span>Google review · 9 years ago</span>
            </figcaption>
          </figure>
        </div>
        <div className="reviews-cta">
          <a className="btn btn-red" href="https://www.google.com/maps/place/Pit+Stop/@43.5223361,-91.7702188,17z/data=!4m8!3m7!1s0x87fbcbc6c85e7199:0x58c40a3060250a00!8m2!3d43.5223361!4d-91.7702188!9m1!1b1!16s%2Fg%2F1thxlmmk" target="_blank" rel="noopener noreferrer">Leave us a review on&nbsp;Google</a>
        </div>
      </div>
    </section>

        <section id="faq" className="section faq" data-screen-label="FAQ">
      <div className="container faq-layout">
        <div className="faq-left">
          <div className="eyebrow dark">FAQ</div>
          <h2>Before you stop&nbsp;in</h2>
          <p>Didn't find your answer? Call us at
            <a className="phone-link" href="tel:5074935222">
              <svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
              507-493-5222
            </a>.
          </p>
          <img className="faq-tires" src="/assets/tires.png" alt="Stack of tires" />
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
            <h3 className="faq-q">What if I'm not sure you can fix&nbsp;it?</h3>
            <p className="faq-a">Just ask. Call us
              <a className="phone-link" href="tel:5074935222">
                <svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
                507-493-5222
              </a>,
              tell us what's going on, and we'll let you know whether it's something we can take care&nbsp;of.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">How can I&nbsp;pay?</h3>
            <p className="faq-a">Cash, check, credit, debit or&nbsp;Venmo.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">When are you&nbsp;open?</h3>
            <p className="faq-a">Monday through Friday, 8 am to 4 pm. We're closed on&nbsp;weekends.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">Where are&nbsp;you?</h3>
            <p className="faq-a"><a className="address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave,<br />Mabel, MN&nbsp;55954</a></p>
          </div>
          <div className="faq-item">
            <h3 className="faq-q">If you don't know if we can help, just&nbsp;ask!</h3>
            <p className="faq-a">We are here to help if we can with all your maintenance and most of your repair needs. Make Pit Stop your next&nbsp;stop!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="area" className="area" data-screen-label="Service Area">
      <div className="area-copy-wrap">
        <div className="area-copy">
          <div className="eyebrow">Service area</div>
          <h2>Right here in&nbsp;Mabel</h2>
          <div className="area-address">
            <p>We're on West Prairie Avenue and happy to help anyone from Mabel and the surrounding&nbsp;area.</p>
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
              <div>
                <span className="label">Payment</span>
                <span className="value">Cash, check, credit, debit,&nbsp;Venmo</span>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" id="contact-form" action="/thank-you" method="get">
          <div className="form-fields">
            <h3>Tell us what's going&nbsp;on</h3>
            <p className="form-note">Fields marked with an asterisk (*) are&nbsp;required.</p>
            <div className="form-row">
              <label className="field">
                <span className="field-label">Name<span className="req">*</span></span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span className="field-label">Phone<span className="req">*</span></span>
                <input type="tel" name="phone" autoComplete="tel" required />
              </label>
            </div>
            <label className="field">
              <span className="field-label">Vehicle / equipment<span className="req">*</span></span>
              <select name="vehicle" required>
                <option value="">Select an option</option>
                <option>Car, pickup or&nbsp;SUV</option>
                <option>Side-by-side /&nbsp;UTV</option>
                <option>4-wheeler</option>
                <option>Lawnmower</option>
                <option>Not sure, just&nbsp;asking</option>
              </select>
            </label>
            <label className="field">
              <span className="field-label">What's the problem?<span className="req">*</span></span>
              <textarea name="message" rows={4} required></textarea>
            </label>
            <button className="form-submit" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  </main>
  );
}
