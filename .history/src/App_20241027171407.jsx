import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
      
          <Route path="/" element={<Hero />} />
          <Route
            path="/userDashboard"
            element={
              <div className="flex flex-col h-screen">
                <Dashboard />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;