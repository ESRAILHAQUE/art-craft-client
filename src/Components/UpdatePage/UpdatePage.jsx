import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdatePage() {
  const product = useLoaderData();
  console.log(product)
  
  //   const {
  //     _id,
  //     image,
  //     itemName,
  //     subCatagory,
  //     description,
  //     price,
  //     rating,
  //     time,
  //     stock,
  // } = product;
 const handleUpdate = (event) => {
   event.preventDefault();
   const form = event.target;
   console.log(form.value)
   const updatedProduct = {
     image: form.image.value,
     itemName: form.itemName.value,
     subCatagory: form.subCatagory.value,
     description: form.description.value,
     price: form.price.value,
     rating: form.rating.value,
     time: form.time.value,
     stock: form.stock.value,
     customization: form.customization.value,
     
   };

   fetch(`https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/artAndCraftListPage/${product._id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(updatedProduct),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       if (data.modifiedCount > 0) {
         Swal.fire({
           title: "Congratulations!",
           text: "Product is updated successfully!",
           icon: "success",
         });
       } else {
         Swal.fire({
           title: "Error!",
           text: "Failed to update product.",
           icon: "error",
         });
       }
     })
     .catch((error) => {
       console.error("Error updating product:", error);
       Swal.fire({
         title: "Error!",
         text: "Failed to update product.",
         icon: "error",
       });
     });
 };

 
 return (
   <>
     
     <div>
       <div className="hero min-h-screen bg-base-200">
         <div className="hero-content">
           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <h2 className="text-center text-4xl mt-3 text-secondary px-2">
               Update Product
             </h2>
             <form onSubmit={handleUpdate} className="card-body">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Image</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Image URL"
                   className="input input-bordered"
                   defaultValue={product.image}
                   name="image"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Item Name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Item Name"
                   defaultValue={product.itemName}
                   className="input input-bordered"
                   
                   name="itemName"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">SubCatagory Name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="SubCatagory Name"
                   className="input input-bordered"
                   
                   defaultValue={product.subCatagory}
                   name="subCatagory"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Short Description</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Short Description"
                   className="input input-bordered"
                   
                   defaultValue={product.description}
                   name="description"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Price</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Price"
                   className="input input-bordered"
                   
                   defaultValue={product.price}
                   name="price"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Rating</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Rating"
                   className="input input-bordered"
                   
                   defaultValue={product.rating}
                   name="rating"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Customization</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Yes or No"
                   className="input input-bordered"
                   
                   defaultValue={product.customization}
                   name="customization"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Preocessing time</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Preocessing time"
                   className="input input-bordered"
                   
                   defaultValue={product.time}
                   name="time"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Stock Status</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Stock Status"
                   className="input input-bordered"
                   
                   defaultValue={product.stock}
                   name="stock"
                 />
               </div>

               <div className="form-control mt-6">
                 <button type="submit" className="btn btn-secondary">
                   Update
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </>
 );
}
export default UpdatePage