import Aside from "@/components/Aside";
import ToolBar from "@/components/ToolBar";
import MainTable from "@/components/MainTable";
import "./page.css";

export default function Home() {
  return (
      <main className="flex w-full max-h-screen">
        <ToolBar/>
        <div className="rest">
          <Aside/>
          <MainTable/>
        </div>
      </main>
  );
}
