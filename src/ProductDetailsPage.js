import React, { useState } from "react";

const ProductDetailsPage = () => {
  const imgSrc =
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  const imgSrc2 =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*";

  return (
    <>
      <div className="flex flex-col md:flex-row py-2 gap-2">
        <img
          src={imgSrc}
          className="max-w-xs max-h-xs md:max-w-md md:max-h-md"
        />
        {/* height="200" width="200" */}

        <div className="flex items-center text-center md:flex-col md:text-left">
          <p>Title</p>
          <p>Title</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
