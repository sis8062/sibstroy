import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Tenders, { loader as tendersLoader } from "./pages/Tenders";
import Instruction from "./pages/Instruction";
import About from "./pages/About";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Tenders />,
        loader: tendersLoader,
      },
      {
        path: "instruction",
        element: <Instruction />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
