import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./routes/Dashboard";
import Providers from "./redux/provider";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound/>,
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
