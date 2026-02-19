import { useState, useEffect } from "react";
import { C } from "../tokens";

interface Props { activePage: string; setPage: (p: string) => void; }

const links = [
  { id: "home",    label: "Главная"     },
  { id: "system",  label: "Система"     },
  { id: "tools",   label: "Инструменты" },
  { id: "pricing", label: "Тарифы"      },
];

export function Navbar({ activePage, setPage }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id: string) => { setPage(id); setOpen(false); };

  const css = `
    .nb{position:fixed;top:0;left:0;right:0;z-index:1000;height:54px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;transition:background 0.3s,border-color 0.3s}
    .nb-logo{background:none;border:none;padding:0;cursor:pointer;font-size:18px;font-weight:700;letter-spacing:-0.5px;font-family:inherit;color:#1d1d1f}
    .nb-center{position:absolute;left:50%;transform:translateX(-50%);display:flex;gap:2px}
    .nb-link{padding:6px 14px;border-radius:980px;border:none;font-size:14px;font-family:inherit;cursor:pointer;transition:all 0.15s;white-space:nowrap;background:transparent}
    .nb-cta{padding:7px 20px;border-radius:980px;border:none;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer;background:#0071e3;color:#fff;white-space:nowrap}
    .nb-burger{width:40px;height:40px;border-radius:12px;border:none;cursor:pointer;position:relative;background:transparent}
    .nb-line{display:block;width:22px;height:2px;border-radius:2px;background:#1d1d1f;position:absolute;left:50%;margin-left:-11px;top:50%;transition:transform 0.28s cubic-bezier(.22,1,.36,1),opacity 0.2s}
    .nb-menu{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:rgba(255,255,255,0.97);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);flex-direction:column;padding:80px 24px 40px;overflow-y:auto;transition:transform 0.35s cubic-bezier(.22,1,.36,1)}
    .nb-mlink{padding:18px 20px;border-radius:16px;border:none;font-size:20px;font-family:inherit;cursor:pointer;text-align:left;display:flex;align-items:center;justify-content:space-between;width:100%}
    .nb-mcta{width:100%;padding:17px 24px;border-radius:18px;border:none;background:#0071e3;color:#fff;font-size:17px;font-weight:600;font-family:inherit;cursor:pointer;box-shadow:0 8px 32px rgba(0,113,227,0.28)}
    @media(min-width:701px){
      .nb-burger{display:none!important}
      .nb-menu{display:none!important}
    }
    @media(max-width:700px){
      .nb-center{display:none!important}
      .nb-cta{display:none!important}
      .nb-burger{display:block!important}
      .nb-menu{display:flex!important}
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nb" style={{
        background: scrolled || open ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled || open ? "saturate(180%) blur(20px)" : "none",
        WebkitBackdropFilter: scrolled || open ? "saturate(180%) blur(20px)" : "none",
        borderBottom: scrolled || open ? `1px solid ${C.border}` : "1px solid transparent",
      }}>
        <button className="nb-logo" onClick={() => go("home")}>
          цифры<span style={{ color: C.blue }}>.</span>рф
        </button>

        <div className="nb-center">
          {links.map(l => (
            <button key={l.id} className="nb-link" onClick={() => go(l.id)} style={{
              background: activePage === l.id ? "rgba(0,0,0,0.06)" : "transparent",
              color: activePage === l.id ? C.label : C.label3,
              fontWeight: activePage === l.id ? 600 : 400,
            }}>{l.label}</button>
          ))}
        </div>

        <button className="nb-cta" onClick={() => go("tools")}>Начать</button>

        <button
          className="nb-burger"
          onClick={() => setOpen(o => !o)}
          style={{ background: open ? "rgba(0,0,0,0.06)" : "transparent" }}
          aria-label="Меню"
        >
          <span className="nb-line" style={{
            transform: open ? "translateY(-50%) rotate(45deg)" : "translateY(calc(-50% - 7px))",
          }} />
          <span className="nb-line" style={{
            transform: "translateY(-50%)",
            opacity: open ? 0 : 1,
          }} />
          <span className="nb-line" style={{
            transform: open ? "translateY(-50%) rotate(-45deg)" : "translateY(calc(-50% + 7px))",
          }} />
        </button>
      </nav>

      <div className="nb-menu" style={{
        transform: open ? "translateX(0)" : "translateX(100%)",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {links.map((l, i) => (
            <button key={l.id} className="nb-mlink" onClick={() => go(l.id)} style={{
              background: activePage === l.id ? C.blueSoft : "transparent",
              color: activePage === l.id ? C.blue : C.label,
              fontWeight: activePage === l.id ? 700 : 400,
              transform: open ? "translateX(0)" : "translateX(40px)",
              opacity: open ? 1 : 0,
              transition: `transform 0.35s cubic-bezier(.22,1,.36,1) ${i * 55}ms, opacity 0.3s ease ${i * 55}ms`,
            }}>
              {l.label}
              {activePage === l.id && (
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.blue, display: "inline-block", flexShrink: 0 }} />
              )}
            </button>
          ))}
        </div>

        <div style={{
          marginTop: 24,
          transform: open ? "translateY(0)" : "translateY(20px)",
          opacity: open ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(.22,1,.36,1) 0.2s, opacity 0.3s ease 0.2s",
        }}>
          <button className="nb-mcta" onClick={() => go("tools")}>
            Начать бесплатно →
          </button>
          <div style={{ marginTop: 14, display: "flex", gap: 16, justifyContent: "center" }}>
            {["Конфиденциальность", "Условия"].map(t => (
              <span key={t} style={{ fontSize: 13, color: C.label4 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
