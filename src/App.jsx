import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import "./App.css";
function App() {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  return (
    <div className="app">
      <Header
        toggleSideBar={() => setIsSideBarExpanded(!isSideBarExpanded)}
      ></Header>
        <FilterBar/>
      <div className="main">
      
        <SideBar isExpanded={isSideBarExpanded}></SideBar>
      </div>
      <div className={`content ${isSideBarExpanded? "shifted":" "}`}>
        
      </div>
    </div>
  );
}

export default App;
