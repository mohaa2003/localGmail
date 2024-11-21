import Aside from "@/sections/Aside";
import ToolBar from "@/sections/ToolBar";
import MainTable from "@/sections/MainTable";
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
