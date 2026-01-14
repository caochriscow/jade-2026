import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router";
import './App.css'
import { useLayoutEffect, type PropsWithChildren } from "react";
import Home from "./pages/Home";

const Scroller = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const Layout = () => (
  <Scroller>
    <Outlet />
  </Scroller>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/portfolio",
        element: <Home />,
      }
    ]
  }]
);

const App = () => {
  return <RouterProvider router={router} />;

}

export default App
