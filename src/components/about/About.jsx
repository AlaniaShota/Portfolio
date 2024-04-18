import { AboutHeader } from "./components/aboutHeader";

import { AboutDescription } from "./components/aboutDescription";
import { AboutMain } from "./components/aboutMain";

import { Contact } from "../contact";

import { Preloader } from "../preloader";

import { useState } from "react";
import "./About.scss";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const preloadData = [t("link_about")];

  return (
    <div className="about">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
        )}
      </AnimatePresence>
      <AboutHeader  />
      <AboutDescription />
      <AboutMain />
      <Contact />
    </div>
  );
};
