import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-full justify-center items-center ">
      <div className="w-2/10 text-center grid grid-cols-3 gap-3">
        <div className="bg-primary rounded-box ">1</div>
        <div className="bg-accent rounded-box">2</div>
        <div className="bg-secondary rounded-box">3</div>
        <div className="bg-primary rounded-box ">4</div>
        <div className="bg-accent rounded-box">5</div>
        <div className="bg-secondary rounded-box">6</div>
      </div>
    </div>
  );
}

export default App;
