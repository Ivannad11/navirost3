import { C } from "../tokens";

interface Props {
  children: React.ReactNode;
  color?: string;
}

export function Tag({ children, color = C.blue }: Props) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: 12,
      fontWeight: 600,
      padding: "4px 12px",
      borderRadius: 980,
      background: color + "15",
      color: color,
    }}>
      {children}
    </span>
  );
}
