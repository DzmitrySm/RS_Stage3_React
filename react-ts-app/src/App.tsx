import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <div>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutUsPage />} />
          <Route path={"/form"} element={<FormPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default WrappedApp;
