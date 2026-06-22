import {
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  RefreshCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { rentAutoFilters, rentAutoRows, rentAutoSummary } from "../../data/rentAuto";
import { StatusBadge } from "../dashboard/primitives";

function toneForStatus(status) {
  if (status === "검증 필요") return "danger";
  if (status === "승인 완료") return "dark";
  return "done";
}

function actionTone(status) {
  if (status === "검토") return "danger";
  if (status === "승인취소") return "low";
  return "done";
}

function PageHeading() {
  return (
    <section className="rounded-[22px] border border-[#e5e8eb] bg-white px-7 py-6">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-[13px] font-bold text-[#8a9097]">임대료 관리 › 임대료 정산 자동화</p>
          <h1 className="mt-3 text-[34px] font-extrabold tracking-[-0.055em] text-[#101214]">임대료 정산 자동화</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex h-10 items-center gap-2 rounded-full border border-[#e5e8eb] bg-white px-4 text-[13px] font-bold text-[#646b73]">
            <RefreshCcw className="h-4 w-4" />
            기준 재계산
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-full bg-[#101214] px-4 text-[13px] font-bold text-white">
            <Check className="h-4 w-4" />
            선택 승인
          </button>
        </div>
      </div>
    </section>
  );
}

function SummaryDeck() {
  return (
    <section className="grid gap-3 lg:grid-cols-4">
      {rentAutoSummary.map((item, index) => {
        const danger = item.tone === "danger";
        const positive = item.tone === "positive";
        return (
          <article
            key={item.label}
            className={
              index === 0
                ? "rounded-[20px] border-2 border-[#101214] bg-white p-6"
                : danger
                  ? "rounded-[20px] border border-[#ffd9de] bg-white p-6"
                  : "rounded-[20px] border border-[#e5e8eb] bg-white p-6"
            }
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold text-[#737a82]">{item.label}</div>
                <div className="mt-1 text-[12px] font-semibold text-[#a0a7af]">{item.detail}</div>
              </div>
              <span
                className={
                  danger
                    ? "grid h-10 w-10 place-items-center rounded-2xl bg-[#fff0f2] text-[#e9253f]"
                    : positive
                      ? "grid h-10 w-10 place-items-center rounded-2xl bg-[#e9fff6] text-[#0b9f72]"
                      : "grid h-10 w-10 place-items-center rounded-2xl bg-[#f4f6f8] text-[#646b73]"
                }
              >
                {danger ? <Sparkles className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className={danger ? "text-[34px] font-extrabold leading-none tracking-[-0.055em] text-[#c82138]" : "text-[34px] font-extrabold leading-none tracking-[-0.055em] text-[#101214]"}>
                {item.value}
              </span>
              <span className="text-[14px] font-extrabold text-[#737a82]">{item.unit}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

function SelectControl({ label, value, wide = false }) {
  return (
    <label className={wide ? "min-w-[220px] flex-1" : "min-w-[154px]"}>
      <span className="mb-1.5 block text-[12px] font-extrabold text-[#8a9097]">{label}</span>
      <button className="flex h-11 w-full items-center justify-between rounded-xl border border-[#dfe4e8] bg-white px-3 text-left text-[13px] font-bold text-[#101214]">
        {value}
        <ChevronDown className="h-4 w-4 text-[#8a9097]" />
      </button>
    </label>
  );
}

function MonthControl() {
  return (
    <label className="min-w-[154px]">
      <span className="mb-1.5 block text-[12px] font-extrabold text-[#8a9097]">정산월</span>
      <button className="flex h-11 w-full items-center justify-between rounded-xl border border-[#dfe4e8] bg-white px-3 text-left text-[13px] font-bold text-[#101214]">
        2026년 6월
        <CalendarDays className="h-4 w-4 text-[#8a9097]" />
      </button>
    </label>
  );
}

function SegmentedControl({ label, items, activeIndex = 0 }) {
  return (
    <div>
      <span className="mb-1.5 block text-[12px] font-extrabold text-[#8a9097]">{label}</span>
      <div className="inline-flex h-11 overflow-hidden rounded-xl border border-[#dfe4e8] bg-white">
        {items.map((item, index) => (
          <button
            key={item}
            className={
              index === activeIndex
                ? "min-w-[64px] bg-[#101214] px-4 text-[13px] font-bold text-white"
                : "min-w-[64px] border-l border-[#edf0f2] px-4 text-[13px] font-bold text-[#646b73] first:border-l-0"
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterPanel() {
  return (
    <section className="rounded-[22px] border border-[#e5e8eb] bg-white p-5">
      <div className="flex flex-wrap items-end gap-3">
        <SelectControl label="공항(권역)" value={rentAutoFilters.airports[0]} />
        <MonthControl />
        <SegmentedControl label="정산 유형" items={rentAutoFilters.settlementTypes} />
        <SegmentedControl label="임대료 구분" items={rentAutoFilters.rentTypes} />
        <SelectControl label="상태" value={rentAutoFilters.statuses[0]} />
        <div className="ml-auto flex gap-2">
          <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#e5e8eb] bg-white px-4 text-[13px] font-bold text-[#646b73]">
            <RefreshCcw className="h-4 w-4" />
            초기화
          </button>
          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#101214] px-4 text-[13px] font-bold text-white">
            <Search className="h-4 w-4" />
            조회
          </button>
        </div>
      </div>
    </section>
  );
}

function Toolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-4 text-[13px] font-bold text-[#8a9097]">
        <span>
          정산 대상 <strong className="text-[#101214]">100건</strong>
        </span>
        <span>
          승인 가능 <strong className="text-[#101214]">50건</strong>
        </span>
        <span>
          검증 필요 <strong className="text-[#c82138]">2건</strong>
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="inline-flex h-9 items-center gap-2 rounded-xl border border-[#e5e8eb] bg-white px-3 text-[12px] font-bold text-[#646b73]">
          <Upload className="h-3.5 w-3.5" />
          시설관리비 업로드
        </button>
        <button className="inline-flex h-9 items-center gap-2 rounded-xl border border-[#e5e8eb] bg-white px-3 text-[12px] font-bold text-[#646b73]">
          <Download className="h-3.5 w-3.5" />
          엑셀 다운로드
        </button>
        <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#101214] px-3 text-[12px] font-bold text-white">
          <Check className="h-3.5 w-3.5" />
          선택 승인
        </button>
      </div>
    </div>
  );
}

function AccuracyMeter({ value }) {
  const danger = value < 80;
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-20 overflow-hidden rounded-full bg-[#e5e8eb]">
        <div
          className={danger ? "h-full rounded-full bg-[#a8463c]" : "h-full rounded-full bg-[#101214]"}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-9 text-right text-[12px] font-bold text-[#646b73]">{value}%</span>
    </div>
  );
}

function NoticeBadge({ value }) {
  return (
    <span className={value === "수신확인" ? "inline-flex h-7 items-center rounded-full bg-[#101214] px-3 text-[11px] font-bold text-white" : "inline-flex h-7 items-center rounded-full border border-[#e5e8eb] bg-white px-3 text-[11px] font-bold text-[#646b73]"}>
      {value === "수신확인" ? <Send className="mr-1.5 h-3 w-3" /> : null}
      {value}
    </span>
  );
}

function RentAutoTable() {
  return (
    <section className="rounded-[22px] border border-[#e5e8eb] bg-white p-5 shadow-[0_22px_60px_-50px_rgba(15,23,42,0.55)]">
      <Toolbar />
      <div className="mt-4 overflow-hidden rounded-[16px] border border-[#e5e8eb]">
        <div className="overflow-x-auto">
          <table className="min-w-[1120px] w-full border-collapse text-[13px]">
            <thead className="bg-[#f7f8f9] text-[12px] font-extrabold text-[#737a82]">
              <tr>
                <th className="px-4 py-4 text-left">상태</th>
                <th className="px-4 py-4 text-left">업체명</th>
                <th className="px-4 py-4 text-left">공항</th>
                <th className="px-4 py-4 text-left">임대료 구분</th>
                <th className="px-4 py-4 text-left">산정 기준</th>
                <th className="px-4 py-4 text-right">임대료 산정액</th>
                <th className="px-4 py-4 text-left">AI 정합성</th>
                <th className="px-4 py-4 text-center">고지서 발송</th>
                <th className="px-4 py-4 text-center">승인</th>
              </tr>
            </thead>
            <tbody>
              {rentAutoRows.map((row) => (
                <tr key={`${row.vendor}-${row.basis}`} className={row.issue ? "border-t border-[#edf0f2] bg-[#fffafa]" : "border-t border-[#edf0f2] bg-white"}>
                  <td className="px-4 py-4 align-top">
                    <StatusBadge tone={toneForStatus(row.status)}>{row.status}</StatusBadge>
                  </td>
                  <td className="min-w-[210px] px-4 py-4 align-top">
                    <div className="font-extrabold text-[#101214] underline decoration-[#cbd2d8] underline-offset-4">{row.vendor}</div>
                    {row.issue ? <div className="mt-1 max-w-[320px] text-[11px] font-semibold leading-4 text-[#a8463c]">{row.issue}</div> : null}
                  </td>
                  <td className="px-4 py-4 align-top font-semibold text-[#101214]">{row.airport}</td>
                  <td className="px-4 py-4 align-top font-semibold text-[#646b73]">{row.rentType}</td>
                  <td className="px-4 py-4 align-top font-semibold text-[#646b73]">{row.basis}</td>
                  <td className="px-4 py-4 text-right align-top font-extrabold text-[#101214]">{row.amount}</td>
                  <td className="px-4 py-4 align-top">
                    <AccuracyMeter value={row.accuracy} />
                  </td>
                  <td className="px-4 py-4 text-center align-top">
                    <NoticeBadge value={row.notice} />
                    {row.approvedAt ? <div className="mt-1 text-[11px] font-medium text-[#a0a7af]">{row.approvedAt}</div> : null}
                  </td>
                  <td className="px-4 py-4 text-center align-top">
                    <button className={`h-8 rounded-[10px] px-3 text-[12px] font-bold ${actionTone(row.approval) === "danger" ? "bg-[#fff0f2] text-[#c82138] ring-1 ring-[#ffd9de]" : actionTone(row.approval) === "low" ? "bg-[#f7f8f9] text-[#8a9097] ring-1 ring-[#e5e8eb]" : "bg-white text-[#101214] ring-1 ring-[#dfe4e8]"}`}>
                      {row.approval}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-[12px] font-semibold text-[#8a9097]">
        <span>총 100건 중 1-10 표시</span>
        <div className="flex items-center gap-1">
          {["‹", "1", "2", "…", "9", "10", "›"].map((item) => (
            <button key={item} className={item === "1" ? "grid h-8 min-w-8 place-items-center rounded-lg bg-[#101214] px-2 text-white" : "grid h-8 min-w-8 place-items-center rounded-lg bg-white px-2 text-[#646b73] ring-1 ring-[#e5e8eb]"}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RentAutoScreen() {
  return (
    <>
      <PageHeading />
      <SummaryDeck />
      <FilterPanel />
      <RentAutoTable />
    </>
  );
}
