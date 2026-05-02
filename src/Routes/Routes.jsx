import { createBrowserRouter } from "react-router-dom";
import Main from "@/Layout/Main";
import Home from "@/components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <DashLayout />
      //     </ProtectedRoute>
      //   ),
      //   children: [
      //     {
      //       path: "inventory",
      //       element: <Inventory />,
      //     },
      //     {
      //       path: "inventory/:productId",
      //       element: <InventoryItemDetail />,
      //     },
      //     {
      //       path: "location",
      //       element: <Location />,
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
