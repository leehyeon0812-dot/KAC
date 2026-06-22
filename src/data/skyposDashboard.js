export const topMetrics = [
  {
    label: "합산 매출",
    value: "12.4",
    unit: "억",
    detail: "전월 대비 +5.1%",
    tone: "positive",
  },
  {
    label: "정상 단말",
    value: "471",
    unit: "/ 486",
    detail: "15대 점검 필요",
    tone: "neutral",
  },
  {
    label: "이상 거래",
    value: "12",
    unit: "건",
    detail: "고위험 2건",
    tone: "danger",
  },
  {
    label: "임대료 미납",
    value: "38",
    unit: "억",
    detail: "납부 마감 D-3",
    tone: "danger",
  },
];

export const revenueSummary = [
  { label: "총 수익", value: "318억", detail: "+7.2% 전년동기", lead: true },
  { label: "임대료 수익", value: "284억" },
  { label: "기타 수익", value: "34억" },
  { label: "수납률", value: "92.4%" },
  { label: "미수금", value: "38억", danger: true },
];

export const salesBars = [
  { label: "당월", value: 2847, kind: "current" },
  { label: "전월", value: 2630, kind: "base" },
  { label: "전년동월", value: 2520, kind: "base" },
  { label: "목표", value: 2760, kind: "target" },
];

export const passengerEfficiency = [
  { time: "08시", passenger: 72, sales: 46 },
  { time: "12시", passenger: 88, sales: 62 },
  { time: "16시", passenger: 96, sales: 74 },
  { time: "18시", passenger: 91, sales: 55, issue: true },
  { time: "20시", passenger: 93, sales: 68 },
];

export const areaEfficiency = [
  { area: "T2 면세", morning: 58, afternoon: 96, evening: 132 },
  { area: "국제선 F&B", morning: 34, afternoon: 88, evening: 92 },
  { area: "국내선 F&B", morning: 56, afternoon: 62, evening: 38 },
  { area: "격리대기", morning: 12, afternoon: 28, evening: 54 },
];

export const operationStatus = [
  { label: "운영 중", value: "312개", status: "정상", tone: "solid" },
  { label: "미오픈", value: "4개", status: "확인", tone: "warn" },
  { label: "장애", value: "1개", status: "장애", tone: "danger" },
];

export const delinquentStores = [
  {
    status: "체납 2기",
    store: "게이트 누들바",
    amount: "12,400,000",
    days: "45일",
    location: "제주공항 · 여객터미널 2F · 2F-061",
  },
  {
    status: "체납 2기",
    store: "스카이 베버리지",
    amount: "6,800,000",
    days: "38일",
    location: "김해공항 · 국제선 3F · 3F-073",
  },
  {
    status: "미납",
    store: "트래블 컨비니",
    amount: "250,000",
    days: "9일",
    location: "대구공항 · 여객터미널 1F · 1F-047",
  },
  {
    status: "미납",
    store: "에어사이드 베이커리",
    amount: "623,000",
    days: "6일",
    location: "청주공항 · 여객터미널 2F · 2F-112",
  },
  {
    status: "확인",
    store: "스카이 라운지",
    amount: "480,000",
    days: "3일",
    location: "김포공항 · 국내선 2F · 2F-021",
  },
];

export const priorityTasks = [
  {
    severity: "긴급",
    title: "청주공항 POS 3대 오류 · VAN 단절",
    meta: "경과 18분 · SLA 30분 · 현장 점검",
  },
  {
    severity: "긴급",
    title: "김포 면세점 고위험 이상거래 2건",
    meta: "판단 기한 D-0 · 미전송/중복 전송",
  },
  {
    severity: "주의",
    title: "김해 임대료 정산 마감 · 미납 5곳",
    meta: "D-3 · 독촉 발송 대상",
  },
];

export const settlementQueue = [
  { label: "자동 산정 완료", value: 41, status: "자동" },
  { label: "검증 필요", value: 2, status: "검증" },
  { label: "승인 대기", value: 7, status: "대기" },
  { label: "고지서 발송", value: 39, status: "발송" },
];

export const reconciliationIssues = [
  { store: "T1 면세 코스메틱", reason: "카드 승인 누락", amount: "+1,240,000" },
  { store: "T1 글로벌 F&B", reason: "PG 입금 차이", amount: "-3,180,000" },
  { store: "T2 스카이몰", reason: "POS↔공항 불일치", amount: "+920,000" },
];

export const contractWarnings = [
  { dday: "D-30", label: "매장 A · 재계약 협의", tone: "danger" },
  { dday: "D-60", label: "매장 B · 조건 검토", tone: "warn" },
  { dday: "D-90", label: "매장 C · 퇴점 예정", tone: "neutral" },
];
