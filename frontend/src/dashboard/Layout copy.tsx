import React, { ReactNode } from "react"; // Import ReactNode type
import Header from "./constants/header";
import Sidebar from "./constants/sidebar";
import Footer from "./constants/footer";



interface LayoutProps {
  children: ReactNode; // Explicitly type children prop as ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
