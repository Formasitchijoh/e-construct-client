import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Supplier Dashboard",
  description: "manages all supplier operations",
};
const Layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
