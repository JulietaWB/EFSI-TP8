# 🛍️ Fashuta - eCommerce Demo

Una aplicación de eCommerce moderna construida con React, Vite y TailwindCSS que consume la API de DummyJSON para mostrar productos y categorías.

## ✨ Características

- 🏠 **Home Page** con productos destacados
- 📦 **Catálogo de Productos** con paginación
- 🏷️ **Filtrado por Categorías** dinámico
- 🖼️ **Detalle de Productos** con carrusel de imágenes
- 📞 **Página de Contacto** con formulario funcional
- 📱 **Diseño Responsive** para todos los dispositivos
- ⚡ **Navegación SPA** con React Router v6
- 🎨 **UI Moderna** con TailwindCSS

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### 1. Clonar el Repositorio
```bash
git clone https://github.com/[usuario]/fashuta-ecommerce.git
cd fashuta-ecommerce
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Ejecutar en Modo Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### 4. Comandos Adicionales

```bash
# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Linting (opcional)
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Navegación principal
│   ├── Footer.jsx      # Pie de página
│   ├── ProductCard.jsx # Tarjeta de producto
│   └── Loader.jsx      # Componente de carga
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal
│   ├── Productos.jsx   # Catálogo de productos
│   ├── ProductoDetalle.jsx # Detalle de producto
│   ├── QuienesSomos.jsx # Página "Quiénes Somos"
│   └── Contacto.jsx    # Página de contacto
├── layouts/            # Layouts
│   └── MainLayout.jsx  # Layout principal
├── api/                # Configuración de API
│   └── api.js          # Configuración de Axios
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🛣️ Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con productos destacados |
| `/quienes` | Información sobre la empresa |
| `/productos` | Catálogo completo de productos |
| `/productos/categoria/:idCategoria` | Productos filtrados por categoría |
| `/producto/:idProducto` | Detalle completo del producto |
| `/contacto` | Formulario de contacto |
| `*` | Página 404 para rutas no encontradas |

## 🎨 Paleta de Colores

- **Primary**: `#6b0f1a` (Bordó)
- **Emerald**: `#046c4e` (Verde esmeralda)
- **Ocre**: `#c07b1a` (Naranja ocre)

## 🔧 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router v6** - Navegación SPA
- **TailwindCSS** - Framework de CSS
- **Axios** - Cliente HTTP
- **DummyJSON API** - API de productos

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 **Mobile**: < 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: > 1024px

## 🧪 Testing

### Verificar Funcionalidades:
1. **Navegación**: Probar todas las rutas
2. **Dropdown de Categorías**: Hacer clic en "Productos" en el navbar
3. **Filtrado**: Seleccionar una categoría del dropdown
4. **Paginación**: Navegar entre páginas de productos
5. **Carrusel**: Ver imágenes en detalle de producto
6. **Formulario**: Probar envío en página de contacto
7. **Responsive**: Cambiar tamaño de ventana

### Comandos de Verificación:
```bash
# Verificar que no hay errores de linting
npm run lint

# Verificar build de producción
npm run build

# Verificar que el servidor arranca
npm run dev
```

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"
```bash
# Cambiar puerto en vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  # Cambiar a otro puerto
  }
});
```

### Error: "API not responding"
- Verificar conexión a internet
- La API de DummyJSON puede tener latencia
- Usar botón "Reintentar" en la aplicación

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Productos
![Productos](screenshots/productos.png)

### Detalle de Producto
![Detalle](screenshots/detalle.png)

### Responsive Mobile
![Mobile](screenshots/mobile.png)

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: [Fashuta eCommerce](https://github.com/[usuario]/fashuta-ecommerce)
- **Email**: contacto@fashuta.cl

---

**Desarrollado con ❤️ usando React + Vite + TailwindCSS**
