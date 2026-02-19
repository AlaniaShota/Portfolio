import "./SinglePage.scss";
import { NextCase, SinglePageMain } from "./component";

import { Rounded } from "../../../Rounded";
import { Preloader } from "../../../preloader";
import { dataProject } from "../../../../resources/resources";
import { workData } from "../../../../mockData";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

export const SinglePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderData, setPreloadData] = useState(null);
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: workData.singlePageConfig.inViewTriggerOnce,
    threshold: workData.singlePageConfig.inViewThreshold,
  });

  const handleNextProject = () => {
    if (!project) return;

    const projectIndex = dataProject.findIndex(
      (proj) => proj.title === project.title,
    );

    const nextProjectIndex = (projectIndex + 1) % dataProject.length;
    const nextProject = dataProject[nextProjectIndex];

    setIsLoading(true);

    setTimeout(() => {
      setPreloadData(nextProject.preloader_title);
      navigate(
        `${workData.singlePageConfig.workRouteBase}${nextProject.title}`,
      );
    }, workData.singlePageConfig.preloaderDelayMs);
  };

  useEffect(() => {
    const selectedProject = dataProject.find((project) => project.title === id);
    setProject(selectedProject || null);
  }, [id]);

  useEffect(() => {
    if (project) {
      setPreloadData(project.preloader_title);
    }
  }, [project]);

  if (!project) return null; // Ensure project is available before rendering

  const currentIndex = dataProject.findIndex(
    (proj) => proj.title === project.title,
  );
  const nextIndex = (currentIndex + 1) % dataProject.length;
  const nextProject = dataProject[nextIndex];

  return (
    <div className="single-page-content" key={project.id}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            preloadData={preloaderData}
            preloaderData={preloaderData}
            setIsLoading={setIsLoading}
          />
        )}
      </AnimatePresence>
      <motion.div
        animate={{
          x: isHovered ? -workData.singlePageConfig.titleHoverShift : 0,
        }}
        transition={{ duration: 0.4 }}
        className="project-title"
      >
        {project.title}
      </motion.div>
      <div className="single-page-header-content">
        <div className="single-page-header-type-section">
          <div className="section-title">
            {t(workData.singlePageConfig.typeTitleKey)}
          </div>
          <div className="stripe"></div>
          <motion.div
            animate={{
              x: isHovered ? workData.singlePageConfig.detailsHoverShift : 0,
            }}
            transition={{ duration: 0.2 }}
            className="section-text "
          >
            {project.type}
          </motion.div>
        </div>
        <div className="single-page-header-liberties-section">
          <div className="section-title">
            {t(workData.singlePageConfig.libertiesTitleKey)}
          </div>
          <div className="stripe"></div>
          {project.liberties.map((item, index) => (
            <motion.ul
              animate={{
                x: isHovered ? workData.singlePageConfig.detailsHoverShift : 0,
              }}
              transition={{ duration: 0.2 }}
              key={index}
            >
              <li className="section-text">{item}</li>
            </motion.ul>
          ))}
        </div>
        {project.alert_smg && (
          <div className="single-page-header-alert-section" key={project.id}>
            <div className="alert-text">{t(project.alert_smg)}</div>
          </div>
        )}
      </div>
      <SinglePageMain project={project} />
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: workData.singlePageConfig.imgRevealOffset,
        }}
        animate={
          inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: workData.singlePageConfig.imgRevealOffset }
        }
        transition={{ duration: workData.singlePageConfig.imgRevealDuration }}
        className="single-page-img-content"
      >
        <img src={project.src} alt={project.title} loading="lazy" />
        <div className="btn-code-links">
          {project.live_link && (
            <>
              <a target="_blank" href={project.live_link} key={project.id}>
                <motion.div
                  data-scroll
                  data-scroll-speed={
                    workData.singlePageConfig.buttonScrollSpeed
                  }
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Rounded className="button">
                    <p className="description-btn-text">
                      {workData.singlePageConfig.liveLabel}
                    </p>
                    <HiArrowNarrowRight
                      className="arrow"
                      color={workData.singlePageConfig.arrowColor}
                    />
                  </Rounded>
                </motion.div>
              </a>
            </>
          )}
          <a target="_blank" href={project.github_link}>
            <motion.div
              data-scroll
              data-scroll-speed={workData.singlePageConfig.buttonScrollSpeed}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Rounded className="button">
                <p className="description-btn-text">
                  {workData.singlePageConfig.codeLabel}
                </p>
                <HiArrowNarrowRight
                  className="arrow"
                  color={workData.singlePageConfig.arrowColor}
                />
              </Rounded>
            </motion.div>
          </a>
        </div>
      </motion.div>
      <NextCase nextProject={nextProject} onNextProject={handleNextProject} />
    </div>
  );
};
