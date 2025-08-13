import React, { useState, useEffect } from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import FloatingIcons from "../components/FloatingIcons";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/products?limit=6");
        setFeaturedProducts(response.data.products);
      } catch (err) {
        setError("Error al cargar los productos destacados");
        console.error("Error fetching featured products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="space-y-12 relative">
      <FloatingIcons />
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 header-bg text-white rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bienvenidos a Fashuta
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Tu tienda de moda online con las mejores tendencias y productos únicos de alta calidad
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-brand px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md hover-lift">
              Ver Productos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand transition-all duration-300 transform hover:scale-105 hover-lift">
              Ofertas Especiales
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-gray-100 hover-lift">
          <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="text-white text-xl">🔥</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuevas Tendencias</h3>
          <p className="text-gray-600 leading-relaxed">Explora las últimas tendencias de la temporada</p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-gray-100 hover-lift">
          <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="text-white text-xl">💰</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ofertas Especiales</h3>
          <p className="text-gray-600 leading-relaxed">Descuentos increíbles en productos seleccionados</p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-gray-100 hover-lift">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="text-white text-xl">🚚</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Envío Gratis</h3>
          <p className="text-gray-600 leading-relaxed">En compras superiores a $50.000</p>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de productos más populares
          </p>
        </div>
        
        {loading && (
          <Loader text="Cargando productos destacados..." />
        )}
        
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-xl">⚠️</span>
              </div>
              <p className="text-red-600 font-medium mb-2">Error</p>
              <p className="text-red-500 text-sm mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
              >
                Reintentar
              </button>
            </div>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
