import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
       {/* ✅ Main Content */}
      <main>
         <Outlet />
      </main>
    </>
  )
};

export default DashboardLayout;
