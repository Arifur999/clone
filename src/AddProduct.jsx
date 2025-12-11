import { useState } from "react";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Title and Price are required");
      return;
    }

    try {
      const res = await fetch("https://fb-server-one.vercel.app/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, price, image }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Product added successfully!");
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
      } else {
        alert("Failed: " + data.message);
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-5">Add New Product</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Title"
            className="w-full border px-4 py-2 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border px-4 py-2 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border px-4 py-2 rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border px-4 py-2 rounded-lg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
