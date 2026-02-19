export const C = {
  bg:       "#ffffff",
  bg2:      "#f5f5f7",
  bg3:      "#fafafa",
  label:    "#1d1d1f",
  label2:   "#3d3d3f",
  label3:   "#6e6e73",
  label4:   "#aeaeb2",
  border:   "rgba(0,0,0,0.08)",
  blue:     "#0071e3",
  blueHover:"#0077ed",
  blueSoft: "rgba(0,113,227,0.08)",
  green:    "#28cd41",
  red:      "#ff3b30",
  surface:  "#ffffff",
};

export function fmt(n: number, suffix = ""): string {
  if (Math.abs(n) >= 1_000_000) {
    return (n / 1_000_000).toFixed(1).replace(".0", "") + " млн" + suffix;
  }
  if (Math.abs(n) >= 1_000) {
    return n.toLocaleString("ru-RU") + suffix;
  }
  return n.toLocaleString("ru-RU") + suffix;
}
