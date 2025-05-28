"use client"
import Aside from "@/sections/Aside";
import ToolBar from "@/sections/ToolBar";
import MainTable from "@/sections/MainTable";
import "./page.css";
import { openAsideContext } from "@/contexts/OpenAsideProvider";
import { useContext } from "react";
import MailingBull from "@/components/MailingBull";

export default function Home() {
  const {asideOpened} = useContext(openAsideContext);
  return (
    <main className="flex w-full max-h-screen">
      <ToolBar/>
      <div id="rest">
        <Aside/>
        <MainTable/>
      </div>
      <MailingBull/>
    </main>
  );
}
