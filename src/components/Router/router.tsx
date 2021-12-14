import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Home from "../pages/home/home";

import "./assets/css/style.scss";

const MainRouter: React.FC<any> = () => {
  return (
    <main className="main">
      <Routes>
        
        <Route path="/" element={<Home/>} />

      </Routes>
    </main>             
  )
}
export default hot(module)(MainRouter);