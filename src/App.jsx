import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Toaster />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
