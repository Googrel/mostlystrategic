import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="text-neutral-700">
        If you are reaching out about a project, share what you are building, where it feels stuck,
        and your timeline.
      </p>
      <ContactForm />
    </section>
  );
}
