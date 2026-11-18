import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Policy | Pit Stop Mabel, MN",
};

export default function AiPolicyPage() {
  return (
<main>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">AI Policy</div>
        <h1>How we use artificial intelligence responsibly</h1>
        <p>Last updated: November 18,&nbsp;2026</p>
      </div>
    </section>
    <div className="page-breadcrumb-bar">
      <div className="container">
        <div className="breadcrumbs"><a href="/">Home</a> / AI Policy</div>
      </div>
    </div>
    <section className="page-content">
      <div className="container">
        <div className="prose">
          <h2>Our Approach</h2>
          <p>At Pit Stop, our business is built on personal service and honest answers. We may use artificial intelligence (AI) tools to help our team work more efficiently, but people remain responsible for the advice, pricing, and service you&nbsp;receive.</p>

          <h2>How We Use AI</h2>
          <ul>
            <li>Drafting and editing website and marketing content</li>
            <li>Organizing internal notes, schedules, and routine tasks</li>
            <li>Helping summarize common service questions for our team</li>
          </ul>
          <p>Everything produced with the help of AI is reviewed by a member of our team before it is&nbsp;used.</p>

          <h2>What We Do Not Use AI For</h2>
          <ul>
            <li>Final pricing or service decisions without review by our staff</li>
            <li>Repair recommendations that have not been checked by our team</li>
            <li>Pretending to be a person when you are talking with an automated tool</li>
          </ul>

          <h2>Accuracy</h2>
          <p>Service details, hours, and pricing are confirmed by our shop. If you notice information on our website that looks wrong, please let us know so we can correct&nbsp;it.</p>

          <h2>Your Information and AI Tools</h2>
          <p>We do not enter customers' personal information into public AI tools. When we use AI services, we choose tools with appropriate privacy and security protections. See our <a href="/privacy-policy">Privacy Policy</a> for how we handle personal&nbsp;information.</p>

          <h2>AI Assistants and Our Website</h2>
          <p>Search engines and AI assistants may read the public pages of our website. To help them describe our business accurately, we publish an <a href="/ai-readiness-service-index">AI Readiness Service Index</a> with a plain summary of who we are and what we&nbsp;offer.</p>

          <h2>Changes to This Policy</h2>
          <p>We will update this policy as our use of AI changes. The "Last updated" date shows when it was last&nbsp;changed.</p>

          <h2>Questions</h2>
          <p>If you have questions about how we use AI, contact&nbsp;us:</p>
          <p><strong>Pit Stop LLC</strong><br />
          <span className="address-block">102 W Prairie Ave,<br />Mabel, MN 55954</span><br />
          Phone: <a className="phone-link" href="tel:5074935222"><svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg> 507-493-5222</a><br />
          Email: <a href="mailto:pitstopllc26@gmail.com">pitstopllc26@gmail.com</a></p>
          <p><a className="btn btn-red" href="/">Back to&nbsp;Home</a></p>
        </div>
      </div>
    </section>
  </main>
  );
}
