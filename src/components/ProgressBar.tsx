import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { C } from "../tokens";

interface Props {
  value: number;
  color: string;
  delay?: number;
}

export function ProgressBar({ value, color, delay = 0 }: Props) {
  const [w, setW] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setW(value), delay + 100);
      return () => clearTimeout(t);
    }
  }, [inView, value, delay]);

  return (
    <div
      ref={ref}
      style={{ background: C.bg2, borderRadius: 980, height: 6, overflow: "hidden" }}
    >
      <div style={{
        height: "100%",
        width: w + "%",
        background: color,
        borderRadius: 980,
        transition: "width 1s cubic-bezier(.22,1,.36,1)",
      }} />
    </div>
  );
}
