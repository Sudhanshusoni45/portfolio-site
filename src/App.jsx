import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Cal Sans", // Change this to your desired font family
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster />
        <Analytics />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
