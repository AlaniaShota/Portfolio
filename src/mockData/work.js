import { i18nKeys } from "./i18nKeys";

export const workData = {
  preloadKeys: i18nKeys.work.preload,
  widthSectionClass: "widthWorkSectionClass",
  defaultComponent: "B",
  componentTypes: {
    list: "A",
    grid: "B",
  },
  pageVariants: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  uiFilterButtons: [
    { type: "A", icon: "layers" },
    { type: "B", icon: "squares" },
  ],
  filterConfig: {
    storageKey: "activeType",
    defaultType: "All",
    queryKey: "type",
    options: [
      { type: "All", label: "All", className: "all" },
      { type: "ReactJS", label: "ReactJS", className: "reactjs" },
      { type: "ReactTS", label: "ReactTS", className: "reactts" },
    ],
  },
  nextCaseScaleAnimation: {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  },
  nextCaseConfig: {
    backRoute: "/work",
  },
  singlePageConfig: {
    workRouteBase: "/work/",
    preloaderDelayMs: 1000,
    inViewThreshold: 0.5,
    inViewTriggerOnce: true,
    titleHoverShift: 15,
    detailsHoverShift: 15,
    imgRevealDuration: 1,
    imgRevealOffset: 100,
    buttonScrollSpeed: 0.1,
    liveLabel: "Live",
    codeLabel: "Code",
    arrowColor: "white",
    typeTitleKey: i18nKeys.work.typeTitle,
    libertiesTitleKey: i18nKeys.work.libertiesTitle,
  },
  singlePageMainConfig: {
    inViewThreshold: 0.5,
    inViewTriggerOnce: true,
    descriptionRevealDuration: 1,
    descriptionTextStagger: 0.02,
    descriptionTextDuration: 5,
    descriptionTextDelay: 1,
    descriptionTextEase: "power1.inOut",
    loadingText: "Loading...",
    imgAlt: "ERROR",
    descriptionTitleKey: i18nKeys.work.descriptionTitle,
  },
  pageTextKeys: {
    titleKey: i18nKeys.work.title,
  },
  nextCaseTextKeys: {
    nextCaseKey: i18nKeys.work.nextCase,
    viewKey: i18nKeys.work.view,
    backKey: i18nKeys.work.back,
  },
};
