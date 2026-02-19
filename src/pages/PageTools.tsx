import { useState } from "react";
import { C } from "../tokens";
import { Fade } from "../components/Fade";
import { Tag } from "../components/Tag";
import { Field } from "../components/Field";
import { Result } from "../components/Result";
import { ProgressBar } from "../components/ProgressBar";
import { fmt } from "../utils";

export function PageTools() {
  const [calcTab, setCalcTab] = useState<"unit" | "pl">("unit");
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "72px 24px 0", textAlign: "center", background: C.bg }}>
        <Fade>
          <Tag>Инструменты</Tag>
          <h1 style={{ fontSize: "clamp(28px,5vw,56px)", fontWeight: 700, letterSpacing: -2, color: C.label, margin: "16px 0 14px" }}>
            Калькуляторы
          </h1>
          <p style={{ fontSize: 18, color: C.label3, maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Введите цифры своего бизнеса — получите моментальный расчёт
          </p>
          <div style={{ display: "inline-flex", background: C.bg2, borderRadius: 16, padding: 5, border: `1px solid ${C.border}`, marginBottom: 48, gap: 4 }}>
            {([{ id: "unit", label: "⚡ Юнит-экономика" }, { id: "pl", label: "📊 P&L Прогноз" }] as const).map(t => (
              <button key={t.id} onClick={() => setCalcTab(t.id)} style={{ padding: "10px 28px", borderRadius: 12, border: "none", background: calcTab === t.id ? C.surface : "transparent", color: calcTab === t.id ? C.label : C.label3, fontSize: 15, fontWeight: calcTab === t.id ? 600 : 400, fontFamily: "inherit", cursor: "pointer", boxShadow: calcTab === t.id ? "0 2px 12px rgba(0,0,0,0.10)" : "none", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
                {t.label}
              </button>
            ))}
          </div>
        </Fade>
      </section>
      <section style={{ padding: "0 24px 80px", background: C.bg }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          {calcTab === "unit" ? <UnitCalc /> : <PLCalc />}
        </div>
      </section>
    </div>
  );
}

function UnitCalc() {
  const [price, setPrice] = useState(2500);
  const [cost, setCost] = useState(800);
  const [cac, setCac] = useState(600);
  const [ltvM, setLtvM] = useState(6);
  const [orders, setOrders] = useState(150);
  const [fixed, setFixed] = useState(120000);
  const margin = price - cost;
  const marginPct = price > 0 ? (margin / price) * 100 : 0;
  const ltv = margin * ltvM;
  const ltvCac = cac > 0 ? ltv / cac : 0;
  const revenue = price * orders;
  const netProfit = margin * orders - fixed;
  const breakeven = margin > 0 ? Math.ceil(fixed / margin) : 0;
  const payback = margin > 0 ? Math.ceil(cac / margin) : 0;
  const status = ltvCac >= 3 ? { text: "Экономика здоровая", color: C.green } : ltvCac >= 1 ? { text: "Требует оптимизации", color: C.orange } : { text: "Убыточная юнит-экономика", color: C.red };
  return (
    <Fade>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: C.bg2, borderRadius: 22, padding: 28, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: C.label, marginBottom: 4 }}>Параметры бизнеса</div>
          <Field label="Цена продажи" value={price} setValue={setPrice} prefix="₽" />
          <Field label="Себестоимость единицы" value={cost} setValue={setCost} prefix="₽" />
          <Field label="Стоимость привлечения (CAC)" value={cac} setValue={setCac} prefix="₽" />
          <Field label="Месяцев жизни клиента" value={ltvM} setValue={setLtvM} min={1} />
          <Field label="Продаж в месяц" value={orders} setValue={setOrders} min={1} />
          <Field label="Постоянные расходы/мес" value={fixed} setValue={setFixed} prefix="₽" />
          <div style={{ background: C.blueSoft, borderRadius: 12, padding: "12px 16px", fontSize: 13, color: C.blue, lineHeight: 1.5 }}>
            💡 LTV/CAC ≥ 3 — здоровая экономика. Меньше 1 — бизнес теряет деньги на каждом клиенте.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: status.color + "12", borderRadius: 16, padding: "16px 20px", border: `1.5px solid ${status.color}35`, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: status.color, flexShrink: 0 }} />
            <div style={{ fontSize: 15, fontWeight: 600, color: status.color }}>{status.text}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Result label="Маржа на единицу" value={fmt(margin, " ₽")} color={margin > 0 ? C.green : C.red} />
            <Result label="Маржинальность" value={marginPct.toFixed(1) + "%"} color={marginPct > 30 ? C.green : C.orange} />
            <Result label="LTV клиента" value={fmt(ltv, " ₽")} color={C.blue} />
            <Result label="LTV / CAC" value={ltvCac.toFixed(2)} color={status.color} />
            <Result label="Выручка / месяц" value={fmt(revenue, " ₽")} color={C.label} />
            <Result label="Чистая прибыль/мес" value={fmt(netProfit, " ₽")} color={netProfit > 0 ? C.green : C.red} />
          </div>
          <div style={{ background: C.bg2, borderRadius: 16, padding: "18px 20px", border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 12, color: C.label3, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: 0.5, fontWeight: 500 }}>Точка безубыточности</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <span style={{ fontSize: 26, fontWeight: 700, color: C.label, letterSpacing: -1 }}>{breakeven.toLocaleString("ru-RU")} ед.</span>
              <span style={{ fontSize: 14, color: C.label3 }}>Окупаемость CAC: <b style={{ color: C.label }}>{payback} мес.</b></span>
            </div>
            <ProgressBar value={Math.min((orders / Math.max(breakeven, 1)) * 100, 100)} color={orders >= breakeven ? C.green : C.orange} />
            <div style={{ fontSize: 12, color: C.label4, marginTop: 8 }}>
              {orders >= breakeven ? `✓ Вы в плюсе на ${(orders - breakeven).toLocaleString("ru-RU")} ед.` : `До окупаемости: ${(breakeven - orders).toLocaleString("ru-RU")} ед.`}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

function PLCalc() {
  const [rev, setRev] = useState(500000);
  const [growth, setGrowth] = useState(10);
  const [cogs, setCogs] = useState(40);
  const [opex, setOpex] = useState(150000);
  const [tax, setTax] = useState(6);
  const [months, setMonths] = useState(12);
  const rows = Array.from({ length: Math.min(Math.max(months, 1), 24) }, (_, i) => {
    const r = rev * Math.pow(1 + growth / 100, i);
    const g = r * (1 - cogs / 100);
    const op = g - opex;
    const t = op > 0 ? op * (tax / 100) : 0;
    const n = op - t;
    return { month: i + 1, rev: r, net: n };
  });
  const totalRev = rows.reduce((a, r) => a + r.rev, 0);
  const totalNet = rows.reduce((a, r) => a + r.net, 0);
  const avgMargin = rows.length ? (rows.reduce((a, r) => a + (r.rev > 0 ? r.net / r.rev : 0), 0) / rows.length) * 100 : 0;
  const profitable = rows.filter(r => r.net > 0).length;
  const maxNet = Math.max(...rows.map(r => Math.abs(r.net)), 1);
  return (
    <Fade>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: C.bg2, borderRadius: 22, padding: 28, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: C.label, marginBottom: 4 }}>Параметры прогноза</div>
          <Field label="Выручка в 1-й месяц" value={rev} setValue={setRev} prefix="₽" />
          <Field label="Рост выручки / мес (%)" value={growth} setValue={setGrowth} prefix="%" min={0} />
          <Field label="Себестоимость COGS (%)" value={cogs} setValue={setCogs} prefix="%" min={0} />
          <Field label="Операционные расходы" value={opex} setValue={setOpex} prefix="₽" />
          <Field label="Налоговая ставка (%)" value={tax} setValue={setTax} prefix="%" min={0} />
          <Field label="Период (месяцев)" value={months} setValue={setMonths} min={1} />
          <div style={{ background: C.greenSoft, borderRadius: 12, padding: "12px 16px", fontSize: 13, color: C.green, lineHeight: 1.5 }}>
            💡 Прогноз строится с учётом сложного роста. Налог начисляется только на положительную прибыль.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Result label="Общая выручка" value={fmt(totalRev, " ₽")} color={C.blue} />
            <Result label="Чистая прибыль" value={fmt(totalNet, " ₽")} color={totalNet > 0 ? C.green : C.red} />
            <Result label="Средняя маржа" value={avgMargin.toFixed(1) + "%"} color={avgMargin > 15 ? C.green : C.orange} />
            <Result label="Прибыльных мес." value={`${profitable} / ${rows.length}`} color={C.label} />
          </div>
          <div style={{ background: C.bg2, borderRadius: 16, padding: "18px 20px", border: `1px solid ${C.border}`, flex: 1 }}>
            <div style={{ fontSize: 12, color: C.label3, marginBottom: 14, textTransform: "uppercase" as const, letterSpacing: 0.5, fontWeight: 500 }}>Динамика чистой прибыли</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {rows.slice(0, 8).map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 11, color: C.label4, width: 26, flexShrink: 0, textAlign: "right" as const }}>М{r.month}</span>
                  <div style={{ flex: 1 }}><ProgressBar value={Math.min((Math.abs(r.net) / maxNet) * 100, 100)} color={r.net >= 0 ? C.green : C.red} delay={i * 60} height={5} /></div>
                  <span style={{ fontSize: 11, width: 80, textAlign: "right" as const, flexShrink: 0, color: r.net >= 0 ? C.green : C.red, fontWeight: 600 }}>{fmt(r.net, " ₽")}</span>
                </div>
              ))}
              {rows.length > 8 && <div style={{ fontSize: 12, color: C.label4, textAlign: "center" as const, paddingTop: 4 }}>+ ещё {rows.length - 8} мес.</div>}
            </div>
          </div>
          {rows.length > 0 && (
            <div style={{ background: rows[rows.length-1].net > 0 ? C.greenSoft : C.redSoft, borderRadius: 14, padding: "14px 18px", border: `1px solid ${rows[rows.length-1].net > 0 ? C.green : C.red}30` }}>
              <div style={{ fontSize: 12, color: C.label3, marginBottom: 4 }}>Прибыль в месяц {rows.length}</div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: rows[rows.length-1].net > 0 ? C.green : C.red }}>{fmt(rows[rows.length-1].net, " ₽")}</div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
