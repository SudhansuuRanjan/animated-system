import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main className="bg-[#fffbe8] dark:bg-[rgb(17,24,39)]  antialiased">
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;