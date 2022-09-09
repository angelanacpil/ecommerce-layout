import React, { useState } from "react";

const ProductCard = () => {
  const dummyPic =
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  return (
    <>
      <div className="bg-white grid place-items-center">
        <a href="#">
          {/* Place Max width/height */}
          <img className="w-100 h-100" src={dummyPic} alt="" />
        </a>

        {/* Grid? */}
        <div className="flex justify-between content-between p-2 flex-wrap w-full gap-2">
          <p>Name</p>
          <p>Price</p>
          <button className="w-full text-right">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
