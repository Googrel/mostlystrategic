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
    <div className="max-w-3xl space-y-16 md:space-y-20">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Mostly Strategic</h1>
        <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
          <p>Mostly Strategic is my consulting practice.</p>
          <p>
            I work with founders and leadership teams on brand, narrative, and growth. The work is
            equal parts thinking and making: positioning, messaging, launches, and the systems that
            keep a brand coherent as it scales.
          </p>
          <p>I am based in Bengaluru and work with teams across time zones.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">What I help with</h2>
        <ul className="space-y-2 text-neutral-700">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Selected work</h2>
        <ul className="space-y-2 text-neutral-700">
          {work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Mostly Strategic Index</h2>
        <p className="text-neutral-700">
          A small, curated collection of advertising and marketing moments. One part history, one
          part craft notes.
        </p>
        <Link href="/index">Visit the index</Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Contact</h2>
        <p className="text-neutral-700">
          If you are reaching out about a project, share what you are building, where it feels
          stuck, and your timeline.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded border border-neutral-900 px-5 py-2 text-sm no-underline transition hover:bg-neutral-900 hover:text-white"
        >
          Say hi
        </Link>
      </section>
    </div>
  );
}
