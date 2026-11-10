
import { Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/lyouts/MainLayout";
import Home from "./components/lyouts/home";
import Destinations from "./components/DistinationPage/Destinations";
import DestinationDetail from "./components/DistinationPage/DestinationDetail";

// Import these components when you create them
// import Guides from "./components/Guides/Guides";
// import Hotels from "./components/Hotels/Hotels";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";

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

    </Routes>
  );
}

export default App;
