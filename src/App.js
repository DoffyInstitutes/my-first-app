import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./1 - Home";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
