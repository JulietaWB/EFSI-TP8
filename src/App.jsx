import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="quienes" element={<QuienesSomos />} />
        <Route path="productos">
          <Route index element={<Productos />} />
          <Route path="categoria/:idCategoria" element={<Productos />} />
        </Route>
        <Route path="producto/:idProducto" element={<ProductoDetalle />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<div className="p-10">Página no encontrada</div>} />
      </Route>
    </Routes>
  );
}
