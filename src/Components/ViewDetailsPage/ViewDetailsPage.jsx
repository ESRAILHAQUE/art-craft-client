import React from "react";
import { useLoaderData } from "react-router-dom";

function ViewDetailsPage() {
  const product = useLoaderData();
  const {
    _id,
    image,
    itemName,
    subCatagory,
    description,
    price,
    rating,
    time,
    stock,
    } = product;
     
  return (
    <div>
      {/* Render your component content here */}
      <h1>View Details Page</h1>
          <p>{itemName}</p>
          <p>{ price}</p>
    </div>
  );
}

export default ViewDetailsPage;
