import React from "react";

export default function QuienesSomos() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 header-bg text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-6">
          Quiénes Somos
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Somos una empresa comprometida con la excelencia, la innovación y la satisfacción del cliente
        </p>
      </section>
      
      {/* Historia Section */}
      <section className="bg-white p-8 rounded-lg shadow-md hover-lift">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestra Historia
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fashuta nació en 2020 con la visión de democratizar la moda y hacer accesible 
                el estilo para todos. Fundada por un equipo de apasionados de la moda y la tecnología, 
                nuestra empresa se ha convertido en un referente en el eCommerce de moda en Latinoamérica.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Desde nuestros inicios, nos hemos comprometido con la calidad, la innovación y 
                la satisfacción del cliente. Nuestro equipo está formado por profesionales 
                que trabajan incansablemente para ofrecerte las mejores tendencias y productos.
              </p>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Imagen de la empresa</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-center">
            Ofrecer productos de moda de alta calidad a precios accesibles, inspirando confianza 
            y estilo en cada uno de nuestros clientes. Nos esforzamos por crear una experiencia 
            de compra única que combine tendencia, calidad y servicio excepcional.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-center">
            Ser la tienda de moda online preferida en Latinoamérica, reconocida por la calidad 
            de nuestros productos, la excelencia en el servicio al cliente y nuestro compromiso 
            con la innovación y la sostenibilidad.
          </p>
        </div>
      </section>
      
      {/* Valores */}
      <section className="bg-white p-8 rounded-lg shadow-md hover-lift">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💎</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Calidad</h4>
            <p className="text-gray-600 text-sm">
              Nos comprometemos a ofrecer solo productos de la más alta calidad
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🤝</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Confianza</h4>
            <p className="text-gray-600 text-sm">
              Construimos relaciones duraderas basadas en la transparencia y honestidad
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovación</h4>
            <p className="text-gray-600 text-sm">
              Constantemente buscamos nuevas formas de mejorar y evolucionar
            </p>
          </div>
        </div>
      </section>
      
      {/* Equipo */}
      <section className="bg-white p-8 rounded-lg shadow-md hover-lift">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nuestro Equipo
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <h4 className="font-semibold text-gray-900">María González</h4>
            <p className="text-gray-600 text-sm">CEO & Fundadora</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <h4 className="font-semibold text-gray-900">Carlos Rodríguez</h4>
            <p className="text-gray-600 text-sm">Director de Tecnología</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <h4 className="font-semibold text-gray-900">Ana Martínez</h4>
            <p className="text-gray-600 text-sm">Directora de Marketing</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <h4 className="font-semibold text-gray-900">Luis Pérez</h4>
            <p className="text-gray-600 text-sm">Director de Operaciones</p>
          </div>
        </div>
      </section>
    </div>
  );
}
