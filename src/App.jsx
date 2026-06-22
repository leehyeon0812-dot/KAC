import { DashboardContent, DashboardSidebar } from "./components/dashboard/cards";
import { DashboardShell } from "./components/dashboard/layout";

export default function App() {
  return (
    <DashboardShell sidebar={<DashboardSidebar />}>
      <DashboardContent />
    </DashboardShell>
  );
}
