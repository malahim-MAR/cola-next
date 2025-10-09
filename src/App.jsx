import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testing from "./Pages/Testing";
// import Section1 from "./Components/Section/Section1";
// import Section2 from "./Components/Section/Section2";
// import Section4 from "./Components/Section/Section4";
// import Section5 from "./Components/Section/Section5";
// import Section6 from "./Components/Section/Section6";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        {/* <Route path="/sec" element={<Section1 />} />
        <Route path="/sec2" element={<Section2 />} />
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/sec5" element={<Section5 />} />
        <Route path="/sec6" element={<Section6 />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
