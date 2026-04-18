import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-amber-300 p-3 sm:hidden">
        <h1 className="font-bold">Menu</h1>
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {/* Sidebar */}
      <ul
        className={`
          bg-amber-300 font-bold gap-4 p-5
          flex flex-col
          fixed top-0 left-0 h-full w-2/3
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300
          sm:static sm:translate-x-0 sm:flex-row sm:justify-center sm:w-full sm:h-auto
        `}
      >
        <li
          onClick={() => {
            navigate("/home");
            setIsOpen(false);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/contact");
            setIsOpen(false);
          }}
        >
          Contact
        </li>
        <li
          onClick={() => {
            navigate("/services");
            setIsOpen(false);
          }}
        >
          Services
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
