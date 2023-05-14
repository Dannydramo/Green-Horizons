import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import WhatWeDo from "./pages/WhatWeDo";
import Media from "./pages/Media";
import Conatct from "./pages/Conatct";
import Donate from "./pages/Donate";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
