import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
