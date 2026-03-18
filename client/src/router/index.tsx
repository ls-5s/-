import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">404</h2>
          <p className="text-gray-600 mt-2">页面未找到</p>
        </div>
      </MainLayout>
    ),
  },
]);
