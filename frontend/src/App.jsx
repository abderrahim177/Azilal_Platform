
import { Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/lyouts/MainLayout";
import Home from "./components/lyouts/home";
import Destinations from "./components/DistinationPage/Destinations";
import DestinationDetail from "./components/DistinationPage/DestinationDetail";
// Import these components when you create them
// import Guides from "./components/Guides/Guides";
// import Hotels from "./components/Hotels/Hotels";
import Login from "./components/pages/Auth/login";
import Register from "./components/pages/Auth/register";
import GuideForm from "./components/Forms/GuideForm";
import HotelManagerForm from "./components/Forms/HotelManagerForm";

function App() {
  return (

     <Routes>

      {/* Global Layout */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/distinations" element={<Destinations />} />

        <Route path="/distination/:id" element={<DestinationDetail />} />

        {/* Add more pages here */}
        {/* <Route path="/guides" element={<Guides />} /> */}
        {/* <Route path="/hotels" element={<Hotels />} /> */}

      </Route>
      <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
     <Route path="/guide-setup" element={<GuideForm />} />
      <Route path="/hotel-setup" element={<HotelManagerForm />} />
    </Routes>
  );
}

export default App;
