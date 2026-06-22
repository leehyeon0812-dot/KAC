export const cardHeights = {
  kpi: "174px",
  revenueSummary: "180px",
  medium: "356px",
  comparison: "366px",
};

const assetPath = (filename) => import.meta.env.BASE_URL + filename;

export const metricIconAssets = [
  assetPath("metric-sales.png"),
  assetPath("metric-terminal.png"),
  assetPath("metric-risk.png"),
  assetPath("metric-rent.png"),
];

export const chartPalette = {
  ink: "#0a0a0b",
  mint: "#10c991",
  mintSoft: "#ccf8e9",
  cloud: "#eef1f4",
  line: "#dfe5ea",
};

export const salesComparison = [
  { label: "당월", value: "12.4억", percent: "기준", height: 100, tone: "current" },
  { label: "전월", value: "11.8억", percent: "+5.1%", height: 78, tone: "base" },
  { label: "전년동월", value: "10.9억", percent: "+13.8%", height: 60, tone: "base" },
  { label: "목표", value: "12.0억", percent: "+3.3%", height: 88, tone: "target" },
];

export const priorityTaskExtra = {
  severity: "주의",
  title: "제주공항 체납 2기 업체 현장 확인",
  meta: "D-1 · 관리자 승인 필요",
};

export const statusBadgeStyles = {
  danger: "bg-[#ff0037] text-white",
  warn: "bg-[#ffae20] text-[#2a1a00]",
  done: "bg-white text-[#6f737a] ring-1 ring-[#dfe3e7]",
  dark: "bg-[#101214] text-white",
  low: "bg-[#f6f7f8] text-[#8a9097] ring-1 ring-[#e5e8eb]",
};

export function statusTone(status) {
  if (["검토", "검증", "대기", "탐색", "확인"].includes(status)) return "warn";
  if (["정정", "긴급", "장애", "D-30"].includes(status)) return "danger";
  return "done";
}

export function badgeTone(tone) {
  if (tone === "danger" || tone === "darkDanger") return "danger";
  if (tone === "warn") return "warn";
  return "done";
}

export function getHeatScale(value, maxValue) {
  const ratio = value / maxValue;

  if (ratio > 0.86) {
    return { status: "최상", color: "#10c991", textColor: "#073b2d" };
  }

  if (ratio > 0.68) {
    return { status: "상", color: "#40dba9", textColor: "#073b2d" };
  }

  if (ratio > 0.48) {
    return { status: "중", color: "#86edc9", textColor: "#28715b" };
  }

  if (ratio > 0.25) {
    return { status: "하", color: "#c7f8e7", textColor: "#28715b" };
  }

  return { status: "최하", color: "#eafdf6", textColor: "#28715b" };
}
