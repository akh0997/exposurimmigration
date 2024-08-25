import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import TechnicalEvaluation from "../pages/TechnicalEvaluation";

const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TechnicalEvaluation></TechnicalEvaluation>,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default RouterPath;
