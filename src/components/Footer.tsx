import React from "react";
import { C } from "../tokens";

interface Props {
  setPage: (p: string) => void;
}

export function Footer({ setPage }: Props) {
  return (
    <footer style={{
      background: C.bg2,
      borderTop: `1px solid ${C.border}`,
      padding: "40px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: C.label, marginBottom: 16 }}>Продукт</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Юнит-экономика", "P&L", "Кассовый разрыв"].map(item => (
                <button
                  key={item}
                  onClick={() => setPage("tools")}
                  style={{
                    background: "none",
                    border: "none",
                    color: C.label3,
                    fontSize: 14,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    padding: 0,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: C.label, marginBottom: 16 }}>Компания</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["О нас", "Блог", "Карьера"].map(item => (
                <button
                  key={item}
                  style={{
                    background: "none",
                    border: "none",
                    color: C.label3,
                    fontSize: 14,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    padding: 0,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: C.label, marginBottom: 16 }}>Поддержка</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Помощь", "Контакты", "FAQ"].map(item => (
                <button
                  key={item}
                  style={{
                    background: "none",
                    border: "none",
                    color: C.label3,
                    fontSize: 14,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    padding: 0,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{ paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
          <p style={{ fontSize: 14, color: C.label3, margin: 0 }}>
            © 2026 Цифры. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
