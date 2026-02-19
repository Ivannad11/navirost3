import { C } from "../tokens";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

export function Button({ children, primary, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: 980,
        border: "none",
        fontSize: 15,
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "inherit",
        background: primary ? C.blue : "rgba(0,0,0,0.04)",
        color: primary ? "#fff" : C.label,
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}
