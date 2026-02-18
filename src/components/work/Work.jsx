import "./Work.scss";
import { Filter } from "./component/filter";

import { HeaderSection } from "../HeaderSection";
import { Preloader } from "../preloader";
import { Projects, ImgProject } from "../projects";
import { dataProject } from "../../resources/resources";
import { Contact } from "../contact";
import { workData } from "../../mockData";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export const Work = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [customComponent, setCustomComponent] = useState(
    workData.defaultComponent,
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  const categoryFilter = searchParams.get(workData.filterConfig.queryKey);

  const preloadData = workData.preloadKeys.map((key) => t(key));

  const widthWorkSectionClass = workData.widthSectionClass;

  const renderComponent = () => {
    switch (customComponent) {
      case workData.componentTypes.list:
        return (
          <Projects
            marginTop="70px"
            data={dataProject}
            categoryFilter={categoryFilter}
          />
        );

      case workData.componentTypes.grid:
        return (
          <ImgProject data={dataProject} categoryFilter={categoryFilter} />
        );
      default:
        return null;
    }
  };

  const variants = workData.pageVariants;

  return (
    <>
      <div className="work">
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
          )}
        </AnimatePresence>
        <HeaderSection
          title={t(workData.pageTextKeys.titleKey)}
          widthWorkSectionClass={widthWorkSectionClass}
        />
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
