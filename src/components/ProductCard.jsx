import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "./Icon";

export default function ProductCard({ product }) {
  const img = Array.isArray(product.images) && product.images.length ? product.images[0] : product.thumbnail || "";
  return (
    <article className="card flex flex-col space-y-3 hover-lift">
      <Link to={`/producto/${product.id}`} className="block rounded-xl overflow-hidden">
        <div className="w-full aspect-[4/3] bg-surface flex items-center justify-center">
          {img ? (
            <img src={img} alt={product.title} className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="text-muted p-8">Sin imagen</div>
          )}
        </div>
      </Link>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-sm text-muted mt-1 line-clamp-2">{product.description}</p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-sm text-muted">Categoria</div>
          <div className="font-medium">{product.category}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">${product.price}</div>
          <Link to={`/producto/${product.id}`} className="mt-2 inline-flex items-center space-x-2 btn-primary">
            <span>Ver</span>
            <CartIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
