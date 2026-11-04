import { Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/lyouts/home";
import Header from "./components/lyouts/Navbar";
import Footer from "./components/lyouts/Footer";

import Destinations from "./components/DistinationPage/Destinations";
import DestinationDetail from "./components/DistinationPage/DestinationDetail";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/distinations" element={<Destinations />} />
        <Route path="/distination/:id" element={<DestinationDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;