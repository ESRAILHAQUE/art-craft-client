import React, { useState, useEffect } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { IoStarHalf } from "react-icons/io5";
import Swal from "sweetalert2";

function ArtAndCraftList() {
  const [products, setProducts] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState("");
  const loadedProduct = useRouteLoaderData();
  const [loading,setLoading]=useState(loadedProduct)

  useEffect(() => {
    fetch("https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/craftItems")
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
  const handleDelete=_id=>{
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
      
        fetch(`https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/artAndCraftListPage/${_id}`, {
          method:'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              const remaining = loading.filter(cof => cof._id !== _id);
              setLoading(remaining)
            }
        })
      }
    });
  }

  return (
    <div>
      <select
        value={selectedCustomization}
        onChange={handleCustomizationChange}
      >
        <option value="">Filter By: All Customization </option>
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
              <Link to={`/updatePage/${product._id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
              
                <button onClick={()=>handleDelete(product._id)} className="btn btn-warning">Delete</button>
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtAndCraftList;
