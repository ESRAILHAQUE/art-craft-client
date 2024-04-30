import { useLoaderData } from "react-router-dom";

import CartItemCard from "../CartItemCard/CartItemCard";
function Home() {
  const product = useLoaderData();
    return (
      <>
        
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[80vh]">
              <img
                src="https://i.pinimg.com/originals/80/7a/26/807a26082ddb0362216bd7584b9aed2c.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[80vh]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9JyI5SRfbsuA2dlovE9EEGZ6Sz78_sHmY_yLNfUfmA&s"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[80vh]">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[80vh]">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* This is craft items */}
        <div className="text-center  space-y-6 mt-5 ">
          <h1 className="font-bold text-5xl">Our Products</h1>
          <p>
            Explore our diverse range of high-quality craft items, meticulously
            handcrafted to add charm and elegance to your home
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-4 mx-5">
          {product.map((product) => (
            <CartItemCard key={product._id} product={product}></CartItemCard>
          ))}
        </div>
      </>
    );
}
export default Home