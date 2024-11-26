import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[500px]">
          <Loader2 className="text-slate-300 animate-spin" />
        </div>
      }
    >
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <DataGrid />
        <DataCharts />
      </div>
    </Suspense>
  );
}
