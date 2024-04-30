import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { _id } = useParams(); // Get the id parameter from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id
    fetch(`http://localhost:3000/productDetails/${_id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.itemName}</h1>
      <p>SubCategory: {product.subCatagory}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Description: {product.description}</p>
      {/* Add more details here */}
    </div>
  );
}

export default ProductDetails;
