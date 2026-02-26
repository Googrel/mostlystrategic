import Link from "next/link";

const services = [
  "Brand strategy and positioning",
  "Narrative and messaging systems",
  "Go-to-market and launch planning",
  "Product storytelling and founder communication",
  "PR, partnerships, and high-trust categories",
  "Team enablement, operating rhythm, and decision clarity"
];

const work = [
  "Airbound (Opendrone)",
  "Pipaltree.ai",
  "Centre of Gravity",
  "Cradlewise",
  "Ather Energy",
  "upliance.ai"
];

export default function HomePage() {
  return (
    <div className="page">
      <section>
        <h1 className="page-title">Mostly Strategic</h1>
        <div className="body-copy space-y-4">
          <p>
            <strong>Mostly Strategic is my consulting practice.</strong>
          </p>
          <p>
            I work with founders and leadership teams on brand, narrative, and growth. The work is
            equal parts thinking and making: positioning, messaging, launches, and the systems that
            keep a brand coherent as it scales.
          </p>
          <p>I am based in Bengaluru and work with teams across time zones.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">What I help with</h2>
        <ul className="list-plain">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-label">Selected work</h2>
        <ul className="list-plain">
          {work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-label">Mostly Strategic Index</h2>
        <p className="body-copy">
          A small, curated collection of advertising and marketing moments. One part history, one
          part craft notes.
        </p>
        <div className="mt-4">
          <Link href="/index">Visit the index</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">Contact</h2>
        <p className="body-copy">
          If you are reaching out about a project, share what you are building, where it feels
          stuck, and your timeline.
        </p>
        <div className="mt-4">
          <Link href="/contact" className="pill-button">
            Say hi
          </Link>
        </div>
      </section>
    </div>
  );
}
