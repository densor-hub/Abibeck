import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./UIs/LandingPage";
import MoreDetailsPage from "./UIs/ServicesPage";
import Careers from "./UIs/Careers";
import PageNotFound from "./UIs/404";
import ServicesPage from "./UIs/ServicesPage";
import AboutUsPage from "./UIs/AboutUsPage";
import ContactUsPage from "./UIs/ContactUsPage";

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
