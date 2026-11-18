export default function NotFoundPage() {
  return (
<main>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">Error 404</div>
        <h1>Page not&nbsp;found</h1>
        <p>The page you're looking for isn't here. It may have moved, or the link might be&nbsp;outdated.</p>
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
          <p>Head home, check our services, or give the shop a&nbsp;call.</p>
          <div>
            <a className="btn btn-red" href="/">Back to&nbsp;Home</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
