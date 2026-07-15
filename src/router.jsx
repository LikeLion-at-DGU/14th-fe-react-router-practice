import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";

// 실습 3: TODO. children 배열에 "/post/:id" 경로를 추가하고 PostDetail을 연결하세요.
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/test", element: <Test /> },
    ],
  },
]);
