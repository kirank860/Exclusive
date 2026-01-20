import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log("Fetched products:", data.products);
      })
      .catch((err) => console.error(err));
  }, []); // 👈 important

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
