import React from "react";
import { useLoaderData } from "react-router-dom";
import ArtAndCraftList from "../ArtAndCraftList/ArtAndCraftList";


function ArtAndCraftListPage() {
  // Fetch data using the loader function
  const products = useLoaderData();

  return (
    <div>
      <h1>Art and Craft List</h1>
      {/* Render the list of products using ArtAndCraftList component */}
      {products.map((product) => (
        <ArtAndCraftList key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ArtAndCraftListPage;
