const projects = [
  "Airbound (Opendrone)",
  "Pipaltree.ai",
  "Centre of Gravity",
  "Cradlewise",
  "Ather Energy",
  "upliance.ai"
];

export default function WorkPage() {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
      <p className="text-lg leading-relaxed text-neutral-700">Selected work:</p>
      <ul className="space-y-2 text-neutral-700">
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
