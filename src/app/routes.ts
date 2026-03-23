import { createBrowserRouter } from "react-router";
import { HomePage } from "@/app/components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
]);
