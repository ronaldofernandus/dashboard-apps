import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';

const Content = () => {
  return (
    <div className="container">
      
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
