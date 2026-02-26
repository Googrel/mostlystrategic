import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <section className="page">
      <h1 className="page-title">Contact</h1>
      <p className="body-copy">
        If you are reaching out about a project, share what you are building, where it feels stuck,
        and your timeline.
      </p>
      <div className="section">
        <ContactForm />
      </div>
    </section>
  );
}
