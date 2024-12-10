import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./routes/Dashboard";
import Providers from "./redux/provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <Providers><RouterProvider router={router} /></Providers>;
}

export default App;
