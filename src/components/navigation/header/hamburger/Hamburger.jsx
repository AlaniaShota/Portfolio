import "./Hamburger.scss";
import { menuSlide } from "../animation";

import { LinkNav } from "../link/Link";

import { HamburgerFooter } from "../../footer/HamburgerFooter";

import { useState } from "react";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hamburger = () => {
  const pathname = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { t } = useTranslation();

  const navItems = [
    {
      title: t("link_home"),
      href: "/",
    },
    {
      title: t("link_work"),
      href: "/work",
    },
    {
      title: t("link_about"),
      href: "/about",
    },
    {
      title: t("link_contact"),
      href: "#contact",
    },
  ];
  
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
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="hamburger-nav"
        >
          <div className="hamburger-header">
            <p>{t("navigation")}</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <LinkNav
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <HamburgerFooter />
      </div>
    </motion.div>
  );
};
