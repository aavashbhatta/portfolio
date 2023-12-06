import React from "react";
import Homepage from "./homepage";
import Sidebar from "./Sidebar";
import Herosection from "./Herosection";
import About from "./About";
import Facts from "./Facts";
import Skills from "./Skills";
import Project from "./Project";
import Resume from "./Resume";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <Sidebar />
      <About />
      <Skills />
      <Project />
      <Resume />
      {/* <Services /> */}
      <Contact />
    </div>
  );
}

export default App;
