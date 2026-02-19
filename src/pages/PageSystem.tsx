import React from "react";
import { C } from "../tokens";
import { Fade } from "../components/Fade";
import { Tag } from "../components/Tag";

export function PageSystem() {
  return (
    <div style={{ padding: "100px 24px", background: C.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <Tag>Система управления</Tag>
            <h1 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: C.label, letterSpacing: -1.5, margin: "16px 0 20px" }}>
              Все метрики в одном месте
            </h1>
            <p style={{ fontSize: 18, color: C.label3, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Не теряйтесь в таблицах — вся картина бизнеса перед глазами
            </p>
          </div>
        </Fade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40 }}>
          {[
            {
              emoji: "📊",
              title: "Финансы и P&L",
              desc: "Доходы, расходы, маржа, прибыль — всё в реальном времени",
              features: ["Автоматический P&L", "Кассовый разрыв", "Маржинальность по продуктам"]
            },
            {
              emoji: "⚡️",
              title: "Маркетинг",
              desc: "CAC, LTV, ROMI — эффективность каждого рубля в маркетинге",
              features: ["Стоимость привлечения", "Пожизненная ценность", "ROI кампаний"]
            },
            {
              emoji: "💎",
              title: "Продукт",
              desc: "Метрики и юнит-экономика для принятия решений",
              features: ["Юнит-экономика", "Cohort анализ", "ARPU, ARPPU"]
            },
            {
              emoji: "👥",
              title: "Команда",
              desc: "ФОТ, эффективность, KPI — управление командой",
              features: ["Фонд оплаты труда", "Эффективность сотрудников", "KPI дашборд"]
            },
            {
              emoji: "⚖️",
              title: "Право и налоги",
              desc: "Налоговая нагрузка и режимы налогообложения",
              features: ["Сравнение режимов", "Налоговый календарь", "Автоматические отчёты"]
            },
            {
              emoji: "📈",
              title: "Аналитика",
              desc: "Глубокий анализ данных для роста бизнеса",
              features: ["Прогнозы", "Сценарный анализ", "Экспорт отчётов"]
            }
          ].map((module, i) => (
            <Fade key={i} delay={i * 80}>
              <div style={{
                background: C.surface,
                borderRadius: 20,
                padding: "32px 28px",
                border: `1px solid ${C.border}`,
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 20, textAlign: "center" }}>
                  {module.emoji}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: C.label, marginBottom: 12 }}>
                  {module.title}
                </h3>
                <p style={{ fontSize: 15, color: C.label3, lineHeight: 1.6, marginBottom: 20 }}>
                  {module.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {module.features.map((feature, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: C.green,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: 14, color: C.label3 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={400}>
          <div style={{
            textAlign: "center",
            marginTop: 80,
            padding: "60px 40px",
            background: C.blue,
            borderRadius: 24,
            color: "#fff",
          }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 16px" }}>
              Готовы к управлению бизнесом?
            </h2>
            <p style={{ fontSize: 18, margin: "0 0 32px", opacity: 0.9, lineHeight: 1.5 }}>
              Начните сегодня и получите первые инсайты уже завтра
            </p>
            <button
              onClick={() => window.location.href = "mailto:hello@цифры.рф"}
              style={{
                padding: "16px 40px",
                borderRadius: 980,
                border: "none",
                fontSize: 18,
                fontWeight: 600,
                background: "#fff",
                color: C.blue,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"}
            >
              Запросить демо
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
