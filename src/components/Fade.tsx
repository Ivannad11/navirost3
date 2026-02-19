import { useInView } from "../hooks/useInView";

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

export function Fade({ children, delay = 0, style = {} }: FadeProps) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}
