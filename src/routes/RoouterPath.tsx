import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Success from "../pages/Success";
import TechnicalEvaluation from "../pages/TechnicalEvaluation";

const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TechnicalEvaluation></TechnicalEvaluation>,
    },
    {
      path: "/success",
      element: <Success></Success>,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default RouterPath;
