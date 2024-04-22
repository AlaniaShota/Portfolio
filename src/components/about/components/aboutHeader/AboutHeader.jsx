import "./AboutHeader.scss";
import { HeaderSection } from "../../../HeaderSection";

import { motion } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export const AboutHeader = () => {
  const { t } = useTranslation();
  const widthAboutSectionClass = "widthAboutSectionClass";

  return (
    <div className="about-header-section">
      <HeaderSection
        title={t("about_title")}
        widthAboutSectionClass={widthAboutSectionClass}
      />
      <div className="glob-animation-content">
        <div className="stripe"></div>
        <div className="digital-ball">
          <div className="overlay"></div>
          <div className="globe">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <CiGlobe className="icon-glob" size={80} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
