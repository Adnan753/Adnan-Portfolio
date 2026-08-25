import { useEffect } from 'react';

/**
 * Adds `.is-in` to every `[data-reveal]` element once it scrolls into view.
 * Mirrors the reveal behaviour of the design canvas; the CSS already opts out
 * under `prefers-reduced-motion`, and so does this observer.
 */
export default function useReveal(): void {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
