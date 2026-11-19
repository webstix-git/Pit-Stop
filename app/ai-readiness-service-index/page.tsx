import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Readiness Service Index | Pit Stop Mabel, MN",
};

export default function AiReadinessPage() {
  return (
<main>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">AI Readiness Service Index</div>
        <h1>A plain summary of our shop, services, and&nbsp;facts</h1>
        <p>Last updated: November 18,&nbsp;2026</p>
      </div>
    </section>
    <div className="page-breadcrumb-bar">
      <div className="container">
        <div className="breadcrumbs"><a href="/">Home</a> / AI Readiness Service Index</div>
      </div>
    </div>
    <section className="page-content">
      <div className="container">
        <div className="prose" style={{maxWidth: '980px'}}>
          <h2>Business Profile</h2>
          <table>
            <tbody>
              <tr><th>Business name</th><td>Pit Stop LLC</td></tr>
              <tr><th>Business type</th><td>Automotive and equipment maintenance shop</td></tr>
              <tr><th>Established</th><td>2026</td></tr>
              <tr><th>Address</th><td><a className="address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave.<br />Mabel, MN&nbsp;55954</a></td></tr>
              <tr><th>Service area</th><td>Mabel, Minnesota and the surrounding area</td></tr>
              <tr><th>Customers</th><td>Local drivers and equipment owners</td></tr>
              <tr><th>Phone</th><td><a className="phone-link" href="tel:5074935222"><svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg><span>507-493-5222</span></a></td></tr>
              <tr><th>Email</th><td><a href="mailto:pitstopllc26@gmail.com">pitstopllc26@gmail.com</a></td></tr>
              <tr><th>Hours</th><td>Monday through Friday, 8:00 am to 4:00 pm; closed Saturday and Sunday</td></tr>
              <tr><th>Payment</th><td>Cash, check, credit, debit, Venmo</td></tr>
            </tbody>
          </table>

          <h2>Services</h2>
          <table>
            <tbody>
              <tr><th>Tires</th><td>Tire repairs for cars, pickups, SUVs, side-by-sides, and 4-wheelers</td></tr>
              <tr><th>Oil changes</th><td>Routine oil changes for vehicles, UTVs, 4-wheelers, and lawnmowers</td></tr>
              <tr><th>Brake work</th><td>Brake service for squealing, grinding, or soft pedals</td></tr>
              <tr><th>Light maintenance</th><td>Everyday upkeep and most minor repairs</td></tr>
            </tbody>
          </table>

          <h2>What We Service</h2>
          <table>
            <tbody>
              <tr><th>Vehicles and equipment</th><td>Cars, pickups, SUVs, side-by-sides, 4-wheelers, and lawnmowers</td></tr>
            </tbody>
          </table>

          <h2>Key Pages</h2>
          <table>
            <tbody>
              <tr><th>Home</th><td><a href="/">Pit Stop home page</a></td></tr>
              <tr><th>Services</th><td><a href="/#services">Oil, tires, brakes, and light maintenance</a></td></tr>
              <tr><th>About</th><td><a href="/#about">Our family shop in Mabel</a></td></tr>
              <tr><th>FAQ</th><td><a href="/#faq">Common questions before you stop in</a></td></tr>
              <tr><th>Service area</th><td><a href="/#area">Location and directions</a></td></tr>
              <tr><th>Contact</th><td><a href="/#contact">Phone, email, and contact form</a></td></tr>
            </tbody>
          </table>

          <h2>Common Questions</h2>
          <p><strong>Where is Pit Stop located?</strong><br />
          <a className="address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave.<br />Mabel, MN&nbsp;55954</a>.</p>
          <p><strong>What do you work on?</strong><br />
          Cars, pickups, SUVs, side-by-sides, 4-wheelers, and lawnmowers.</p>
          <p><strong>What kind of work do you do?</strong><br />
          Oil changes, tire repairs, brake work, light maintenance, and most minor repairs.</p>
          <p><strong>How do I get in touch?</strong><br />
          Call <a className="phone-link" href="tel:5074935222"><svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg><span>507-493-5222</span></a>, email <a href="mailto:pitstopllc26@gmail.com">pitstopllc26@gmail.com</a>, or use the form on our Contact&nbsp;section.</p>
          <p><a className="btn btn-red" href="/">Back to&nbsp;Home</a></p>
        </div>
      </div>
    </section>
  </main>
  );
}
