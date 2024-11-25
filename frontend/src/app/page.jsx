"use client"
import Aside from "@/sections/Aside";
import ToolBar from "@/sections/ToolBar";
import MainTable from "@/sections/MainTable";
import "./page.css";
import { openAsideContext } from "@/contexts/OpenAsideProvider";
import { useContext } from "react";

export default function Home() {
  const {asideOpened} = useContext(openAsideContext);
  return (
    <main className="flex w-full max-h-screen">
      <ToolBar/>
      <div className="rest" style={asideOpened? {width:"calc(100vw - 70px)"}:{width: "100%"}}>
        <Aside/>
        <MainTable/>
      </div>
    </main>
  );
}
