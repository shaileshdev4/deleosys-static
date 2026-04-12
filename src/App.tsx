import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/AboutUs";
import Layouts from "./components/layouts/Layouts";
import Home from "./pages/Home";
import OurProducts from "./pages/OurProducts";
import Careers from "./pages/Careers";
import Services from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import CyberSecurity from "./pages/services/CyberSecurity";
import CustomSoftare from "./pages/services/CustomSoftware";
import AiandAutomation from "./pages/services/AIandAutomation";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👇 Layout parent route */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="web-dev" element={<Services />} />
          <Route path="/app-dev" element={<AppDevelopment />} />
          <Route path="/cyber" element={<CyberSecurity />} />

          <Route path="/custom-soft" element={<CustomSoftare />} />

          <Route path="/ai-auto" element={<AiandAutomation />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;