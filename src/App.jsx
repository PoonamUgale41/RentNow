import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Views/Home/Home";
import Properties from "./Views/Properties/Properties";
import PropertyDetails from "./Views/PropertyDetails/PropertyDetails";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import NotFound from "./Views/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;