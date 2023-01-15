import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/main.scss";
import Home from "./pages/Home/Home";
import NotePreview from "./pages/NotePreview/NotePreview";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/:noteId" element={<NotePreview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
