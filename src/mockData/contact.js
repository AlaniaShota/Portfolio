import { i18nKeys } from "./i18nKeys";

export const contactData = {
  mailBase: "https://mail.google.com/mail/?view=cm&to=",
  email: "alaniashota08@gmail.com",
  tel: "+995568820317",
  config: {
    mobileMaxWidth: 800,
    xTransformRange: [0, 1],
    xTransformOutput: [0, 100],
    yDesktop: [-500, 0],
    yMobile: [0, 0],
    subjectKey: i18nKeys.contact.subject,
    subjectFirstWordKey: i18nKeys.contact.subjectFirstWord,
    subjectSecondWordKey: i18nKeys.contact.subjectSecondWord,
    connectKey: i18nKeys.contact.connect,
    telFormatPattern: /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
    telFormatTemplate: "$1 $2 $3 $4 $5",
  },
};
