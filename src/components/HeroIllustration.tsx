import { Bot, FileText, FlaskConical, MessageSquareCheck, ShieldCheck, Sparkles } from "lucide-react";

/**
 * Avaekraani illustratsioon: õpetaja CustomGPT seadistus + õpilase vestlus
 * + sildid (andmekaitse, tagasiside, tegevusuuring). Kõik on dekoratiivne.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[5/4.7] w-full max-w-[34rem]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-violet-500/25 blur-3xl" />
      <div className="absolute right-[5%] bottom-[10%] size-40 rounded-full bg-teal-400/20 blur-3xl" />

      {/* CustomGPT seadistus */}
      <div className="float-slow absolute top-0 left-0 z-10 w-[72%] rounded-3xl bg-white p-5 text-navy-900 shadow-lift">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-coral-400 to-sun-400 text-navy-950">
            <Bot className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="text-[0.65rem] font-extrabold tracking-wider text-muted uppercase">Minu CustomGPT</p>
            <p className="text-sm font-extrabold">Harjutuste abiline</p>
          </div>
        </div>
        <p className="mt-4 text-[0.65rem] font-extrabold tracking-wider text-muted uppercase">Juhised</p>
        <p className="mt-1 rounded-xl bg-navy-50 px-3 py-2 text-[0.8rem] leading-snug font-semibold">
          Koosta õpilasele harjutusi tema taseme järgi ja anna igale vastusele tagasisidet.
        </p>
        <p className="mt-3 text-[0.65rem] font-extrabold tracking-wider text-muted uppercase">Teadmised</p>
        <p className="mt-1 inline-flex items-center gap-1.5 rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700">
          <FileText className="size-3.5" />
          ainekava.pdf
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-sun-50 px-2.5 py-1 text-[0.7rem] font-bold text-sun-700 ring-1 ring-sun-300/70">Anna mulle harjutus</span>
          <span className="rounded-full bg-sun-50 px-2.5 py-1 text-[0.7rem] font-bold text-sun-700 ring-1 ring-sun-300/70">Kontrolli mu vastust</span>
        </div>
      </div>

      {/* õpilase vestlus */}
      <div className="absolute right-0 bottom-[6%] z-20 w-[66%] rounded-3xl bg-navy-800/95 p-4 text-white shadow-lift ring-1 ring-white/10 backdrop-blur">
        <ul className="space-y-2.5 text-[0.8rem]">
          <li className="msg-in flex justify-end" style={{ ["--d" as string]: "0.6s" }}>
            <span className="max-w-[85%] rounded-2xl rounded-br-md bg-coral-400 px-3 py-2 leading-snug font-semibold text-navy-950">
              Anna mulle üks harjutus.
            </span>
          </li>
          <li className="msg-in flex" style={{ ["--d" as string]: "1.6s" }}>
            <span className="max-w-[90%] rounded-2xl rounded-bl-md bg-white/12 px-3 py-2 leading-snug">
              Hea meelega! Alustame lihtsamast ja liigume sinu tempos edasi.
            </span>
          </li>
          <li className="msg-in flex" style={{ ["--d" as string]: "2.6s" }}>
            <span className="typing inline-flex items-center gap-1 rounded-2xl rounded-bl-md bg-white/12 px-3.5 py-2.5">
              <i />
              <i />
              <i />
            </span>
          </li>
        </ul>
      </div>

      {/* sildid */}
      <div className="float-slower absolute top-[6%] -right-[1%] z-20 flex items-center gap-1.5 rounded-full bg-teal-400 px-3 py-1.5 text-xs font-extrabold text-navy-950 shadow-lift">
        <ShieldCheck className="size-3.5" />
        Andmekaitse
      </div>
      <div className="float-slow absolute top-[36%] right-[3%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-bold text-navy-900 shadow-lift">
        <span className="grid size-7 place-items-center rounded-lg bg-coral-50 text-coral-700">
          <MessageSquareCheck className="size-4" />
        </span>
        Tagasiside
      </div>
      <div className="float-slower absolute bottom-[2%] left-[3%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-bold text-navy-900 shadow-lift">
        <span className="grid size-7 place-items-center rounded-lg bg-violet-50 text-violet-700">
          <FlaskConical className="size-4" />
        </span>
        Tegevusuuring
      </div>
      <div className="float-slow absolute bottom-[26%] left-[6%] z-20 flex items-center gap-1.5 rounded-full bg-sun-400 px-3 py-1.5 text-xs font-extrabold text-navy-950 shadow-lift">
        <Sparkles className="size-3.5" />
        GenAI
      </div>
    </div>
  );
}
