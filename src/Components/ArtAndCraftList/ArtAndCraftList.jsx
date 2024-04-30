import { Link } from "react-router-dom";
import { IoStarHalf } from "react-icons/io5";
function ArtAndCraftList({ product }) {
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
      <div className="card w-96  bg-base-100 mb-4 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-48 w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{itemName}</h2>
          <p>SubCatagory: {subCatagory}</p>
          <h1 className="flex gap-12">
            <span className="font-bold">Price: {price}$</span>
            <span>
              <span className="flex items-center gap-1 font-semibold">
                <IoStarHalf className="text-yellow-400" />
                {rating}
              </span>
            </span>
          </h1>
          <p>Stock: {stock}</p>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/productDetails/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <Link to={`/productDetails/${_id}`}>
              <button className="btn btn-warning">Delete</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArtAndCraftList;
