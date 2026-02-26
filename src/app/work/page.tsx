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
    <section className="page">
      <h1 className="page-title">Work</h1>
      <p className="section-label">Selected work</p>
      <ul className="list-plain">
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
