import React from "react";
import Homepage from "./homepage";
import Sidebar from "./Sidebar";
import Herosection from "./Herosection";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Sidebar />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
