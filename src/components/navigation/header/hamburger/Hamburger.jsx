import "./Hamburger.scss";
import { menuSlide } from "../animation";

import { LinkNav } from "../link/Link";

import { HamburgerFooter } from "../../footer/HamburgerFooter";
import { navigationData } from "../../../../mockData";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hamburger = () => {
  const { pathname } = useLocation(); // ✅ исправлено
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { t } = useTranslation();

  const navItems = navigationData.hamburger.items.map((item, index) => ({
    ...item,
    index,
    title: t(item.titleKey),
  }));

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="hamburger-menu"
    >
      <div className="hamburger-body">
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className="hamburger-nav"
        >
          <div className="hamburger-header">
            <p>{t(navigationData.hamburger.titleKey)}</p>
          </div>

          {navItems.map((item) => (
            <LinkNav
              key={item.index}
              data={item}
              isActive={selectedIndicator === item.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>

        <HamburgerFooter />
      </div>
    </motion.div>
  );
};
