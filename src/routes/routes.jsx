import { About } from "../components/about";
import { Landing } from "../components/landing/Landing";

import { Layout } from "../components/navigation";

import { Work } from "../components/work";

import { SinglePage } from "../components/work/component/singlePage";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      { path: "/work/:id", element: <SinglePage /> },
    ],
  },
]);
