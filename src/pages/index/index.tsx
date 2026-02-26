import { IndexChat } from "@/components/index-chat";
import { moments } from "@/lib/moments";

export default function IndexPage() {
  return (
    <section className="page">
      <h1 className="page-title">Index</h1>
      <p className="body-copy">Mostly Strategic Index. Coming soon.</p>

      <div className="section">
        <h2 className="section-label">Moments</h2>
        <ul className="space-y-5">
          {moments.map((moment) => (
            <li key={moment.id} className="border-b border-[#e6e6e6] pb-4">
              <p className="list-plain font-medium">{moment.title}</p>
              <p className="text-sm leading-6 text-[#5e5e5e]">
                {moment.year} · {moment.country}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#5e5e5e]">{moment.whyItWorked}</p>
            </li>
          ))}
        </ul>
      </div>

      <IndexChat />
    </section>
  );
}
