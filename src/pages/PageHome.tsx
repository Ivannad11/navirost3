import { useState, useEffect } from "react";
import { C } from "../tokens";
import { Fade } from "../components/Fade";
import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Counter } from "../components/Counter";
import { ProgressBar } from "../components/ProgressBar";

interface Props { setPage: (p: string) => void; }

function useW() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

export function PageHome({ setPage }: Props) {
  const w = useW();
  const mob = w < 700;

  const metrics = [
    { label: "Выручка",        to: "1248000", suffix: " ₽", delta: "+18%", up: true  },
    { label: "Чистая прибыль", to: "312000",  suffix: " ₽", delta: "+12%", up: true  },
    { label: "Маржа",          to: "25",       suffix: "%",  delta: "−2%",  up: false },
  ];
  const bars = [
    { label: "Выручка vs план",  val: 78, color: C.blue   },
    { label: "Расходы vs план",  val: 62, color: C.orange  },
    { label: "Прибыль vs план",  val: 91, color: C.green   },
  ];
  const steps = [
    { n: "01", title: "Маржинальность",   desc: "Расчёт прибыли с одной продажи." },
    { n: "02", title: "Прогноз P&L",       desc: "Прогноз на 12 месяцев вперёд." },
    { n: "03", title: "Налоги",            desc: "Сравнение УСН, ОСНО и Патента.", soon: true },
    { n: "04", title: "Точка окупаемости", desc: "Сколько продать, чтобы выйти в ноль." },
  ];
  const modules = [
    { icon: "chart",     label: "Финансы",   desc: "P&L, маржа"        },
    { icon: "lightning", label: "Маркетинг", desc: "CAC, LTV, ROMI"    },
    { icon: "diamond",   label: "Продукт",   desc: "Юнит-экономика"    },
    { icon: "people",    label: "Команда",   desc: "ФОТ, KPI"          },
    { icon: "law",       label: "Право",     desc: "Налоги и режимы"   },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding: mob ? "100px 20px 60px" : "120px 24px 80px", background:"linear-gradient(180deg,#fff 0%,#f5f5f7 100%)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"8%", left:"50%", transform:"translateX(-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,113,227,0.06) 0%,transparent 70%)", pointerEvents:"none" }} />

        <Fade><Tag>Платформа для бизнеса</Tag></Fade>

        <Fade delay={80}>
          <h1 style={{ fontSize: mob ? "clamp(30px,9vw,46px)" : "clamp(38px,7vw,76px)", fontWeight:700, letterSpacing: mob ? -1 : -2.5, lineHeight:1.08, color:C.label, margin:"18px 0 0", maxWidth: mob ? 320 : 820 }}>
            Управляйте бизнесом{" "}<span style={{ color:C.blue }}>на основе цифр</span>
          </h1>
        </Fade>

        <Fade delay={160}>
          <p style={{ fontSize: mob ? 15 : 19, color:C.label3, maxWidth: mob ? 300 : 520, lineHeight:1.65, margin:"20px auto 0" }}>
            Платформа для расчёта юнит-экономики, P&L и налоговой нагрузки. Без сложных таблиц.
          </p>
        </Fade>

        <Fade delay={240}>
          <div style={{ display:"flex", gap:10, marginTop:28, flexWrap:"wrap", justifyContent:"center" }}>
            <Button primary large={!mob} onClick={() => setPage("tools")}>
              Начать бесплатно <Icon name="arrow" size={16} color="#fff" />
            </Button>
            <Button large={!mob} onClick={() => setPage("system")}>Как это работает</Button>
          </div>
        </Fade>

        {/* Badges */}
        <Fade delay={300}>
          <div style={{ display:"flex", flexDirection: mob ? "column" : "row", marginTop:44, background:C.surface, borderRadius:20, boxShadow:"0 2px 24px rgba(0,0,0,0.07)", border:`1px solid ${C.border}`, overflow:"hidden", width: mob ? "100%" : "auto", maxWidth: mob ? 340 : "none" }}>
            {[{title:"2 мин",sub:"До первого расчёта"},{title:"24/7",sub:"Доступ к платформе"},{title:"0 ₽",sub:"Базовый тариф"}].map((f,i,arr) => (
              <div key={i} style={{ display:"flex" }}>
                <div style={{ padding: mob ? "14px 24px" : "22px 40px", display:"flex", flexDirection: mob ? "row" : "column", alignItems:"center", gap: mob ? 10 : 0, flex:1 }}>
                  <div style={{ fontSize: mob ? 20 : 26, fontWeight:700, color:C.label, letterSpacing:-1 }}>{f.title}</div>
                  <div style={{ fontSize:13, color:C.label3, marginTop: mob ? 0 : 4 }}>{f.sub}</div>
                </div>
                {i < arr.length-1 && <div style={ mob ? {height:1,background:C.border,margin:"0 16px"} : {width:1,background:C.border,margin:"14px 0"} } />}
              </div>
            ))}
          </div>
        </Fade>

        {/* Dashboard preview */}
        <Fade delay={380} style={{ width:"100%", maxWidth: mob ? 360 : 860, marginTop:44 }}>
          <div style={{ background:C.surface, borderRadius: mob ? 20 : 24, boxShadow:"0 8px 48px rgba(0,0,0,0.10)", border:`1px solid ${C.border}`, overflow:"hidden" }}>
            {/* Browser bar — desktop only */}
            {!mob && (
              <div style={{ background:C.bg2, padding:"12px 20px", display:"flex", alignItems:"center", gap:8, borderBottom:`1px solid ${C.border}` }}>
                {["#ff5f57","#febc2e","#28c840"].map((col,i) => (
                  <div key={i} style={{ width:12, height:12, borderRadius:"50%", background:col }} />
                ))}
                <div style={{ marginLeft:12, height:24, borderRadius:6, background:"rgba(0,0,0,0.06)", width:200, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:11, color:C.label4 }}>цифры.рф</span>
                </div>
              </div>
            )}

            {/* Metric cards */}
            <div style={{ padding: mob ? 14 : 22, display:"grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: mob ? 10 : 12 }}>
              {metrics.map((m,i) => (
                <div key={i} style={{ background:C.bg2, borderRadius:14, padding: mob ? "12px 16px" : "14px 16px", border:`1px solid ${C.border}`, display:"flex", flexDirection: mob ? "row" : "column", alignItems: mob ? "center" : "flex-start", justifyContent: mob ? "space-between" : "flex-start", gap: mob ? 0 : 0 }}>
                  <div style={{ fontSize:12, color:C.label3, marginBottom: mob ? 0 : 8 }}>{m.label}</div>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ fontSize: mob ? 15 : 18, fontWeight:700, color:C.label }}>
                      <Counter to={m.to} suffix={m.suffix} />
                    </div>
                    <div style={{ fontSize:11, fontWeight:600, color: m.up ? C.green : C.red, background: m.up ? C.greenSoft : C.redSoft, padding:"2px 7px", borderRadius:980 }}>{m.delta}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div style={{ padding: mob ? "0 14px 14px" : "0 22px 22px", display:"flex", flexDirection:"column", gap:10 }}>
              {bars.map((b,i) => (
                <div key={i}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                    <span style={{ fontSize:12, color:C.label2 }}>{b.label}</span>
                    <span style={{ fontSize:12, fontWeight:600, color:b.color }}>{b.val}%</span>
                  </div>
                  <ProgressBar value={b.val} color={b.color} delay={i*120} />
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      {/* ШАГИ */}
      <section style={{ padding: mob ? "60px 16px" : "100px 24px", background:C.bg2 }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <Fade>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <Tag>Финансовое планирование</Tag>
              <h2 style={{ fontSize:"clamp(22px,4vw,44px)", fontWeight:700, letterSpacing:-1.5, color:C.label, margin:"14px 0 10px" }}>Полный контроль над деньгами</h2>
              <p style={{ fontSize: mob ? 15 : 17, color:C.label3, maxWidth:400, margin:"0 auto" }}>Четыре шага от хаоса к прозрачной финансовой модели</p>
            </div>
          </Fade>
          <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr" : "repeat(2,1fr)", gap:14 }}>
            {steps.map((s,i) => <Fade key={i} delay={i*70}><StepCard s={s} /></Fade>)}
          </div>
        </div>
      </section>

      {/* МОДУЛИ */}
      <section style={{ padding: mob ? "60px 16px" : "100px 24px", background:C.bg }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <Fade>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <Tag>Система управления</Tag>
              <h2 style={{ fontSize:"clamp(22px,4vw,44px)", fontWeight:700, letterSpacing:-1.5, color:C.label, margin:"14px 0 10px" }}>Все метрики в одном месте</h2>
            </div>
          </Fade>
          <div style={{ display:"grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(5,1fr)", gap:12 }}>
            {modules.map((m,i) => <Fade key={i} delay={i*60}><ModuleCard m={m} /></Fade>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: mob ? "48px 16px" : "80px 24px", background:C.bg2 }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <Fade>
            <div style={{ background:C.blue, borderRadius: mob ? 22 : 28, padding: mob ? "36px 24px" : "56px 48px", textAlign:"center", boxShadow:"0 12px 60px rgba(0,113,227,0.28)" }}>
              <h2 style={{ fontSize: mob ? "clamp(20px,6vw,28px)" : "clamp(22px,3.5vw,38px)", fontWeight:700, color:"#fff", letterSpacing:-1, margin:"0 0 12px" }}>Первый расчёт за 2 минуты</h2>
              <p style={{ fontSize: mob ? 14 : 17, color:"rgba(255,255,255,0.75)", margin:"0 0 26px", lineHeight:1.6 }}>Без регистрации. Без оплаты. Просто введите цифры.</p>
              <CtaBtn onClick={() => setPage("tools")}>Начать бесплатно →</CtaBtn>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}

function StepCard({ s }: { s: { n:string; title:string; desc:string; soon?:boolean } }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background:C.surface, borderRadius:20, padding:"22px 20px", border:`1px solid ${C.border}`, boxShadow: hov ? "0 8px 32px rgba(0,0,0,0.09)" : "0 2px 8px rgba(0,0,0,0.04)", transform: hov ? "translateY(-3px)" : "translateY(0)", transition:"all 0.22s ease" }}>
      <div style={{ fontSize:11, fontWeight:700, color:C.blue, marginBottom:10, letterSpacing:0.5 }}>ШАГ {s.n}</div>
      <div style={{ fontSize:17, fontWeight:700, color:C.label, marginBottom:8 }}>{s.title}</div>
      <div style={{ fontSize:14, color:C.label3, lineHeight:1.65 }}>{s.desc}</div>
      {s.soon && <div style={{ marginTop:10 }}><Tag color={C.orange}>Скоро</Tag></div>}
    </div>
  );
}

function ModuleCard({ m }: { m: { icon:string; label:string; desc:string } }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background:C.bg2, borderRadius:18, padding:"18px 16px", border:`1px solid ${C.border}`, display:"flex", flexDirection:"column", gap:10, boxShadow: hov ? "0 8px 24px rgba(0,0,0,0.08)" : "none", transform: hov ? "translateY(-3px)" : "translateY(0)", transition:"all 0.22s ease" }}>
      <div style={{ width:38, height:38, borderRadius:10, background:C.blueSoft, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Icon name={m.icon} size={18} color={C.blue} />
      </div>
      <div>
        <div style={{ fontSize:13, fontWeight:600, color:C.label }}>{m.label}</div>
        <div style={{ fontSize:12, color:C.label3, marginTop:3 }}>{m.desc}</div>
      </div>
    </div>
  );
}

function CtaBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ padding:"13px 28px", borderRadius:980, background:"#fff", color:C.blue, border:"none", fontSize:15, fontWeight:600, cursor:"pointer", fontFamily:"inherit", transform: hov ? "scale(1.03)" : "scale(1)", transition:"transform 0.2s ease" }}>
      {children}
    </button>
  );
}
