import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./responsive.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import App from "./App";
import Socials from "./Components/Socials";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <Socials />
        <App />
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
