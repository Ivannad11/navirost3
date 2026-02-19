import React, { useState } from "react";
import { C } from "../tokens";
import { Fade } from "../components/Fade";
import { Tag } from "../components/Tag";
import { Button } from "../components/Button";

export function PagePricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Старт",
      desc: "Для малого бизнеса и фрилансеров",
      price: billing === "yearly" ? "990" : "99",
      oldPrice: billing === "yearly" ? "1188" : null,
      period: billing === "yearly" ? "/год" : "/мес",
      features: [
        "До 100 транзакций в месяц",
        "Базовый P&L отчёт",
        "Юнит-экономика",
        "Email поддержка"
      ],
      color: C.label,
      popular: false
    },
    {
      name: "Бизнес",
      desc: "Для растущих компаний",
      price: billing === "yearly" ? "1990" : "199",
      oldPrice: billing === "yearly" ? "2388" : null,
      period: billing === "yearly" ? "/год" : "/мес",
      features: [
        "До 1000 транзакций в месяц",
        "Продвинутый P&L анализ",
        "LTV/CAC расчёты",
        "Прогнозы на 12 месяцев",
        "Приоритетная поддержка"
      ],
      color: C.blue,
      popular: true
    },
    {
      name: "Корпорация",
      desc: "Для крупных компаний",
      price: "по запросу",
      oldPrice: null,
      period: "",
      features: [
        "Безлимитные транзакции",
        "Кастомные отчёты",
        "API доступ",
        "Выделенный менеджер",
        "SLA гарантия"
      ],
      color: C.label,
      popular: false
    }
  ];

  return (
    <div style={{ padding: "100px 24px", background: C.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <Tag>Тарифы</Tag>
            <h1 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: C.label, letterSpacing: -1.5, margin: "16px 0 20px" }}>
              Прозрачные цены для любого бизнеса
            </h1>
            <p style={{ fontSize: 18, color: C.label3, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Выберите тариф, который подходит именно вам. При оплате на год — скидка 17%
            </p>
          </div>
        </Fade>

        {/* Billing toggle */}
        <Fade delay={100}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 60,
            background: C.surface,
            borderRadius: 16,
            padding: 8,
            border: `1px solid ${C.border}`,
            width: "fit-content",
          }}>
            <button
              onClick={() => setBilling("monthly")}
              style={{
                padding: "12px 24px",
                borderRadius: 12,
                border: "none",
                background: billing === "monthly" ? C.blue : "transparent",
                color: billing === "monthly" ? "#fff" : C.label3,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
              }}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setBilling("yearly")}
              style={{
                padding: "12px 24px",
                borderRadius: 12,
                border: "none",
                background: billing === "yearly" ? C.blue : "transparent",
                color: billing === "yearly" ? "#fff" : C.label3,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                marginLeft: 8,
              }}
            >
              Ежегодно
              <span style={{
                background: C.green,
                color: "#fff",
                padding: "2px 6px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 600,
                marginLeft: 8,
              }}>
                −17%
              </span>
            </button>
          </div>
        </Fade>

        {/* Pricing cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 32 }}>
          {plans.map((plan, i) => (
            <Fade key={i} delay={i * 120}>
              <div style={{
                background: C.surface,
                borderRadius: 20,
                padding: "40px 32px",
                border: plan.popular ? `2px solid ${C.blue}` : `1px solid ${C.border}`,
                height: "100%",
                position: "relative",
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
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: C.blue,
                    color: "#fff",
                    padding: "6px 16px",
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: 600,
                  }}>
                    ПОПУЛЯРНЫЙ
                  </div>
                )}

                <div style={{ textAlign: "center", marginBottom: 32 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: plan.color, marginBottom: 8 }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: 14, color: C.label3, margin: "0 0 16px" }}>
                    {plan.desc}
                  </p>
                  
                  <div style={{ marginBottom: 16 }}>
                    {plan.oldPrice && (
                      <span style={{
                        fontSize: 16,
                        color: C.label3,
                        textDecoration: "line-through",
                        marginRight: 8,
                      }}>
                        {plan.oldPrice}₽
                      </span>
                    )}
                    <span style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: plan.color,
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontSize: 16,
                      color: C.label3,
                      marginLeft: 4,
                    }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                  {plan.features.map((feature, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{
                        width: 20, height: 20,
                        borderRadius: "50%",
                        background: C.green,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}>
                        <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>✓</span>
                      </div>
                      <span style={{ fontSize: 14, color: C.label, lineHeight: 1.5 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  primary={plan.popular}
                  onClick={() => {
                    if (plan.name === "Корпорация") {
                      window.location.href = "mailto:hello@цифры.рф";
                    } else {
                      // Здесь логика перехода к оплате
                      console.log(`Выбран тариф: ${plan.name}`);
                    }
                  }}
                  style={{ width: "100%" }}
                >
                  {plan.name === "Корпорация" ? "Связаться с нами" : "Начать бесплатно"}
                </Button>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={400}>
          <div style={{
            textAlign: "center",
            marginTop: 80,
            padding: "60px 40px",
            background: C.bg2,
            borderRadius: 24,
            border: `1px solid ${C.border}`,
          }}>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: C.label, margin: "0 0 16px" }}>
              Есть вопросы по тарифам?
            </h2>
            <p style={{ fontSize: 16, color: C.label3, margin: "0 0 32px", lineHeight: 1.5 }}>
              Наша команда поможет подобрать оптимальный план для вашего бизнеса
            </p>
            <Button primary onClick={() => window.location.href = "mailto:hello@цифры.рф"}>
              Получить консультацию
            </Button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
