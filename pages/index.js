export default function Home() {
  return (
    <>
      <section className="hero">
        {/* If you upload /public/hero.jpg it will show behind this text */}
        <div className="overlay">
          <h1>Architectural & Structural Steelwork</h1>
          <p>
            Fabrication, installation, and design support delivered across the South Coast & London
            since 1983—on spec, on schedule, and to certified standards.
          </p>
          <a href="#contact" className="cta">Request a quote</a>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <h2>What we do</h2>
          <div className="cards">
            <article className="card">
              <h3>Architectural Steelwork</h3>
              <p>Balustrades, staircases, canopies, platforms, handrails, and bespoke metalwork.</p>
            </article>
            <article className="card">
              <h3>Structural Steelwork</h3>
              <p>Beams, frames, mezzanines, and secondary steel for refurb and new-build projects.</p>
            </article>
            <article className="card">
              <h3>Design & Detailing</h3>
              <p>GA preparation, connection design coordination, and issue-ready fabrication drawings.</p>
            </article>
            <article className="card">
              <h3>Site Installation</h3>
              <p>Qualified, experienced fitters and welders with a strong safety record.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="wrap">
          <h2>Trusted. Certified. Experienced.</h2>
          <p>
            We’re qualified to Execution Class 2 (EN 1090) and hold ISO 9001:2015, ISO 14001:2015,
            and ISO 45001:2018. Our UKCA marking is in place and audited.
          </p>
          <ul className="ticks">
            <li>Rail, Marine, Heritage, Commercial & Residential sectors</li>
            <li>Factory in Hampshire serving the South & London</li>
            <li>Established team with 30+ years of projects delivered</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap">
          <h2>Let’s talk about your project</h2>
          <p className="lead">
            Tell us what you need and we’ll come back with practical options and a fast quote.
          </p>
          <div className="contact-grid">
            <a className="contact-card" href="tel:+442380602777">
              <strong>Call</strong>
              <span>023 8060 2777</span>
            </a>
            <a className="contact-card" href="mailto:info@wessexfabricationsltd.co.uk">
              <strong>Email</strong>
              <span>info@wessexfabricationsltd.co.uk</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
