import {
  AlertTriangle,
  BarChart3,
  Bell,
  Building2,
  ChevronDown,
  Grid2X2,
  LayoutDashboard,
  Menu,
  ReceiptText,
  Search,
  Settings,
} from "lucide-react";
import { IconButton } from "./primitives";

const networkModes = ["외부망 포털", "내부망 업무포털"];

const railItems = [
  { label: "대시보드", icon: LayoutDashboard, active: true },
  { label: "매출", icon: BarChart3 },
  { label: "정산", icon: ReceiptText },
  { label: "임대", icon: Building2 },
  { label: "리스크", icon: AlertTriangle },
  { label: "설정", icon: Settings },
];

const assetPath = (filename) => import.meta.env.BASE_URL + filename;

export function DashboardShell({ children, sidebar }) {
  return (
    <div className="min-h-screen bg-[#f7f8f9] text-[#101214]">
      <div className="w-full">
        <TopNavigation />
        <div className="grid lg:grid-cols-[96px_minmax(0,1fr)]">
          <IconRail />
          <main className="min-w-0 p-5">
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">
              <section className="min-w-0 space-y-5">{children}</section>
              {sidebar ? <aside className="space-y-5">{sidebar}</aside> : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export function TopNavigation() {
  return (
    <header className="flex min-h-[72px] flex-wrap items-center gap-4 border-b border-[#e5e8eb] bg-white px-5 py-2 lg:px-8">
      <div className="flex min-w-[190px] items-center gap-3">
        <img className="h-7 max-w-[178px] object-contain object-left" src={assetPath("kac-logo.png")} alt="한국공항공사" />
      </div>
      <div className="hidden h-10 items-center rounded-lg border border-[#e5e8eb] bg-white p-1 text-[13px] font-bold text-[#6f7780] md:flex">
        {networkModes.map((mode) => (
          <button
            key={mode}
            className={
              mode === "내부망 업무포털"
                ? "h-8 rounded-md bg-[#101214] px-4 text-white shadow-[0_12px_24px_-20px_rgba(0,0,0,0.8)]"
                : "h-8 rounded-md px-4 hover:bg-[#f2f4f5] hover:text-[#101214]"
            }
          >
            {mode}
          </button>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2">
        <IconButton label="검색">
          <Search className="h-5 w-5" />
        </IconButton>
        <IconButton label="알림">
          <Bell className="h-5 w-5" />
        </IconButton>
        <button className="flex h-12 items-center gap-3 rounded-full bg-white pl-2 pr-4 ring-1 ring-[#e5e8eb]">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#101214] text-[14px] font-bold text-white">정</span>
          <span className="hidden text-left md:block">
            <span className="block text-[14px] font-semibold text-[#101214]">정현업</span>
            <span className="block text-[12px] font-normal text-[#8a9097]">공항공사 현업</span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-[#8a9097] md:block" />
        </button>
      </div>
    </header>
  );
}

export function IconRail() {
  return (
    <aside className="hidden min-h-[calc(100vh-72px)] bg-[#0a0b0d] px-0 py-6 lg:flex lg:flex-col lg:items-center">
      <button className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0a0b0d]">
        <Grid2X2 className="h-5 w-5" />
      </button>
      <div className="flex flex-1 flex-col items-center gap-3">
        {railItems.map((item) => (
          <button
            key={item.label}
            title={item.label}
            className={
              item.active
                ? "grid h-12 w-12 place-items-center rounded-2xl bg-[#e8fff5] text-[#05865e]"
                : "grid h-12 w-12 place-items-center rounded-2xl text-[#8b929a] transition hover:bg-white/10 hover:text-white"
            }
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
      <button className="mt-8 grid h-11 w-11 place-items-center rounded-2xl text-[#8b929a] ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white">
        <Menu className="h-5 w-5" />
      </button>
    </aside>
  );
}
