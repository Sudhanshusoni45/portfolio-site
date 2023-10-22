import "./App.css";
import DemoShootingStar from "./pages/demo_shooting_star/DemoShootingStar";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="star-demo" element={<DemoShootingStar />} />
      </Routes>
    </>
  );
}

export default App;
