import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./tailwind.output.css";

function App() {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMenu = (evt) => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <>
      <div className="grid text-center grid-rows-[auto 1fr auto] h-screen gap-4">
        {/* NAV */}
        <nav
          className={`py-4 bg-sky-500 px-10 
        flex items-center gap-5 md:py-0 md:gap-16 ${
          mobileToggle && "flex-wrap"
        }`}
        >
          <div className="">
            <p>Logo</p>
          </div>

          {/* Mobile-only Icon */}
          <button onClick={handleMenu} className="ml-auto md:hidden">
            Menu
          </button>

          <div
            className={`md:flex text-left w-full
          ${mobileToggle ? "flex flex-col gap-3" : "hidden"}`}
          >
            {/* HIDDEN */}
            <ul className="md:flex gap-10">
              {/* TAILWIND THEME: li - py-2 */}
              <li className="py-2">
                <a href="#">Link</a>
              </li>
              <li className="py-2">
                <a href="#">Link</a>
              </li>
              <li className="py-2">
                <a href="#">Link</a>
              </li>
            </ul>

            {/* HIDDEN */}
            <ul className="md:ml-auto md:flex gap-10">
              <li className="py-2">
                <button>Cart</button>
              </li>
              <li className="py-2">
                <button>Search</button>
              </li>
            </ul>
          </div>
        </nav>

        {/* MAIN */}
        <main className="bg-orange-300 p-10 w-100 h-100">
          {/* Product List - Container of cards */}
          <div className="grid gap-10 h-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </main>

        <footer className="bg-slate-500 p-4">Footer</footer>
      </div>
    </>
  );
}

export default App;
