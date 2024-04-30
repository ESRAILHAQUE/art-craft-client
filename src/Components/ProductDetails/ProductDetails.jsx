
import { IoStarHalf } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";

function ProductDetails() {
  const product = useLoaderData();
  console.log(product)
  

 

   return (
     <div className="mx-2 p-2">
       <h3 className="my-4 text-4xl text-center font-bold">Product Details</h3>
       <h3 className="text-center  text-2xl font-medium my-2">
         Product: {product.subCatagory}
       </h3>
       <img className="mb-2 mx-auto rounded-lg" src={product.image} alt="" />
       <p className="text-center">{product.item}</p>
       <div className="p-2">
         <div className="flex justify-between">
           <p className="text-base font-medium">
             Processing time: {product.time} day
           </p>
           <div className="flex gap-1 text-2xl items-center text-center">
             <span className="text-sm font-normal">
               Rating: {product.rating}
             </span>
             <IoStarHalf className="text-yellow-400" />
           </div>
         </div>
         <p className="text-base font-bold text-center">
           Price:{product.price}$
         </p>
         <p className="text-xl font-bold">
          {product.description}
         </p>
       </div>
     </div>
   );
}

export default ProductDetails;
