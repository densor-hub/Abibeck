import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import MoreDetailsPage from "./components/MoreDetails";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;

const Root = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/more-details" element={<MoreDetailsPage />}></Route>
        <Route path="*" element={<></>}></Route>
      </Routes>
    </main>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);