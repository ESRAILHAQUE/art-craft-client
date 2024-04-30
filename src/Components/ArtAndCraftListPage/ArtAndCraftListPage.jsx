import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoStarHalf } from "react-icons/io5";

function ArtAndCraftList() {
  const [products, setProducts] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/craftItems")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCustomizationChange = (event) => {
    setSelectedCustomization(event.target.value);
  };

  // Function to sort products based on customization
  const sortProducts = (a, b) => {
    if (a.customization === "Yes" && b.customization === "No") {
      return -1;
    }
    if (a.customization === "No" && b.customization === "Yes") {
      return 1;
    }
    return 0;
  };

  // Filtered and sorted products
  const filteredAndSortedProducts = products
    .filter((product) =>
      selectedCustomization
        ? product.customization === selectedCustomization
        : true
    )
    .sort(sortProducts);

  return (
    <div>
      <select
        value={selectedCustomization}
        onChange={handleCustomizationChange}
      >
        <option value="">Sort By: All Customization </option>
        <option value="Yes">Customized</option>
        <option value="No">Not Customized</option>
      </select>

      {/* Render filtered and sorted products */}
      {filteredAndSortedProducts.map((product) => (
        <div key={product._id} className="card w-96 bg-base-100 mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product.image}
              alt="Product"
              className="rounded-xl h-48 w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.itemName}</h2>
            
            <h1 className="flex gap-12">
              <span className="font-bold">Price: {product.price}$</span>
              <span>
                <span className="flex items-center gap-1 font-semibold">
                  <IoStarHalf className="text-yellow-400" />
                  {product.rating}
                </span>
              </span>
            </h1>
            <p>Customization: {product.customization}</p>
            <p>Stock: {product.stock}</p>
            <p>{product.description}</p>
            <div className="card-actions">
              <Link to={`/productDetails/${product._id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
              <Link to={`/productDetails/${product._id}`}>
                <button className="btn btn-warning">Delete</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtAndCraftList;
