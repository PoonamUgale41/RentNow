import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Properties from "./views/Properties/Properties";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/properties" element={<Properties />} />

      </Routes>
    </BrowserRouter>

    <Toaster />
  </>
);