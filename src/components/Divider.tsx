import React from "react";
import { C } from "../tokens";

interface Props {
  children?: React.ReactNode;
}

export function Divider({ children }: Props) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      margin: "32px 0",
    }}>
      <div style={{ flex: 1, height: 1, background: C.border }} />
      {children && (
        <span style={{ fontSize: 13, color: C.label3, fontWeight: 500 }}>
          {children}
        </span>
      )}
      <div style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  );
}
