import { useEffect, useRef, useState } from "react";

export function CountUp({
  to,
  duration = 1800,
  suffix = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduce) {
              setVal(to);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.floor(eased * to));
              if (p < 1) requestAnimationFrame(tick);
              else setVal(to);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="num">
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
