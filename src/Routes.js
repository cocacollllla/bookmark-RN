import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

const Routing = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path={"/"} exact={true} element={<Home />} />
      </Routes>
    </Router>
  );
};
export default Routing;
