import { useEffect, useState } from "react";

export const useAnimatedCounter = (end: number, duration = 2000, start = 0, trigger = true) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(start + (end - start) * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start, trigger]);

  return count;
};
