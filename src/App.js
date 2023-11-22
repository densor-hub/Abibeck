import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./Pages/LandingPage";
import MoreDetailsPage from "./Pages/ServicesPage";
import Careers from "./Pages/Careers";
import PageNotFound from "./Pages/404";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;

const Root = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route path="/more-details" element={<MoreDetailsPage />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </main>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);
