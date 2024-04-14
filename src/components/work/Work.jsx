import { Filter } from "./component/filter";

import { HeaderSection } from "../HeaderSection";

import "./Work.scss";
import { Preloader } from "../preloader";

import { Projects, ImgProject } from "../projects";

import { dataProject } from "../../resources/resources";

import { Contact } from "../contact";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [customComponent, setCustomComponent] = useState("A");
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  const categoryFilter = searchParams.get("type");

  const preloadData = [t("link_work")];

  const renderComponent = () => {
    switch (customComponent) {
      case "A":
        return (
          <Projects
            marginTop="70px"
            data={dataProject}
            categoryFilter={categoryFilter}
          />
        );

      case "B":
        return (
          <ImgProject data={dataProject} categoryFilter={categoryFilter} />
        );
      default:
        return null;
    }
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="work">
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
          )}
        </AnimatePresence>
        <HeaderSection title={t("work_title")} />
        <Filter
          categoryFilter={categoryFilter}
          search={setSearchParams}
          setCustomComponent={setCustomComponent}
        />
        <AnimatePresence mode="exitBeforeEnter">
          <motion.div
            key={customComponent}
            className="render-component"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
      <Contact />
    </>
  );
};
