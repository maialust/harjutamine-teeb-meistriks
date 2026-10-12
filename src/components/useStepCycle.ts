import { useEffect, useState } from "react";

/**
 * Elemendid (etapid, kaardid) süttivad kordamööda. Kui kasutaja viib hiire või fookuse
 * kaardile, jääb see element esile.
 */
export function useStepCycle(
  count: number,
  sectionRef: React.RefObject<HTMLElement | null>,
  intervalMs = 2200,
) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    // Esiletõst liigub ka siis, kui seadmes on animatsioonid vähendatud (vahetub ilma üleminekuta).
    if (paused || !inView) return;
    const id = window.setInterval(() => setActive((v) => (v + 1) % count), intervalMs);
    return () => window.clearInterval(id);
  }, [paused, inView, count, intervalMs]);

  return { active, setActive, setPaused, reduced };
}
