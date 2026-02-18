import "./AboutHeader.scss";
import { HeaderSection } from "../../../HeaderSection";
import { aboutData } from "../../../../mockData";

import { motion } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export const AboutHeader = () => {
  const { t } = useTranslation();
  const { headerConfig, widthSectionClass } = aboutData;

  return (
    <div className="about-header-section">
      <HeaderSection
        title={t(headerConfig.titleKey)}
        widthAboutSectionClass={widthSectionClass}
      />
      <div className="glob-animation-content">
        <div className="stripe"></div>
        <div className="digital-ball">
          <div className="overlay"></div>
          <div className="globe">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: headerConfig.globeRotateDuration,
                repeat: headerConfig.globeRotateRepeat,
                ease: headerConfig.globeRotateEase,
              }}
            >
              <CiGlobe className="icon-glob" size={headerConfig.globeIconSize} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
