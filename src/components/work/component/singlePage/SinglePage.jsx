import { SinglePageMain } from "./component";

import { dataProject } from "../../../../resources/resources";

import { Rounded } from "../../../Rounded";
import { Preloader } from "../../../preloader";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import "./SinglePage.scss";

import { AnimatePresence, motion } from "framer-motion";

export const SinglePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderData, setPreloadData] = useState(null);
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleNextProject = () => {
    const projectIndex = dataProject.findIndex(
      (proj) => proj.title === project.title,
    );

    const nextProjectIndex = (projectIndex + 1) % dataProject.length;
    const nextProject = dataProject[nextProjectIndex];

    setIsLoading(true); // Показываем preloader перед загрузкой следующего проекта

    setTimeout(() => {
      setPreloadData(nextProject.preloader_title); // Обновляем preloadData с заголовком следующего проекта
      navigate(`/work/${nextProject.title}`);
    }, 1000); // Имитируем загрузку данных (задержка в 1 секунду)
  };

  useEffect(() => {
    const selectedProject = dataProject.find((project) => project.title === id);
    setProject(selectedProject);
  }, [id]);

  useEffect(() => {
    if (project) {
      setPreloadData(project.preloader_title);
    }
  }, [project]);

  if (!project) {
    return <div>Loading...</div>;
  }

  // const preloadData = project.preloader_title;

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
          <div className="single-page-header-alert-section" key={project.id}>
            <div className="alert-text">{project.alert_smg}</div>
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
              <a target="_blank" href={project.live_link} key={project.id}>
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
      <SinglePageMain
        project={project}
        dataProject={dataProject}
        onNextProject={handleNextProject}
      />
    </div>
  );
};
