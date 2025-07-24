import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Pages/Home";
import VideoPage from "../components/Pages/VideoPages";
import ChannelPage from "./Pages/ChannelPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "video/:id",
        element: <VideoPage />,
      },
      {
        path: "channel/:id",

        element: (
          <ProtectedRoute>
            <ChannelPage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "/channel/:userId",
        element: <ChannelPage />,
      },
    ],
  },
]);
export default router;
