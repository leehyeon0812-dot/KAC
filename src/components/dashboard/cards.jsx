import { ChevronRight, Sparkles } from "lucide-react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  areaEfficiency,
  contractWarnings,
  delinquentStores,
  operationStatus,
  passengerEfficiency,
  priorityTasks,
  reconciliationIssues,
  revenueSummary,
  settlementQueue,
  topMetrics,
} from "../../data/skyposDashboard";
import {
  badgeTone,
  cardHeights,
  chartPalette,
  metricIconAssets,
  priorityTaskExtra,
  salesComparison,
  statusTone,
} from "../../design/dashboardTokens";
import {
  ChartTooltip,
  CompactRows,
  LocationLine,
  Panel,
  PassengerDot,
  PaymentDonut,
  PaymentRow,
  RowHeat,
  StatusBadge,
  SystemStatus,
} from "./primitives";

const priorityTaskItems = [...priorityTasks, priorityTaskExtra];

export function DashboardContent() {
  return (
    <>
      <MetricDeck />
      <RevenueSummaryCard />
      <div className="grid items-stretch gap-5 2xl:grid-cols-[1fr_0.92fr]">
        <SalesCard />
        <PaymentCard />
      </div>
      <div className="grid items-stretch gap-5 2xl:grid-cols-[1fr_0.92fr]">
        <PassengerCard />
        <AreaEfficiencyCard />
      </div>
      <OperationsCard />
      <DelinquencyCard />
    </>
  );
}

export function DashboardSidebar() {
  return (
    <>
      <PriorityCard />
      <SettlementCard />
      <ReconciliationCard />
      <ItemApprovalCard />
      <ContractCard />
      <VocCard />
    </>
  );
}

export function MetricDeck() {
  return (
    <section>
      <div className="grid gap-3 lg:grid-cols-4">
        {topMetrics.map((metric, index) => {
          const iconAsset = metricIconAssets[index];
          const danger = metric.tone === "danger";
          return (
            <article
              key={metric.label}
              className={
                danger
                  ? "rounded-[20px] bg-white p-6 ring-1 ring-[#ffd9de]"
                  : "rounded-[20px] bg-white p-6 ring-1 ring-[#e5e8eb]"
              }
              style={{ minHeight: cardHeights.kpi }}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="text-[14px] font-bold text-[#6f7780]">{metric.label}</div>
                <span
                  className={
                    danger
                      ? "grid h-[28px] w-[28px] place-items-center text-[#f02b44]"
                      : "grid h-[28px] w-[28px] place-items-center text-[#0aa577]"
                  }
                >
                  <img className="h-[28px] w-[28px] object-contain" src={iconAsset} alt="" />
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className={
                    danger
                      ? "text-[36px] font-extrabold leading-none tracking-[-0.06em] text-[#c82138]"
                      : "text-[36px] font-extrabold leading-none tracking-[-0.06em] text-[#101214]"
                  }
                >
                  {metric.value}
                </span>
                <span className="text-[15px] font-extrabold text-[#6f7780]">{metric.unit}</span>
              </div>
              <div className={danger ? "mt-2 text-[14px] font-extrabold text-[#e9253f]" : "mt-2 text-[14px] font-extrabold text-[#0b9f72]"}>
                {metric.detail}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function RevenueSummaryCard() {
  return (
    <Panel title="공사 수익 현황" compactHeader style={{ height: cardHeights.revenueSummary }}>
      <div className="grid gap-3 md:grid-cols-5">
        {revenueSummary.map((item, index) => (
          <div key={item.label} className="rounded-[14px] bg-[#f7f8f9] px-4 py-2">
            <div className="text-[12px] font-bold text-[#8a9097]">{item.label}</div>
            {index === 0 ? (
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className="text-[22px] font-extrabold tracking-[-0.04em] text-[#101214]">{item.value}</span>
                <span className="text-right text-[12px] font-bold text-[#0b9f72]">{item.detail}</span>
              </div>
            ) : (
              <>
                <div className={item.danger ? "mt-1 text-[22px] font-extrabold tracking-[-0.04em] text-[#c82138]" : "mt-1 text-[22px] font-extrabold tracking-[-0.04em] text-[#101214]"}>
                  {item.value}
                </div>
                {item.detail ? <div className="mt-1 text-[12px] font-medium text-[#a0a7af]">{item.detail}</div> : null}
              </>
            )}
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function SalesCard() {
  return (
    <Panel title="매출 현황" action="전체 통합" style={{ height: cardHeights.medium }}>
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <div className="text-[14px] font-bold text-[#8a9097]">당월 매출(통합)</div>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-[34px] font-extrabold leading-none tracking-[-0.05em] text-[#101214]">12.4</span>
            <span className="pb-0.5 text-[18px] font-extrabold text-[#737a82]">억</span>
          </div>
        </div>
      </div>
      <div className="pt-1">
        <div className="grid h-[108px] grid-cols-4 items-end gap-5 border-b border-[#e3e7eb] px-2">
          {salesComparison.map((item) => (
            <div key={item.label} className="flex h-full flex-col items-center justify-end">
              <div className="mb-2 text-[15px] font-bold text-[#5f6670]">{item.value}</div>
              <div
                className={
                  item.tone === "current"
                    ? "w-full max-w-[72px] rounded-t-lg bg-[#10c991]"
                    : item.tone === "target"
                      ? "w-full max-w-[72px] rounded-t-lg bg-[#101214]"
                      : "w-full max-w-[72px] rounded-t-lg bg-[#c8cdd3]"
                }
                style={{ height: `${item.height}%` }}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-5 px-2 pt-2 text-center">
          {salesComparison.map((item) => (
            <div key={`${item.label}-label`}>
              <div className="text-[14px] font-extrabold text-[#5f6670]">{item.label}</div>
              <div className="mt-0.5 text-[12px] font-medium text-[#737a82]">{item.percent}</div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

export function PaymentCard() {
  return (
    <Panel title="임대료 납부 현황" meta="관리 100개사 · 고지 8.42억" action="상세" style={{ height: cardHeights.medium }}>
      <div className="grid items-center gap-5 pt-3 md:grid-cols-[190px_minmax(0,1fr)] 2xl:grid-cols-[200px_minmax(0,1fr)]">
        <div className="mx-auto">
          <PaymentDonut />
        </div>
        <div className="space-y-1">
          <PaymentRow label="납부" value="92건 · 7.71억" color="#101214" />
          <PaymentRow label="미납" value="3건 · 0.38억" color="#d7dde3" />
          <PaymentRow label="체납" value="5건 · 0.33억" color="#10c991" />
          <div className="pt-3">
            <div className="flex items-center justify-between text-[13px] font-semibold">
              <span className="text-[#737a82]">마감 전 조치</span>
              <span className="text-[#101214]">D-3</span>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export function PassengerCard() {
  return (
    <Panel title="여객 수 대비 매출 효율" meta="시간대별 탑승객 · 매출" action="시간대" style={{ height: cardHeights.comparison }}>
      <div className="relative h-[220px] px-0 py-1">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={passengerEfficiency} margin={{ top: 52, right: 14, left: -22, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={chartPalette.line} strokeDasharray="4 7" />
            <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fontSize: 13, fill: "#69717a", fontWeight: 700 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#9aa1a9" }} />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey="sales" fill={chartPalette.mintSoft} radius={[14, 14, 5, 5]} barSize={42} />
            <Line
              dataKey="passenger"
              stroke={chartPalette.mint}
              strokeWidth={3}
              dot={<PassengerDot />}
              activeDot={{ r: 6, fill: chartPalette.ink, stroke: "#ffffff", strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function AreaEfficiencyCard() {
  const maxValue = Math.max(...areaEfficiency.flatMap((row) => [row.morning, row.afternoon, row.evening]));

  return (
    <Panel title="구역별 평당 효율" meta="매출/㎡ · 시간대 Heatmap" action="구역" style={{ height: cardHeights.comparison }}>
      <div className="grid grid-cols-[104px_repeat(3,1fr)] gap-2 text-[13px]">
        <div />
        {["오전", "오후", "저녁"].map((label) => (
          <div key={label} className="text-center text-[12px] font-extrabold text-[#9aa1a9]">
            {label}
          </div>
        ))}
        {areaEfficiency.map((row) => (
          <RowHeat key={row.area} row={row} maxValue={maxValue} />
        ))}
      </div>
    </Panel>
  );
}

export function DelinquencyCard() {
  return (
    <Panel title="미납 · 체납 업체" meta="업체 선택 시 위치와 조치 정보 확인" action="전체 보기">
      <div className="grid gap-4 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="overflow-hidden rounded-[20px] bg-white">
          <table className="w-full table-fixed text-[14px]">
            <colgroup>
              <col className="w-[84px]" />
              <col />
              <col className="w-[116px]" />
              <col className="w-[64px]" />
            </colgroup>
            <thead className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#8a9097]">
              <tr>
                <th className="px-3 py-4 text-left">상태</th>
                <th className="px-3 py-4 text-left">업체명</th>
                <th className="px-3 py-4 text-right">미납액</th>
                <th className="px-3 py-4 text-right">경과</th>
              </tr>
            </thead>
            <tbody>
              {delinquentStores.map((store, index) => (
                <tr
                  key={store.store}
                  className={
                    index === 0
                      ? "border-t border-[#bcebdc] bg-[#f0fbf7]"
                      : "border-t border-[#edf0f2] bg-white"
                  }
                >
                  <td className="px-3 py-4">
                    <StatusBadge tone={store.status.includes("체납") ? "danger" : store.status === "확인" ? "done" : "warn"}>{store.status}</StatusBadge>
                  </td>
                  <td className="min-w-0 px-3 py-4">
                    <div className="truncate font-extrabold text-[#101214]">{store.store}</div>
                    <div className="mt-1 truncate text-[12px] font-medium text-[#8a9097]">{store.location}</div>
                  </td>
                  <td className="px-3 py-4 text-right text-[14px] font-extrabold text-[#101214]">{store.amount}</td>
                  <td className="px-3 py-4 text-right text-[14px] font-extrabold text-[#737a82]">{store.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-[20px] bg-[#101214] p-5 text-white">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <div className="text-[20px] font-extrabold tracking-[-0.03em]">게이트 누들바</div>
              <div className="mt-1 text-[13px] font-semibold text-white/55">제주공항 · 2F-061</div>
            </div>
            <StatusBadge tone="danger">체납</StatusBadge>
          </div>
          <div className="space-y-3 text-[14px] font-semibold">
            <LocationLine label="공항" value="제주공항" />
            <LocationLine label="구역" value="여객터미널 2F" />
            <LocationLine label="업종" value="식음(F&B)" />
            <LocationLine label="조치" value="독촉 발송 대기" />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-2 text-center text-[11px] font-extrabold">
            {["059", "060", "061", "062", "063"].map((room) => (
              <div key={room} className={room === "061" ? "rounded-2xl bg-[#10c991] py-4 text-[#101214]" : "rounded-2xl bg-white/10 py-4 text-white/55"}>
                {room}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

export function PriorityCard() {
  return (
    <Panel
      title="오늘 우선 처리"
      dense
      className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7fc_0%,#f1f7ff_45%,#ffffff_100%)]"
      titleAccessory={
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[linear-gradient(120deg,#6d2cff_0%,#c13cff_25%,#ff4f91_48%,#ff8f56_67%,#35c7a6_100%)] px-3 text-[11px] font-extrabold text-white shadow-[0_16px_28px_-16px_rgba(158,44,193,0.95)] ring-1 ring-white/40">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          AI 산정
        </span>
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_10%_0%,rgba(255,151,210,0.34),transparent_33%),radial-gradient(circle_at_92%_8%,rgba(124,164,255,0.36),transparent_36%)]" />
      <div className="relative z-10">
        <div className="-mt-1 divide-y divide-[#e4e8ec]">
          {priorityTaskItems.map((task) => (
            <article key={task.title} className="py-3 first:pt-0 last:pb-0">
              <div className="flex min-w-0 items-center gap-2">
                <StatusBadge tone={task.severity === "긴급" ? "danger" : "warn"}>{task.severity}</StatusBadge>
                <div className="min-w-0 flex-1 truncate text-[14px] font-extrabold leading-5 text-[#101214]">
                  {task.title}
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-[#9aa1a9]" />
              </div>
              <div className="mt-1.5 truncate pl-[52px] text-[12px] font-medium text-[#8a9097]">
                {task.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}

export function OperationsCard() {
  return (
    <Panel
      title="통합 운영"
      meta="실시간 가동 매장"
      headerRight={
        <div className="hidden items-center gap-2 md:flex">
          <SystemStatus label="서버" tone="done" />
          <SystemStatus label="ERP" tone="done" />
          <SystemStatus label="VAN" tone="warn" />
        </div>
      }
    >
      <div className="grid gap-2 md:grid-cols-3">
        {operationStatus.map((row) => (
          <div key={row.label} className="flex items-center justify-between rounded-[14px] bg-[#f7f8f9] px-4 py-2.5">
            <div>
              <div className="text-[13px] font-bold text-[#8a9097]">{row.label}</div>
              <div className="mt-0.5 text-[21px] font-extrabold tracking-[-0.05em] text-[#101214]">{row.value}</div>
            </div>
            <StatusBadge tone={badgeTone(row.tone)}>{row.status}</StatusBadge>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function SettlementCard() {
  return (
    <Panel title="정산 · 승인 처리" meta="임대료 정산" dense>
      <div className="space-y-1">
        {settlementQueue.map((row) => (
          <div key={row.label} className="flex items-center justify-between border-t border-[#edf0f2] px-1 py-2.5 first:border-t-0">
            <span className="text-[14px] font-extrabold text-[#646b73]">{row.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-[19px] font-extrabold tracking-[-0.04em] text-[#101214]">{row.value}</span>
              <StatusBadge tone={statusTone(row.status)}>{row.status}</StatusBadge>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ReconciliationCard() {
  return (
    <Panel title="대사 불일치" meta="정합성 · 불일치 3 / 60 매장" dense>
      <div className="space-y-2">
        {reconciliationIssues.map((issue) => (
          <div key={issue.store} className="border-t border-[#edf0f2] px-1 py-3 first:border-t-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[14px] font-extrabold text-[#101214]">{issue.store}</div>
                <div className="mt-1 text-[12px] font-semibold text-[#8a9097]">{issue.reason}</div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-[14px] font-extrabold text-[#e9253f]">{issue.amount}</span>
                <button className="h-7 rounded-[6px] border border-[#e5e8eb] bg-white px-3 text-[12px] font-bold text-[#737a82]">
                  정정
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ContractCard() {
  return (
    <Panel title="계약 만료 임박" meta="재계약 선제 관리" dense>
      <div className="space-y-1">
        {contractWarnings.map((item) => (
          <div key={item.label} className="flex items-center justify-between border-t border-[#edf0f2] px-1 py-2.5 first:border-t-0">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <StatusBadge tone={badgeTone(item.tone)}>{item.dday}</StatusBadge>
              <div className="min-w-0 truncate text-[14px] font-extrabold text-[#101214]">{item.label}</div>
            </div>
            <ChevronRight className="ml-2 h-4 w-4 shrink-0 text-[#9aa1a9]" />
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ItemApprovalCard() {
  return (
    <Panel title="품목 · 가격 승인 대기" meta="자동 분류 추천 · 검토·확정" dense>
      <CompactRows
        rows={[
          { badge: "검토", title: "품목 매핑 승인", value: "12" },
          { badge: "검증", title: "결제 검증(다중 인증)", value: "3" },
          { badge: "탐색", title: "시중가 비교 등록", value: "8", tone: "low" },
        ]}
      />
    </Panel>
  );
}

export function VocCard() {
  return (
    <Panel title="VOC · 시설 장애" meta="접수 → 조치 → 완료" dense>
      <CompactRows
        rows={[
          { badge: "조치 중", title: "3층 푸드코트 누수", tone: "warn" },
          { badge: "접수", title: "OO매장 응대 불만", tone: "warn" },
          { badge: "완료", title: "전광판 오류 복구", tone: "done" },
        ]}
      />
    </Panel>
  );
}
