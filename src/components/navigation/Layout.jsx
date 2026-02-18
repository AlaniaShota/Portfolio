import { Header } from "./header";

import { Footer } from "./footer/Footer";

import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
