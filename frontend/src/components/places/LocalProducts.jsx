// src/components/destinations/LocalProducts.jsx

import { ShoppingBag } from "lucide-react";

export default function LocalProducts({ products }) {
  return (
    <section>
      <div className="mb-8">
        <span className="text-sm font-bold uppercase tracking-widest text-[#285B48]">
          Artisanat & terroir
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[#1c2922]">
          Produits locaux
        </h2>
        <p className="mt-3 text-[#66736B]">
          Découvrez les produits et le savoir-faire de la région.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-3xl border border-[#285B48]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#285B48]/10 text-[#285B48]">
                <ShoppingBag size={19} />
              </div>

              <h3 className="text-xl font-bold text-[#1c2922]">
                {product.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#66736B]">
                {product.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}