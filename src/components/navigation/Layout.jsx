import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
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
