import { C } from "../tokens";

interface Props {
  label: string;
  value: string | number;
  suffix?: string;
  color?: string;
  size?: "normal" | "large";
}

export function Result({ label, value, suffix = "", color = C.label, size = "normal" }: Props) {
  return (
    <div style={{
      background: C.bg2,
      borderRadius: 16,
      padding: "20px 24px",
      border: `1px solid ${C.border}`,
    }}>
      <div style={{ fontSize: 13, color: C.label3, marginBottom: 8 }}>{label}</div>
      <div style={{
        fontSize: size === "large" ? 32 : 24,
        fontWeight: 700,
        color,
        letterSpacing: -0.5,
      }}>
        {typeof value === "number" ? value.toLocaleString("ru-RU") : value}{suffix}
      </div>
    </div>
  );
}
