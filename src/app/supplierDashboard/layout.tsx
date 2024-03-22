import { Metadata } from "next";
import React, { ReactNode } from "react";
import SideNav from "./SideNav";

export const metadata: Metadata = {
  title: "Supplier Dashboard",
  description: "manages all supplier operations",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <SideNav>{children}</SideNav>
      </body>
    </html>
  );
};

export default Layout;
