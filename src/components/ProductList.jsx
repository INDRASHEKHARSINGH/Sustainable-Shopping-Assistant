import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

// Dummy products
const products = [
  { id: 1, name: "Organic Apples", price: 120, category: "Groceries" },
  { id: 2, name: "Handmade Pot", price: 450, category: "Crafts" },
  { id: 3, name: "Eco T-shirt", price: 299, category: "Clothing" },
  { id: 4, name: "Natural Shampoo", price: 199, category: "Personal Care" },
  { id: 5, name: "Vegetables Pack", price: 99, category: "Groceries" },
  { id: 6, name: "Handwoven Bag", price: 699, category: "Crafts" },
  { id: 7, name: "Bamboo Brush", price: 80, category: "Personal Care" },
];

// Extract unique categories
const categories = ["All", ...new Set(products.map((p) => p.category))];

const ProductList = () => {
   const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Filter + Sort Logic
  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "price") return a.price - b.price;
      return 0;
    });

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Product List
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {/* Category Filter */}
        <select
          className="border p-2 rounded shadow"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort Filter */}
        <select
          className="border p-2 rounded shadow"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name (A–Z)</option>
          <option value="price">Price (Low → High)</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="text-green-700 font-medium mt-2">
                ₹{product.price}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;