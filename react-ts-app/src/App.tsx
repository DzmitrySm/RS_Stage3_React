import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import FormPage from "./pages/FormPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element></Route>
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <div>
      <BrowserRouter>
        <App />
        {location.pathname !== "/" &&
        location.pathname !== "/about" &&
        location.pathname !== "/form" ? (
          ""
        ) : (
          <Header />
        )}
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/about"} element={<AboutUsPage />}></Route>
          <Route path={"/form"} element={<FormPage />}></Route>
          <Route path={"*"} element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default WrappedApp;
