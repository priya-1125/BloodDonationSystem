// App.tsx
import React, { useState } from "react";
import "./App.css";
import Donors from "./components/Donors";
import Home from "./components/Home";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "donors">("home");

  const navigateToDonors = () => {
    setCurrentView("donors");
  };

  const navigateToHome = () => {
    setCurrentView("home");
  };

  return (
    <>
      {/* <div className='header'>
        <Header />
      </div> */}
      <div className="app-container">
        {currentView === "home" && <Home navigateToDonors={navigateToDonors} />}
        {currentView === "donors" && <Donors />}
        <button onClick={navigateToHome}>Home</button>
      </div>
    </>
  );
}

export default App;
