interface Props {
  name: string;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 20, color = "#000" }: Props) {
  const icons: Record<string, string> = {
    "trending-up": "📈",
    "pie-chart": "📊", 
    "calculator": "🧮",
    "file-text": "📄",
    "users": "👥",
    "shield": "🛡️",
  };

  return (
    <span style={{
      fontSize: size,
      color,
      display: "inline-block",
      lineHeight: 1,
    }}>
      {icons[name] || "📊"}
    </span>
  );
}
