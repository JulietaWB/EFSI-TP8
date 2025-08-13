import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Productos() {
  const { idCategoria } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      setCurrentPage(1); // Reset to first page when category changes
      
      try {
        let response;
        if (idCategoria) {
          // Fetch products by category
          response = await api.get(`/products/category/${idCategoria}`);
          setProducts(response.data.products);
        } else {
          // Fetch all products
          response = await api.get("/products?limit=100");
          setProducts(response.data.products);
        }
      } catch (err) {
        setError("Error al cargar los productos");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [idCategoria]);

  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {idCategoria ? `Productos - ${idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)}` : 'Todos los Productos'}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {idCategoria 
            ? `Explora nuestra colección de ${idCategoria}` 
            : 'Descubre nuestra amplia gama de productos de alta calidad'
          }
        </p>
      </section>
      
      {/* Loading State */}
      {loading && (
        <Loader text="Cargando productos..." />
      )}
      
      {/* Error State */}
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
      
      {/* Products Grid */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-8">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium hover-lift"
              >
                ← Anterior
              </button>
              
              <div className="flex flex-wrap justify-center space-x-1">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg transition-colors duration-300 font-medium ${
                      currentPage === page
                        ? 'bg-brand text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium hover-lift"
              >
                Siguiente →
              </button>
            </div>
          )}
          
          {/* Results Info */}
          <div className="text-center text-gray-600 bg-gray-50 rounded-lg py-4">
            <p className="font-medium">
              Mostrando {startIndex + 1}-{Math.min(endIndex, products.length)} de {products.length} productos
            </p>
          </div>
        </>
      )}
      
      {/* No Products Found */}
      {!loading && !error && products.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto shadow-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-500 text-2xl">📦</span>
            </div>
            <p className="text-gray-600 font-medium mb-2">No se encontraron productos</p>
            <p className="text-gray-500 text-sm">
              {idCategoria 
                ? `No hay productos disponibles en la categoría "${idCategoria}"`
                : 'No hay productos disponibles en este momento'
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
