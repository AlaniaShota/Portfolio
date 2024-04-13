import { dataProject } from "../../../../resources/resources";

import { Rounded } from "../../../Rounded";
import { Preloader } from "../../../preloader";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import "./SinglePage.scss";

import { SinglePageMain } from "./component";

import { CiCircleAlert } from "react-icons/ci";

import { AnimatePresence, motion } from "framer-motion";

export const SinglePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const selectedProject = dataProject.find((project) => project.title === id);

    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const preloadData = project.preloader_title;

  return (
    <div className="single-page-content">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader preloadData={preloadData} setIsLoading={setIsLoading} />
        )}
      </AnimatePresence>
      <motion.div
        animate={{ x: isHovered ? -15 : 0 }}
        transition={{ duration: 0.4 }}
        className="project-title"
      >
        {project.title}
      </motion.div>

      <div className="single-page-header-content">
        <div className="single-page-header-type-section">
          <div className="section-title">TYPE</div>
          <div className="stripe"></div>
          <motion.div
            animate={{ x: isHovered ? 15 : 0 }}
            transition={{ duration: 0.2 }}
            className="section-text "
          >
            {project.type}
          </motion.div>
        </div>
        <div className="single-page-header-liberties-section">
          <div className="section-title">LIBERTIES</div>
          <div className="stripe"></div>
          {project.liberties.map((item, index) => (
            <motion.ul
              animate={{ x: isHovered ? 15 : 0 }}
              transition={{ duration: 0.2 }}
              key={index}
            >
              <li className="section-text ">{item}</li>
            </motion.ul>
          ))}
        </div>
        {project.alert_smg && (
          <div className="single-page-header-alert-section">
            <div className="alert-text">
              {/* <CiCircleAlert size='28px'/> */}
              {project.alert_smg}
            </div>
          </div>
        )}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="single-page-img-content"
      >
        <img src={project.src} alt={project.title} loading="lazy" />
        <div className="btn-code-links">
          {project.live_link && (
            <>
              <a target="_blank" href={project.live_link}>
                <motion.div
                  data-scroll
                  data-scroll-speed={0.1}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Rounded className="button">
                    <p className="description-btn-text">Live</p>
                    <HiArrowNarrowRight className="arrow" color="white" />
                  </Rounded>
                </motion.div>
              </a>
            </>
          )}
          <a target="_blank" href={project.github_link}>
            <motion.div
              data-scroll
              data-scroll-speed={0.1}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Rounded className="button">
                <p className="description-btn-text">Code</p>
                <HiArrowNarrowRight className="arrow" color="white" />
              </Rounded>
            </motion.div>
          </a>
        </div>
      </motion.div>
      <SinglePageMain project={project} />
    </div>
  );
};
