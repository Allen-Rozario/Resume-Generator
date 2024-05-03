import React from "react";
import { Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
