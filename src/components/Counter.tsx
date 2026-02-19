import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  to: string;
  suffix?: string;
}

export function Counter({ to, suffix = "" }: Props) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    const timer = setTimeout(() => setStarted(true), 0);
    return () => clearTimeout(timer);
  }, [inView, started]);

  useEffect(() => {
    if (!inView || !started) return;

    const end = parseInt(to.replace(/\D/g, ""));
    let current = 0;
    const duration = 1200;
    const step = Math.max(1, Math.ceil(end / (duration / 16)));

    const t = setInterval(() => {
      current += step;
      if (current >= end) {
        setVal(end);
        clearInterval(t);
      } else {
        setVal(current);
      }
    }, 16);

    return () => clearInterval(t);
  }, [inView, to, started]);

  return (
    <span ref={ref}>
      {val.toLocaleString("ru-RU")}{suffix}
    </span>
  );
}
