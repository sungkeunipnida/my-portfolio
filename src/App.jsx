// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/project1" element={<Project1 />} />
      </Routes>
    </Router>
  );
}

export default App;
