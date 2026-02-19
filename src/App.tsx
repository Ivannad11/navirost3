import { useState, useEffect } from "react";
import { C } from "./tokens";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PageHome } from "./pages/PageHome";
import { PageSystem } from "./pages/PageSystem";
import { PageTools } from "./pages/PageTools";
import { PagePricing } from "./pages/PagePricing";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":    return <PageHome setPage={setPage} />;
      case "system":  return <PageSystem />;
      case "tools":   return <PageTools />;
      case "pricing": return <PagePricing />;
      default:        return <PageHome setPage={setPage} />;
    }
  };

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
      background: C.bg,
      color: C.label,
      minHeight: "100vh",
    }}>
      <Navbar activePage={page} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}
