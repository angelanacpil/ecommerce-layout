import React, { useState } from 'react'

const CheckoutPage = () => {
  const dummyData = [
    {
      name: 'headphones',
      price: '20',
      quantity: '1',
      total: '20',
    },
    {
      name: 'mouse',
      price: '20',
      quantity: '2',
      total: '40',
    },
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <form className="space-y-4 p-4">
          <p className="font-bold">CUSTOMER INFORMATION</p>

          <div class="grid gap-6 mb-6 md:grid-cols-2 lg:px-6">
            {/* FIRST NAME */}
            <div className="col-span-2 md:col-span-1">
              <label
                for="first_name"
                class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>

              <input
                type="text"
                id="first_name"
                class="text-left p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>

            {/* LAST NAME */}
            <div className="col-span-2 md:col-span-1">
              <label
                for="last_name"
                class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            {/* POSTAL CODE */}
            <div className="col-span-2 md:col-span-1">
              <label
                for="postal_code"
                class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Postal Code
              </label>
              <input
                type="number"
                id="postal_code"
                class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            {/* CITY/PROVINCE */}
            <div className="col-span-2 md:col-span-1">
              <label
                for="city"
                class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                City/Province
              </label>
              <input
                type="text"
                id="city"
                class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            {/* CONTACT NUMBER */}
            <div className="col-span-2">
              <label
                for="contact_no"
                class="text-left block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
              >
                Contact Number
              </label>
              <input
                type="number"
                id="contact_no"
                class="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
        </form>

        <div className="bg-gray-200 rounded p-4 grid grid-rows-6">
          <p className="font-bold row-auto">ORDER SUMMARY</p>

          {/* Table */}
          {/* Table Theme */}
          <table className="my-6 row-span-3 ">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            {/* Map Data */}
            <tbody>
              {dummyData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>

          {/* TOTAL */}
          <div className="grid grid-cols-4 grid-rows-2 row-span-2">
            <div className="flex justify-center col-span-4 gap-10">
              <p>TOTAL</p>
              <p>10</p>
            </div>
            <button className="col-start-4 row-start-2 border-2">ORDER</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage
