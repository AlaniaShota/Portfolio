import { AboutHeader } from "./components/aboutHeader";

import { Preloader } from "../preloader";

import { useState } from "react";
import "./About.scss";
import { AnimatePresence } from "framer-motion";

import { AboutDescription } from "./components/aboutDescription";
import { AboutMain } from "./components/aboutMain";

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  const preloadData = ["About"];
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
        )}
      </AnimatePresence>
      <AboutHeader />
      <AboutDescription />
      <AboutMain />
    </>
  );
};
