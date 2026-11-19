import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pit Stop Mabel, MN",
};

export default function PrivacyPolicyPage() {
  return (
<main>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">Privacy Policy</div>
        <h1>How we collect, use, and protect your&nbsp;information</h1>
        <p>Last updated: November 18,&nbsp;2026</p>
      </div>
    </section>
    <div className="page-breadcrumb-bar">
      <div className="container">
        <div className="breadcrumbs"><a href="/">Home</a> / Privacy Policy</div>
      </div>
    </div>
    <section className="page-content">
      <div className="container">
        <div className="prose">
          <h2>Overview</h2>
          <p>Pit Stop LLC ("we," "us," or "our") respects your privacy. This policy explains what information we collect when you visit our website, contact us, or do business with us, how we use it, and the choices you&nbsp;have.</p>

          <h2>Information We Collect</h2>
          <p><strong>Information you give us.</strong> When you call, email, submit a form, or request service, we may collect your name, email address, phone number, mailing or vehicle information, and details about the work you&nbsp;need.</p>
          <p><strong>Information collected automatically.</strong> Like most websites, our site may record basic technical information such as your browser type, device, pages visited, and the site that referred you. This helps us keep the site working and understand how it is&nbsp;used.</p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to questions and schedule service</li>
            <li>To provide maintenance and repair work you request</li>
            <li>To improve our website, products, and services</li>
            <li>To send updates you have asked to receive</li>
            <li>To meet legal, tax, and accounting requirements</li>
          </ul>

          <h2>Cookies</h2>
          <p>Our website may use cookies and similar technologies to remember your preferences and measure site traffic. You can set your browser to refuse cookies or alert you when cookies are being sent. Some parts of the site may not work properly without&nbsp;them.</p>

          <h2>How We Share Information</h2>
          <p>We do not sell your personal information. We share it only when needed to serve you, including&nbsp;with:</p>
          <ul>
            <li>Service providers who help us with payments, website hosting, and communications</li>
            <li>Parts suppliers when needed to complete a repair</li>
            <li>Government authorities or others when required by law or to protect our rights</li>
          </ul>

          <h2>Data Security and Retention</h2>
          <p>We use reasonable safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. We keep information only as long as needed for the purposes described in this policy or as required by&nbsp;law.</p>

          <h2>Your Choices</h2>
          <p>You can ask us to access, correct, or delete the personal information we hold about you, and you can opt out of marketing messages at any time by contacting&nbsp;us.</p>

          <h2>Children's Privacy</h2>
          <p>Our website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from&nbsp;children.</p>

          <h2>Third-Party Links</h2>
          <p>Our website may link to partner or map websites. We are not responsible for the privacy practices of those sites, and we encourage you to review their&nbsp;policies.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. The "Last updated" date shows when it was last&nbsp;changed.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this policy or your information, contact&nbsp;us:</p>
          <p><strong>Pit Stop LLC</strong><br />
          <a className="address-block" href="https://www.google.com/maps/dir/?api=1&destination=102+W+Prairie+Ave+Mabel+MN+55954" target="_blank" rel="noopener noreferrer">102 W Prairie Ave.<br />Mabel, MN&nbsp;55954</a><br />
          <a className="phone-link" href="tel:5074935222"><svg className="icon" aria-hidden="true"><use href="#icon-phone"></use></svg><span>507-493-5222</span></a><br />
          <a href="mailto:pitstopllc26@gmail.com">pitstopllc26@gmail.com</a></p>
          <p><a className="btn btn-red" href="/">Back to&nbsp;Home</a></p>
        </div>
      </div>
    </section>
  </main>
  );
}
