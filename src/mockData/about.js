import { i18nKeys } from "./i18nKeys";

export const aboutData = {
  preloadKeys: i18nKeys.about.preload,
  widthSectionClass: "widthAboutSectionClass",
  mainItems: [
    { id: 1, titleKey: "learn_grow", descriptionKey: "learn_grow_description" },
    {
      id: 2,
      titleKey: "hardworking_reliable",
      descriptionKey: "hardworking_reliable_description",
    },
    {
      id: 3,
      titleKey: "driven_succeed",
      descriptionKey: "driven_succeed_description",
    },
  ],
  descriptionConfig: {
    scrollDirectionDefault: "up",
    scrollDirectionDown: "down",
    mediaQuery: "(max-width: 800px)",
    smallScreenY: 10,
    scrollDownY: 100,
    scrollUpY: 0,
    arrowRotateDown: 30,
    arrowRotateUp: 0,
    dotFadeInDuration: 0.5,
    dotFadeOutDuration: 0.2,
    dotDelay: 1,
    dotStagger: 1,
  },
  headerConfig: {
    titleKey: i18nKeys.about.title,
    globeRotateDuration: 10,
    globeRotateEase: "linear",
    globeRotateRepeat: Infinity,
    globeIconSize: 80,
  },
  mainConfig: {
    titleKey: i18nKeys.about.howIHelp,
  },
  descriptionTextKeys: {
    descriptionKey: i18nKeys.about.description,
    spanKey: i18nKeys.about.span,
  },
};
