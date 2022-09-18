import React, { useState } from "react";

const ProductDetailsPage = () => {
  const imgSrc =
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  const imgSrc2 =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*";

  const imgSrc3 = "https://html.com/wp-content/uploads/flamingo.webp";

  return (
    <>
      <div
        className="h-auto w-100 flex flex-col align-center justify-center items-center
      md:items-start md:flex-row py-2 gap-5"
      >
        {/* Could use clamp for this */}
        <img
          src={imgSrc3}
          className="object-cover flex-1 basis-1/2 h-64 w-52"
        />
        {/* h-48 w-48 max-h-auto max-w-auto */}
        {/* height="200" width="200" */}
        {/*  max-h-64 max-w-64 */}
        {/* min-w-100 min-h-100  */}
        {/* min-h-[200px] min-w-[200px] */}
        {/* md:min-w-[10rem] md:min-h-[10rem] md:max-w-sm md:max-h-sm lg:max-w-md lg:max-h-md grow */}

        <div
          className="flex flex-col w-100 h-100 items-center justify-center gap-2 text-center basis-1/4
          md:justify-start md:items-start md:text-left shrink "
        >
          <p>Title</p>
          {/* could use clamp for this */}
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="pt-2">Price</p>

          <p>Quantity</p>
          <p>Categories</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
