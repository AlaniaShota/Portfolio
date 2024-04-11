import { dataProject } from "../../../../resources/resources";

import { Rounded } from "../../../Rounded";
import { Preloader } from "../../../preloader";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

import "./SinglePage.scss";

import { AnimatePresence, motion } from "framer-motion";
export const SinglePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Find the project with the matching ID from projectsData
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
        transition={{ duration: 0.2 }}
        className="project-title"
      >
        {project.title}
      </motion.div>
      <div className="single-page-header-section">
        <div className="single-page-header-type-section">
          <div className="section-title">TYPE</div>
          <div className="stripe"></div>
          <motion.div
            animate={{ x: isHovered ? 15 : 0 }}
            transition={{ duration: 0.2 }}
            className="type-section-header"
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
              <li>{item}</li>
            </motion.ul>
          ))}
        </div>
      </div>
      <motion.div
        className="btn-code-links"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        // whileHover={{
        //   ".type-section-header": { x: 15 },
        //   ".single-page-header-liberties-section ul": { x: -15 },
        // }}
      >
        <a target="_blank" href={project.live_link}>
          <div data-scroll data-scroll-speed={0.1}>
            <Rounded className="button">
              <p className="description-btn-text">Live</p>
              <HiArrowNarrowRight className="arrow" color="white" />
            </Rounded>
          </div>
        </a>
        <a target="_blank" href={project.github_link}>
          <div data-scroll data-scroll-speed={0.1}>
            <Rounded className="button">
              <p className="description-btn-text">Code</p>
              <HiArrowNarrowRight className="arrow" color="white" />
            </Rounded>
          </div>
        </a>
      </motion.div>
      <div className="single-page-img-content">
        <img src={project.src} alt="" />
      </div>
    </div>
  );
};
