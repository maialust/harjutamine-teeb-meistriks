import { CircleHelp, CircleCheckBig } from "lucide-react";
import { pairs } from "../data/course";
import { SectionHeading } from "./SectionHeading";

export function ProblemSolution() {
  return (
    <section aria-labelledby="valjakutse-title" className="relative bg-white py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          id="valjakutse-title"
          eyebrow="Miks see koolitus"
          tone="violet"
          align="center"
          title="GenAI klassiruumis on rohkem kui uus tööriist"
          lead="Õpetaja vajab arusaamist, kuidas GenAI töötab, milliseid õppetöö probleeme see aitab lahendada ja kus on selle piirid. Koolitus annab selleks teadmised, praktilised töötoad ja kolleegide toe."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {pairs.map((p, i) => (
            <article
              key={p.q}
              className="reveal card overflow-hidden"
              style={{ ["--delay" as string]: `${(i % 2) * 100}ms` }}
            >
              <div className="flex gap-3 border-b border-line bg-paper px-6 py-5">
                <CircleHelp className="mt-0.5 size-5 shrink-0 text-coral-700" aria-hidden="true" />
                <h3 className="font-bold text-navy-900">{p.q}</h3>
              </div>
              <div className="flex gap-3 px-6 py-5">
                <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
                <p className="leading-relaxed text-muted">{p.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
