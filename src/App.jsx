import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import FormPage from "./pages/form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
