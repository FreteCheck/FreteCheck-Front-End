import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "frete/Home.js";
import FreteDetails from "frete/FreteDetails.js";
import Login from "views/examples/Login.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/admin/frete/:id" element={<FreteDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
