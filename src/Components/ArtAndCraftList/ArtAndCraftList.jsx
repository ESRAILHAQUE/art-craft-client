import React, { useState, useEffect } from "react";
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

  const filteredProducts = selectedCustomization
    ? products.filter(
        (product) => product.customization === selectedCustomization
      )
    : products;

  const handleDelete = (_id) => {
    console.log(_id);
    // Perform delete operation with _id
  };

  return (
    <div>
      <select
        value={selectedCustomization}
        onChange={handleCustomizationChange}
      >
        <option value="">All Customizations</option>
        <option value="Customized">Customized</option>
        <option value="Not Customized">Not Customized</option>
      </select>

      {filteredProducts.map((product) => (
        <div key={product._id} className="card w-96 bg-base-100 mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product.image}
              alt="Shoes"
              className="rounded-xl h-48 w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.itemName}</h2>
            <p>SubCatagory: {subCatagory}</p>

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
              <button className="btn btn-primary">Update</button>

              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-warning"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtAndCraftList;
