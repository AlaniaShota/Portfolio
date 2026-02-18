import "./About.scss";
import { AboutHeader } from "./components/aboutHeader";
import { AboutDescription } from "./components/aboutDescription";
import { AboutMain } from "./components/aboutMain";

import { Contact } from "../contact";
import { Preloader } from "../preloader";
import { aboutData } from "../../mockData";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const preloadData = aboutData.preloadKeys.map((key) => t(key));

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
      <Contact />
    </div>
  );
};
