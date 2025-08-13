import React, { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 header-bg text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-6">
          Contáctanos
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible
        </p>
      </section>
      
      {/* Main Content */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Información de Contacto
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-600">Av. Principal 123, Providencia</p>
                <p className="text-gray-600">Santiago, Chile</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                <p className="text-gray-600">+56 2 2345 6789</p>
                <p className="text-gray-600">+56 9 8765 4321</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">✉️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">contacto@fashuta.cl</p>
                <p className="text-gray-600">soporte@fashuta.cl</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🕒</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</p>
                <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                <p className="text-gray-600">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold text-gray-900 mb-4">Síguenos en Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white hover:bg-brand/90 transition-colors">
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white hover:bg-brand/90 transition-colors">
                <span className="text-sm">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white hover:bg-brand/90 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white hover:bg-brand/90 transition-colors">
                <span className="text-sm">💼</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Formulario de contacto */}
        <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Envíanos un Mensaje
          </h2>
          
          {submitStatus === 'success' && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">¡Mensaje enviado con éxito!</p>
              <p className="text-green-600 text-sm">Te responderemos lo antes posible.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Asunto *
              </label>
              <select
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Selecciona un asunto</option>
                <option value="consulta">Consulta General</option>
                <option value="producto">Consulta sobre Producto</option>
                <option value="envio">Consulta sobre Envío</option>
                <option value="devolucion">Devolución o Cambio</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mensaje *
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand text-white py-3 px-6 rounded-lg hover:bg-brand/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium hover-lift"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Enviando...
                </span>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-white p-8 rounded-lg shadow-md hover-lift">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto tiempo tarda el envío?</h3>
            <p className="text-gray-600 text-sm">
              Los envíos estándar tardan entre 3-5 días hábiles. Los envíos express están disponibles para entrega en 24-48 horas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">¿Puedo devolver un producto?</h3>
            <p className="text-gray-600 text-sm">
              Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">¿Ofrecen envío gratis?</h3>
            <p className="text-gray-600 text-sm">
              Sí, ofrecemos envío gratis en compras superiores a $50.000 en todo Chile.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">¿Cómo puedo rastrear mi pedido?</h3>
            <p className="text-gray-600 text-sm">
              Una vez enviado tu pedido, recibirás un email con el número de seguimiento para rastrear tu envío.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
