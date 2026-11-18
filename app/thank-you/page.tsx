import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Contact Pit Stop Mabel, MN",
};

export default function ThankYouPage() {
  return (
<main>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">Contact</div>
        <h1>Thank&nbsp;you</h1>
      </div>
    </section>
    <div className="page-breadcrumb-bar">
      <div className="container">
        <div className="breadcrumbs"><a href="/">Home</a> / <a href="/#contact">Contact Us</a> / Thank&nbsp;You</div>
      </div>
    </div>
    <section className="page-content">
      <div className="container">
        <div className="thank-you-panel">
          <div className="eyebrow">Request Received</div>
          <h2>Thanks for contacting&nbsp;us!</h2>
          <p>We will get in touch with you&nbsp;shortly.</p>
          <div>
            <a className="btn btn-red" href="/">Back to&nbsp;Home</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
