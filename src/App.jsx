import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lazy imports
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const GetInTouch = lazy(() => import("./pages/GetInTouch"));
const SoftwareDev = lazy(() => import("./pages/SoftwareDev"));
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const ArtificialInt = lazy(() => import("./pages/ArtificialInt"));
const BusinessAuto = lazy(() => import("./pages/BusinessAuto"));
const GraphicsDesign = lazy(() => import("./pages/GraphicsDesign"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const Animation = lazy(() => import("./pages/Animation"));
const ProductDesign = lazy(() => import("./pages/ProductDesign"));
const SocialForceNet = lazy(() => import("./pages/SocialForceNet"));
const Masterhand = lazy(() => import("./pages/Masterhand"));
const ElitePro = lazy(() => import("./pages/ElitePro"));
const FounderSync = lazy(() => import("./pages/FounderSync"));
const TalentNexus = lazy(() => import("./pages/TalentNexus"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route
            path="/solutions/softwaredevelopement"
            element={<SoftwareDev />}
          />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solutions/ai" element={<ArtificialInt />} />
          <Route
            path="/solutions/businessautomation"
            element={<BusinessAuto />}
          />
          <Route path="/solutions/graphics" element={<GraphicsDesign />} />
          <Route path="/solutions/webdesign" element={<WebsiteDesign />} />
          <Route path="/solutions/digitalmkt" element={<DigitalMarketing />} />
          <Route path="/solutions/animation" element={<Animation />} />
          <Route path="/solutions/productdesign" element={<ProductDesign />} />
          <Route path="/community/socialforce" element={<SocialForceNet />} />
          <Route path="/community/masterhand" element={<Masterhand />} />
          <Route path="/community/elitepro" element={<ElitePro />} />
          <Route path="/community/foundersync" element={<FounderSync />} />
          <Route path="/community/talentnexus" element={<TalentNexus />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
