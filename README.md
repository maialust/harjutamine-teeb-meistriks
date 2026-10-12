# „Harjutamine teeb meistriks“ — koolituse tutvustusleht

Tartu Ülikooli haridusteaduste instituudi täienduskoolitus „Harjutamine teeb meistriks“: AI-kirjaoskuse arendamine GenAI abil klassiruumis.

Leht: https://maialust.github.io/harjutamine-teeb-meistriks/

## Kuidas lehte muuta

**Kogu tekst ja info on ühes failis:** `src/data/course.ts`.
GitHubis: ava fail → pliiatsi ikoon („Edit this file“) → muuda → **Commit changes**. Leht uueneb automaatselt mõne minuti pärast.

| Mida muuta | Kus failis `src/data/course.ts` |
| --- | --- |
| Registreerimislink | `REGISTRATION_URL` |
| Toimumisaeg (praegu ei näidata) | `groups` — lisa näiteks `{ label: "Järgmine grupp", period: "veebruar–aprill 2027" }` |
| Koolitajad | `trainers` (foto failinimi kaustas `public/`, lingid ETIS, ORCID, portfoolio) |
| Õpiväljundid | `outcomes` |
| Neli õppepäeva | `modules` |
| KKK | `faq` |

## Pildid

Kaustas `public/`: `tu-hti-logo.png` (Tartu Ülikooli haridusteaduste instituudi logo), `maia-lust.jpg`, `og-image.png` (jagamise eelvaade), `favicon.png`.
Teiste koolitajate fotod: lisa pilt kausta `public/` ja kirjuta failinimi koolitaja `photo` väljale.

## Tehniline

React + Vite + TypeScript + Tailwind CSS. Avaldamine käib automaatselt GitHub Actionsi kaudu (`.github/workflows/deploy.yml`).
Leht ei kogu isikuandmeid ega kasuta küpsiseid.
