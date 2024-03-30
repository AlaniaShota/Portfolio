import { Header } from "./header";

import { Contact } from "../contact";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Contact />
    </>
  );
};
