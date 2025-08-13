import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import api from "../api/api";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/products/categories");
        setCategories(response.data);
      } catch (err) {
        setError("Error al cargar categorías");
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Sin listeners globales: solo hover/click controlados

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-brand">
            Fashuta
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`
              }
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/quienes" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`
              }
            >
              Quienes Somos
            </NavLink>
            
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center">
                <NavLink
                  to="/productos"
                  className={({ isActive }) => 
                    `transition-colors ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`
                  }
                >
                  Productos
                </NavLink>
                <button
                  onClick={toggleDropdown}
                  className="ml-1 p-1 text-gray-700 hover:text-brand transition-colors"
                  aria-haspopup="menu"
                  aria-expanded={isDropdownOpen}
                  type="button"
                >
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50" role="menu">
                <div className="py-2">
                  <NavLink
                    to="/productos"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Ver todos
                  </NavLink>
                  {loading && (
                    <div className="px-4 py-2 text-gray-500 text-sm">
                      Cargando categorías...
                    </div>
                  )}
                  {error && (
                    <div className="px-4 py-2 text-red-500 text-sm">
                      {error}
                    </div>
                  )}
                  {Array.isArray(categories) && categories.map((category) => (
                    <NavLink
                      key={category}
                      to={`/productos/categoria/${encodeURIComponent(category)}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors capitalize"
                    >
                      {category}
                    </NavLink>
                  ))}
                </div>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`
              }
            >
              Contacto
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand bg-brand/10' : 'text-gray-700 hover:text-brand hover:bg-gray-100'}`
                }
              >
                Home
              </NavLink>
              
              <NavLink
                to="/quienes"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand bg-brand/10' : 'text-gray-700 hover:text-brand hover:bg-gray-100'}`
                }
              >
                Quienes Somos
              </NavLink>
              
              <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/productos"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `transition-colors ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`
                    }
                  >
                  Productos
                  </NavLink>
                  <button
                    onClick={toggleDropdown}
                    className="p-1 text-gray-700 hover:text-brand transition-colors"
                    type="button"
                  >
                    <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {isDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <NavLink
                      to="/productos"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className="block px-4 py-2 text-gray-700 hover:text-brand transition-colors"
                    >
                      Ver todos
                    </NavLink>
                    {loading && (
                      <div className="px-4 py-2 text-gray-500 text-sm">
                        Cargando categorías...
                      </div>
                    )}
                    {error && (
                      <div className="px-4 py-2 text-red-500 text-sm">
                        {error}
                      </div>
                    )}
                    {Array.isArray(categories) && categories.map((category) => (
                      <NavLink
                        key={category}
                        to={`/productos/categoria/${encodeURIComponent(category)}`}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-700 hover:text-brand transition-colors capitalize"
                      >
                        {category}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              
              <NavLink
                to="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand bg-brand/10' : 'text-gray-700 hover:text-brand hover:bg-gray-100'}`
                }
              >
                Contacto
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
