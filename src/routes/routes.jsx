import { About } from "../components/about";
import { Landing } from "../components/landing/Landing";

import { Layout } from "../components/navigation";

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
      // {
      //   path: "/blog",
      //   element: <Blog />,
      // },
      // { path: "/blog/:id", element: <SinglePage /> },
    ],
  },
]);
