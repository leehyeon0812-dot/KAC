import { useEffect, useState } from "react";
import { DashboardContent, DashboardSidebar } from "./components/dashboard/cards";
import { DashboardShell } from "./components/dashboard/layout";
import { RentAutoScreen } from "./components/rentAuto/RentAutoScreen";

function getRouteFromHash() {
  return window.location.hash.replace(/^#\/?/, "") || "dashboard";
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "rent-auto") {
    return (
      <DashboardShell activeRail="rent">
        <RentAutoScreen />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell activeRail="dashboard" sidebar={<DashboardSidebar />}>
      <DashboardContent />
    </DashboardShell>
  );
}
