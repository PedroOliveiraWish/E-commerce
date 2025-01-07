import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./page/FormPage";
import Home from "./page/HomePage";
import Admin from "./page/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
