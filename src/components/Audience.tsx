import { personas } from "../data/course";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

const colors = ["bg-violet-50 text-violet-700", "bg-coral-50 text-coral-700", "bg-teal-50 text-teal-700"];

export function Audience() {
  return (
    <section id="koolitusest" aria-labelledby="kellele-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="kellele-title"
            eyebrow="Kellele"
            tone="coral"
            title="Koolitus on mõeldud üldhariduskoolide ja kutseõppe õpetajatele"
            lead={
              <>
                Neli praktilist õppepäeva, mille järel oskad <strong className="text-ink">generatiivset tehisintellekti</strong>{" "}
                oma õppetöös mõtestatult, turvaliselt ja õppija vajadustest lähtudes kasutada.
              </>
            }
          />
        </div>

        <ul className="grid gap-4">
          {personas.map((p, i) => (
            <li
              key={p.title}
              className="reveal card flex gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              style={{ ["--delay" as string]: `${i * 90}ms` }}
            >
              <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${colors[i % colors.length]}`}>
                <Icon name={p.icon} className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-navy-900">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
