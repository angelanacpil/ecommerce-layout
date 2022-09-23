import React, { useState } from 'react'

const ProductDetailsPage = () => {
  const imgSrc =
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  const imgSrc2 =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*'

  const imgSrc3 = 'https://html.com/wp-content/uploads/flamingo.webp'

  return (
    <>
      <div
        className="h-auto flex flex-col align-center justify-center items-center
      lg:items-start lg:flex-row py-2 gap-4 px-0 lg:px-10"
      >
        {/* Could use clamp for this */}
        <img
          src={imgSrc2}
          style={{ height: '26.5rem' }}
          className="object-cover border-2 border-gray-800
          w-full md:w-4/5 lg:w-3/5 xl:w-2/5"
        />
        <div
          className="flex flex-col gap-2 
          lg:justify-start lg:items-start text-left w-full md:w-4/5 lg:w-3/5 xl:w-2/5"
          style={{}}
        >
          <h1 className="text-xl font-bold">Title</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="pt-2 text-lg font-bold text-gray-800">P29.00</p>

          <hr className="w-full h-100 text-black"></hr>

          {/* Quantity Input */}
          {/* Decrement and increment components */}
          <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              data-action="decrement"
              class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>

            <input
              type="number"
              class="outline-none focus:outline-none text-center w-10 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value="0"
            ></input>

            <button
              data-action="increment"
              class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>

          <p className="text-gray-700 text-sm">Categories: Cute, Pupper</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage
