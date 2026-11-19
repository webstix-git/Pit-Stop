export default function NotFoundPage() {
  return (
<main>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">404</div>
        <h1>We can&apos;t find that&nbsp;page</h1>
        <p>It may have moved, or the link might be a little out of&nbsp;date.</p>
      </div>
    </section>
    <div className="page-breadcrumb-bar">
      <div className="container">
        <div className="breadcrumbs"><a href="/">Home</a> / 404</div>
      </div>
    </div>
    <section className="page-content">
      <div className="container">
        <div className="thank-you-panel">
          <p>Head back home, browse our services, or give the shop a call. We&apos;re happy to help you find what you&nbsp;need.</p>
          <div>
            <a className="btn btn-red" href="/">Back to the&nbsp;homepage</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
