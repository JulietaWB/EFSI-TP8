import React from "react";
import { CartIcon, SearchIcon } from "./Icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-8 bg-brand text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-start justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="text-xl font-bold">Fashuta</Link>
          <p className="text-sm text-white/80 mt-2 max-w-xs">Demo eCommerce — ejemplo para práctica de React + Router + Tailwind.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-white/90">
          <div>
            <h4 className="font-semibold mb-2">Enlaces</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/productos" className="hover:underline">Productos</Link></li>
              <li><Link to="/quienes" className="hover:underline">Quienes somos</Link></li>
              <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contacto</h4>
            <p className="text-sm">hola@fashuta.demo</p>
            <div className="mt-3 flex space-x-3">
              <span className="icon-circle text-white/90"><CartIcon className="w-5 h-5" /></span>
              <span className="icon-circle text-white/90"><SearchIcon className="w-5 h-5" /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-dark text-white/70 text-sm py-3">
        <div className="container mx-auto px-4 text-center">© {new Date().getFullYear()} Fashuta — Demo</div>
      </div>
    </footer>
  );
}
