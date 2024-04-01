import { AboutHeader } from "./components/aboutHeader";

import { AboutDescription } from "./components/aboutDescription";
import { AboutMain } from "./components/aboutMain";

import { Preloader } from "../preloader";

import { useState } from "react";
import "./About.scss";
import { AnimatePresence } from "framer-motion";

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  const preloadData = ["About"];
  return (
    <div className="about">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
        )}
      </AnimatePresence>
      <AboutHeader />
      <AboutDescription />
      <AboutMain />
    </div>
  );
};
