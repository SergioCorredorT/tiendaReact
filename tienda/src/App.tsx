import React, { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
export function App() {
  const [products] = useState(initialProducts);
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filterProducts(filteredProducts)} />;
      <Footer filters={filters} />
    </>
  );
}
