import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../src/components/App.css";

function App() {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  return (
    <div className="app">
      <Header toggleSideBar={() => setIsSideBarExpanded(!isSideBarExpanded)} />
      <SideBar isExpanded={isSideBarExpanded} />
      <FilterBar isExpanded={isSideBarExpanded} />
      <main className="main-content">
       <Outlet/>
      </main>
    </div>
  );
}

export default App;