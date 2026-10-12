/* =====================================================================
 * KOOLITUSE ANDMED — KÕIK MUUDETAV INFO ON SIIN FAILIS
 * ---------------------------------------------------------------------
 * Muuda ainult jutumärkide vahel olevat teksti. Ära kustuta komasid,
 * sulge ega jutumärke. Pärast muutmist salvesta fail — GitHubis
 * avaldatakse muudatus automaatselt mõne minuti jooksul.
 * ===================================================================== */

/* ---------------------------------------------------------------------
 * 1. REGISTREERIMISLINK (Haridusportaal)
 * ------------------------------------------------------------------- */
export const REGISTRATION_URL =
  "https://haridusportaal.edu.ee/koolitused-juhan/harjutamine-teeb-meistriks-ai-kirjaoskuse-arendamine-genai-abil-klassiruumis/37470805";

/* ---------------------------------------------------------------------
 * 2. LEHE AVALIK AADRESS (jagamise eelvaate jaoks)
 * ------------------------------------------------------------------- */
export const SITE_URL = "https://maialust.github.io/harjutamine-teeb-meistriks/";

/* Abiväärtused (ei ole vaja muuta) */
export const REGISTRATION_ANCHOR = "registreeru";
export const hasRegistrationUrl = /^https?:\/\//i.test(REGISTRATION_URL.trim());
export const registrationHref = hasRegistrationUrl ? REGISTRATION_URL.trim() : `#${REGISTRATION_ANCHOR}`;

/* =====================================================================
 * PÕHIANDMED
 * ===================================================================== */
export const course = {
  name: "Harjutamine teeb meistriks",
  subtitle: "AI-kirjaoskuse arendamine GenAI abil klassiruumis",
  fullName: "„Harjutamine teeb meistriks“: AI-kirjaoskuse arendamine GenAI abil klassiruumis",
  organizer: "Tartu Ülikool",
  organizerUnit: "Tartu Ülikooli haridusteaduste instituut",
  organizerLogo: "tu-hti-logo.png",
  language: "eesti keel",
  location: "Tartu",
  format: "Auditoorne õpe ja iseseisev töö",
  maxParticipants: 25,
  certificate: "Tartu Ülikooli täiendusõppe tunnistus",
  audience: "Üldhariduskoolide ja kutseõppe õpetajad",
  volume: {
    total: 78, // akadeemilist tundi kokku
    contact: 32, // auditoorne töö
    independent: 46, // iseseisev töö
  },
  contactDays: {
    count: 4,
    hoursEach: 8, // akadeemilist tundi
  },
  // Toimumisaega lehel ei näidata (seda saab vaadata Haridusportaalist).
  datesNote: "Toimumisaja ja registreerimise info leiad Haridusportaalist.",
  tools: {
    learning: "Moodle",
  },
};

/* Õppegruppe lehel praegu ei näidata. Kui aeg on vaja lisada, kirjuta see siia:
 *   { label: "Järgmine grupp", period: "veebruar–aprill 2027" } */
export type Group = { label: string; period: string; note?: string; dates?: string[] };
export const groups: Group[] = [];

/* ---------------------------------------------------------------------
 * KOOLITAJAD
 * Ainult õppekavas toodud andmed. Fotot pole — kuvatakse ikoon.
 * ------------------------------------------------------------------- */
export type Trainer = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  profile: string;
  orcid?: string;
  portfolio?: string;
};

export const trainers: Trainer[] = [
  {
    name: "Emanuele Bardone",
    role: "PhD, kaasprofessor",
    bio: "",
    photo: "",
    profile: "",
  },
  {
    name: "Meeli Rannastu-Avalos",
    role: "PhD, haridustehnoloogia nooremlektor",
    bio: "",
    photo: "",
    profile: "",
  },
  {
    name: "Maia Lust",
    role: "MSc (haridustehnoloogia) · Tartu Ülikooli haridusteaduste instituudi tehisarusaadik · Tallinna Pae Gümnaasiumi haridustehnoloog",
    bio: "",
    photo: "maia-lust.jpg",
    profile: "https://www.etis.ee/CV/Maia_Lust/est/",
    orcid: "https://orcid.org/0000-0003-2453-5563",
    portfolio: "https://sites.google.com/pae.tln.edu.ee/mlmeister/",
  },
];

/* KONTAKT — tühjad väljad lehel ei kuvata. */
export const contact = { name: "", email: "", phone: "", web: "" };
export const hasContact = Boolean(contact.email || contact.phone || contact.web);

/* =====================================================================
 * LEHE SISU
 * ===================================================================== */

export type IconKey =
  | "compass"
  | "users"
  | "route"
  | "message"
  | "scale"
  | "laptop"
  | "presentation"
  | "hammer"
  | "userSmall"
  | "monitor"
  | "books"
  | "messages"
  | "award"
  | "lightbulb"
  | "layers"
  | "target"
  | "sparkles"
  | "calendar"
  | "check"
  | "folder"
  | "shield"
  | "bot"
  | "brain"
  | "notebook"
  | "flask"
  | "copyright";

/** Avaekraani vahelduvad sõnad: „GenAI klassiruumis: …“ */
export const rotatingWords = ["harjutused", "tagasiside", "õpirajad", "õppematerjalid", "CustomGPT", "tegevusuuring"];

/** Kellele (avaplokk) */
export const personas: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "books",
    title: "Üldhariduskooli õpetajale",
    text: "kes soovib kasutada generatiivset tehisintellekti oma aine õppetöös läbimõeldult ja õppija vajadustest lähtudes.",
  },
  {
    icon: "hammer",
    title: "Kutseõppe õpetajale",
    text: "kes soovib toetada õppijate arengut ja personaliseerida õppimist GenAI tööriistade abil.",
  },
  {
    icon: "flask",
    title: "Õpetajale, kes tahab katsetada",
    text: "ja oma praktikat uurida: kursuse käigus koostad tegevusuuringu kava GenAI rakendamiseks oma klassis.",
  },
];

/** Miks see koolitus: küsimus → vastus */
export const pairs: { q: string; a: string }[] = [
  {
    q: "Mida generatiivne tehisintellekt tegelikult teeb ja mille poolest see teistest AI liikidest erineb?",
    a: "Esimene õppepäev annab GenAI põhialused ja asetab need hariduslikku konteksti.",
  },
  {
    q: "Milline GenAI tööriist aitab lahendada just minu õppetöö probleemi?",
    a: "Töötoas „Kas on olemas GenAI, mis…?“ uurid lahendusi ning hindad koos kolleegidega nende sobivust oma töösse.",
  },
  {
    q: "Kuidas luua tehisaru abiline, mis arvestab minu õpilaste vajadusi?",
    a: "Lood oma CustomGPT, katsetad seda ja täiendad kaaslaste tagasiside põhjal.",
  },
  {
    q: "Kuidas kasutada GenAI-d turvaliselt, eetiliselt ja autoriõigust austades?",
    a: "Käsitleme andmekaitset, õpilaste isikuandmeid ning intellektuaalomandi ja autoriõiguse küsimusi.",
  },
];

export const benefits: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "hammer",
    title: "Iga sessioon lõpeb töötoaga",
    text: "Iga sessiooni lõpus katsetad ja lood ise AI-lahendusi. Teooria muutub kohe praktikaks.",
  },
  {
    icon: "bot",
    title: "Oma CustomGPT",
    text: "Lood kohandatud AI-mudeli oma õpilaste vajaduste jaoks ja täiustad seda saadud tagasiside põhjal.",
  },
  {
    icon: "flask",
    title: "Tegevusuuring oma klassis",
    text: "Kavandad, kuidas GenAI tööriistu oma õpetamises katsetada ja nende mõju tõenduspõhiselt hinnata.",
  },
  {
    icon: "userSmall",
    title: "Kuni 25 osalejat",
    text: "Väike grupp jätab ruumi paaris- ja grupiaruteludeks, koostööks ja tagasisideks.",
  },
  {
    icon: "messages",
    title: "Tugi Moodle'is",
    text: "Õpipäevik, foorumid, õppematerjalid ja juhised on ühes kohas. Ülesannetele saad jooksvalt tagasisidet.",
  },
  {
    icon: "award",
    title: "Tartu Ülikooli tunnistus",
    text: "Edukalt lõpetanud osaleja saab Tartu Ülikooli täiendusõppe tunnistuse.",
  },
];

export const outcomes: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "brain",
    title: "Mõistad GenAI põhialuseid",
    text: "Tead generatiivse tehisintellekti põhialuseid ning oskad selgitada nende võimalusi hariduses.",
  },
  {
    icon: "target",
    title: "Kavandad õppija vajadustest lähtudes",
    text: "Kasutad GenAI tööriistu õppeprotsessis ja kavandad tegevusi, mis toetavad õpieesmärkide saavutamist.",
  },
  {
    icon: "route",
    title: "Personaliseerid õppimist",
    text: "Kasutad digivahendeid õppijate arengu ja õpiprotsessi jälgimiseks ning individuaalse arengu toetamiseks.",
  },
  {
    icon: "notebook",
    title: "Reflekteerid oma õpetamist",
    text: "Mõtestad GenAI mõju oma õpetamisele ning kohandad praktikat ja rakendad uusi lahendusi.",
  },
  {
    icon: "layers",
    title: "Lood juhendmaterjale",
    text: "Töötad välja juhendmaterjale ja metoodilisi lahendusi GenAI tööriistade kasutamiseks õppetöös.",
  },
  {
    icon: "shield",
    title: "Kaitsed andmeid",
    text: "Analüüsid ja rakendad andmekaitse põhimõtteid GenAI kasutamisel.",
  },
  {
    icon: "copyright",
    title: "Austad autoriõigust",
    text: "Selgitad ja järgid intellektuaalomandi ning autoriõiguse põhimõtteid GenAI kasutamisel.",
  },
];

/* ---------------------------------------------------------------------
 * PROGRAMM — neli õppepäeva
 * ------------------------------------------------------------------- */
export type Module = { phase: string; title: string; goal: string; topics: string[] };

export const modules: Module[] = [
  {
    phase: "Mõista",
    title: "GenAI baasteadmised",
    goal: "GenAI põhialused, rakendusvõimalused ja hariduslik kontekst.",
    topics: [
      "Mis on tehisintellekt? AI ajalugu, kitsas ja üldine AI, AI igapäevaelus ja hariduses",
      "Mis on generatiivne tehisintellekt? Tööpõhimõtted ja erinevused teistest AI liikidest",
      "Tekstide, piltide ja koodi genereerimine: loovuse ja sisuloome võimalused",
    ],
  },
  {
    phase: "Uuri",
    title: "GenAI õpetamises ja õppimises",
    goal: "Kuidas GenAI saab tõhustada õpetamist ja õppimist.",
    topics: [
      "Ülevaade: hindamine, personaliseeritud õpirajad, õpetaja abivahendid, õpiülesannete loomine",
      "Töötuba „Kas on olemas GenAI, mis…?“: hariduslike probleemide lahendused",
      "Koostöötuba: tööriistade hindamine, turvalisus, andmekaitse ja autoriõigus",
    ],
  },
  {
    phase: "Loo",
    title: "CustomGPT loomine ja rakendamine",
    goal: "Praktilised oskused kohandatud AI-lahenduste loomiseks.",
    topics: [
      "Töötuba: oma CustomGPT loomine hariduslike vajaduste järgi",
      "Koostöötuba: mudelite hindamine ja kohandamine tagasiside põhjal",
      "Tegevusuuringu kava loomine oma töö arendamiseks",
    ],
  },
  {
    phase: "Jaga",
    title: "Kokkuvõte ja tulevikuplaanid",
    goal: "Õpitu kinnistamine ja edasiste sammude planeerimine.",
    topics: [
      "Tegevusuuringu tulemuste esitlus ja arutelu",
      "GenAI rakenduste mõtestamine hariduses",
      "Kursuse kokkuvõte ja tegevuskava õpitu rakendamiseks",
    ],
  },
];

/* ---------------------------------------------------------------------
 * ÕPPEPROTSESS
 * ------------------------------------------------------------------- */
export const processSteps: { title: string; text: string }[] = [
  { title: "Eeltöö Moodle'is", text: "Ümberpööratud klassiruum: tutvud materjalidega enne õppepäeva." },
  { title: "Loeng ja arutelu", text: "Uus teema, näited ja paaris- ning grupiarutelud." },
  { title: "Praktiline töötuba", text: "Iga sessiooni lõpus katsetad ja lood ise AI-lahendusi." },
  { title: "Katsetamine klassis", text: "Proovid GenAI rakendusi oma klassiruumis." },
  { title: "Refleksioonipäevik", text: "Mõtestad, kuidas GenAI sinu õppetööd mõjutab." },
  { title: "Tagasiside", text: "Ülesannetele antakse jooksvalt tagasisidet." },
  { title: "Tegevusuuringu kava esitlus", text: "Lõpuseminaril esitled oma kava, saad ja annad tagasisidet." },
];

/* ---------------------------------------------------------------------
 * PRAKTILINE LÕPPTULEMUS
 * ------------------------------------------------------------------- */
export const finalResult = {
  statement:
    "Kursuse käigus lood oma kohandatud AI-mudeli (CustomGPT) ja koostad tegevusuuringu kava, et GenAI tööriistu oma klassiruumis katsetada ja hinnata.",
  items: [
    "CustomGPT, mis lähtub sinu õpilaste vajadustest",
    "mudeli täiendused kaaslaste tagasiside põhjal",
    "tegevusuuringu kava selgete eesmärkidega",
    "sobivad andmete kogumise meetodid",
    "kriitiliste tegurite arvestamine: tehnoloogilised piirangud, eetika, õpilaste vajadused",
    "refleksioonipäevik oma õppimisest",
    "tegevuskava õpitu rakendamiseks oma töös",
  ],
};

/* ---------------------------------------------------------------------
 * SEOS ÕPETAJA KUTSESTANDARDIGA (tase 7)
 * ------------------------------------------------------------------- */
export const competences = {
  standard: "Kutsestandard „Õpetaja, tase 7“",
  items: [
    { title: "Digipädevus (B.2.8)", text: "digivahendite mõtestatud kasutamine ja soovitamine, digipedagoogika rakendamine" },
    { title: "Õppijate toetamine (B.3.2.3)", text: "õppija arengu toetamine ja õpiprotsessi personaliseerimine AI tööriistadega" },
    { title: "Digitehnoloogiad kaasamiseks (B.3.2.9)", text: "AI kasutamine õppijate kaasamiseks ja motiveerimiseks" },
    { title: "Refleksioon ja enesearendamine (B.2.1)", text: "AI mõju analüüs oma õpetamistööle" },
    { title: "Info ja andmete vastutustundlik käsitlemine (B.3.3.6)", text: "andmekaitse, intellektuaalomand ja autoriõigus GenAI kasutamisel" },
  ],
  priorities: [
    "analüüsioskus ja uurimispädevus",
    "haridustehnoloogiate mõtestatud rakendamine",
    "kaasav haridus",
    "kestlik areng",
  ],
};

/* ---------------------------------------------------------------------
 * LÕPETAMINE
 * ------------------------------------------------------------------- */
export const completion: { icon: IconKey; title: string; text: string }[] = [
  { icon: "calendar", title: "Osalemine", text: "Osaled auditoorses töös vähemalt 75% ulatuses." },
  { icon: "notebook", title: "Refleksioonipäevik", text: "Reflekteerid kursuse jooksul, kuidas näed GenAI rakendamist oma õppetöös." },
  { icon: "folder", title: "Tegevusuuringu kava", text: "Koostad nõuetele vastava kava ja tutvustad seda teistele." },
  { icon: "scale", title: "Hindamine", text: "Eristamata hindamine: arvestatud / mittearvestatud." },
];

/* ---------------------------------------------------------------------
 * KKK
 * ------------------------------------------------------------------- */
export const faq: { q: string; a: string }[] = [
  {
    q: "Kellele koolitus sobib?",
    a: "Üldhariduskoolide ja kutseõppe õpetajatele, kes soovivad kasutada generatiivset tehisintellekti oma õppetöös läbimõeldult ja õppija vajadustest lähtudes.",
  },
  {
    q: "Mis on CustomGPT?",
    a: "Kohandatud AI-mudel, mille õpetaja seadistab kindla eesmärgi ja oma õpilaste vajaduste järgi. Kolmandal õppepäeval lood oma CustomGPT ning täiendad seda kaaslaste tagasiside põhjal.",
  },
  {
    q: "Mis on tegevusuuringu kava?",
    a: "Kava, kuidas sa GenAI lahendusi oma õpetamispraktikas katsetad ja hindad: eesmärgid, andmete kogumise meetodid ning kriitilised tegurid, näiteks tehnoloogilised piirangud, eetilised aspektid ja õpilaste vajadused.",
  },
  {
    q: "Kui suur on koolituse maht?",
    a: "78 akadeemilist tundi: 32 tundi auditoorset tööd (neli 8-tunnist õppepäeva) ja 46 tundi iseseisvat tööd.",
  },
  {
    q: "Kus koolitus toimub ja kui suur on grupp?",
    a: "Õppepäevad toimuvad Tartus. Grupis on kuni 25 osalejat.",
  },
  {
    q: "Millal koolitus toimub?",
    a: "Toimumisaja ja registreerimise info leiad Haridusportaalist (nupp „Registreeru koolitusele“).",
  },
  {
    q: "Millised on lõpetamise tingimused?",
    a: "Osalemine auditoorses töös vähemalt 75% ulatuses, refleksioonipäeviku täitmine ja nõuetele vastava tegevusuuringu kava koostamine. Hindamine on eristamata.",
  },
  {
    q: "Millise dokumendi osaleja saab?",
    a: "Edukalt lõpetanud osaleja saab Tartu Ülikooli täiendusõppe tunnistuse.",
  },
];

/* ---------------------------------------------------------------------
 * SEO
 * ------------------------------------------------------------------- */
export const seo = {
  title: "Harjutamine teeb meistriks: AI-kirjaoskus ja GenAI klassiruumis | Tartu Ülikool",
  description:
    "Praktiline täienduskoolitus üldhariduskoolide ja kutseõppe õpetajatele: GenAI põhialused, GenAI õppetöös, oma CustomGPT loomine ja tegevusuuring. 78 ak tundi, Tartu Ülikool.",
  ogTitle: "Harjutamine teeb meistriks: GenAI klassiruumis",
  ogDescription:
    "Tartu Ülikooli täienduskoolitus õpetajatele: neli praktilist õppepäeva, oma CustomGPT ja tegevusuuringu kava. Kuni 25 osalejat.",
};
