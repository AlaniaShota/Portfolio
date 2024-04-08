import { FilterButton } from "./component/filterButton";

import { HeaderSection } from "../HeaderSection";

import "./Work.scss";
import { Preloader } from "../preloader";

import { Projects } from "../projects";

import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const preloadData = [t("link_work")];
  return (
    <>
      <div className="work">
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
          )}
        </AnimatePresence>
        <HeaderSection title="Creating next level digital products" />
        <FilterButton />
        <Projects marginTop="70px" />
      </div>
    </>
  );
};
