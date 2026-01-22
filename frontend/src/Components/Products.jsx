import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
    let url = `${API_BASE_URL}/api/products`;
    if (category) {
      url += `?category=${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        console.log(`Fetched live ${category || "all"} products:`, data);
      })
      .catch((err) => {
        console.error("Error fetching from backend:", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <div className="p-10 text-center font-serif italic text-luxury-gold">Loading Collection...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {products.map((item) => (
        <ProductCard key={item._id} product={item} showDiscount={true} />
      ))}
    </div>
  );
};

export default Products;
