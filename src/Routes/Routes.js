import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import HomePage from "../pages/HomePage";
import ServiciosPage from "../pages/Servicios";
import ContactoPage from "../pages/Contacto";
import LoginPage from "../pages/Login";
import NosotrosPage from "../pages/Nosotros";
import NotFounPage from '../pages/NotFoundPage';

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFounPage />} />
        <Route path="/ServiciosPage" element={<ServiciosPage />} />
        <Route path="/ContactoPage" element={<ContactoPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Nosotros" element={<NosotrosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
