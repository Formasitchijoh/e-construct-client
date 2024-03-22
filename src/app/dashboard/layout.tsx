import React from "react";
// import SideNav from './sidenav'
import SideNav from "../supplierDashboard/SideNav";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SideNav>{children}</SideNav>;
};

export default Layout;
