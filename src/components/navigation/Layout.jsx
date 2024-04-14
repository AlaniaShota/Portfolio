import { Header } from "./header";

import { Footer } from "./footer/Footer";

import { Contact } from "../contact";

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
