
import React, { useState } from "react";
import Nav from "./Nav";
import MoblleNav from "./MoblleNav";


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Nav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />

      <MoblleNav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
    </>
  );
};

export default Navbar;
