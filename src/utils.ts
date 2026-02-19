export function fmt(n: number, suffix = ""): string {
  if (isNaN(n) || !isFinite(n)) return "—" + suffix;
  if (Math.abs(n) >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(".0", "") + " млн" + suffix;
  return n.toLocaleString("ru-RU") + suffix;
}
