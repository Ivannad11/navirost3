import { useState, useEffect, useRef } from "react";
import { C } from "../tokens";

interface Props {
  label: string;
  value: number;
  setValue: (v: number) => void;
  prefix?: string;
  min?: number;
}

export function Field({ label, value, setValue, prefix = "", min = 0 }: Props) {
  const [raw, setRaw] = useState(String(value));
  const isFocused = useRef(false);

  useEffect(() => {
    if (!isFocused.current) {
      const timer = setTimeout(() => setRaw(String(value)), 0);
      return () => clearTimeout(timer);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    setRaw(str);
    const num = parseFloat(str);
    if (!isNaN(num) && num >= min) setValue(num);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    isFocused.current = true;
    if (raw === "0" || raw === String(min)) setRaw("");
    e.target.select();
  };

  const handleBlur = () => {
    isFocused.current = false;
    const num = parseFloat(raw);
    if (isNaN(num) || num < min) {
      setRaw(String(min));
      setValue(min);
    } else {
      setRaw(String(num));
      setValue(num);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, color: C.label3, fontWeight: 500 }}>{label}</label>
      <div style={{
        display: "flex", alignItems: "center",
        background: C.bg2, borderRadius: 10,
        border: `1px solid ${C.border}`, overflow: "hidden",
      }}>
        {prefix && (
          <span style={{
            padding: "0 12px", fontSize: 15,
            color: C.label3, borderRight: `1px solid ${C.border}`,
            userSelect: "none" as const,
          }}>
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="decimal"
          value={raw}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            flex: 1, padding: "11px 14px", border: "none",
            background: "transparent", fontSize: 15,
            color: C.label, fontFamily: "inherit", outline: "none",
          }}
        />
      </div>
    </div>
  );
}
