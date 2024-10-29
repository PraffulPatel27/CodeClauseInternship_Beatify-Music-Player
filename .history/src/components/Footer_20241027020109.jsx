import React from "react"

function Footer() {
  
}

export default Footer;


import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/userDashboard") {
    return null;
  }

  return (
    <div className="bg-gray-800 p-4 text-center text-gray-400">
      2023 Music App. All rights reserved.
    </div>
  );
}

export default Footer;