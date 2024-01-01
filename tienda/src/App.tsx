import React, { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cartContext";
export function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(filteredProducts)} />;
      <Footer />
    </CartProvider>
  );
}
