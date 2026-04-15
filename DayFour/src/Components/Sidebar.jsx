import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/services")}>Services</li>
      </ul>
    </>
  );
};

export default Sidebar;
