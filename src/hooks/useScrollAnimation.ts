import { useEffect, useRef } from "react";

export function useScrollAnimation(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.15, ...options }
    );

    el.classList.add(
      "transition-all",
      "duration-700",
      "opacity-0",
      "translate-y-6"
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
