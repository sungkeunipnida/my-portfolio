// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";

function App() {
  return (
    <Router>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/project1" element={<Project1 />} />
        </Routes>
      </LoadScript>
    </Router>
  );
}

export default App;
