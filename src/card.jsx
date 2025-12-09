import React from 'react';


const cardsData = [
  {
    id: 1,
    title: "Card One",
    description: "This is a short description for card one.",
    price: "$19",
    img: "https://via.placeholder.com/400x240?text=Image+1",
  },
  {
    id: 2,
    title: "Card Two",
    description: "This is a short description for card two.",
    price: "$29",
    img: "https://via.placeholder.com/400x240?text=Image+2",
  },
  {
    id: 3,
    title: "Card Three",
    description: "This is a short description for card three.",
    price: "$39",
    img: "https://via.placeholder.com/400x240?text=Image+3",
  },
  {
    id: 4,
    title: "Card Four",
    description: "This is a short description for card four.",
    price: "$49",
    img: "https://via.placeholder.com/400x240?text=Image+4",
  },
  {
    id: 5,
    title: "Card Five",
    description: "This is a short description for card five.",
    price: "$59",
    img: "https://via.placeholder.com/400x240?text=Image+5",
  },
  {
    id: 6,
    title: "Card Six",
    description: "This is a short description for card six.",
    price: "$69",
    img: "https://via.placeholder.com/400x240?text=Image+6",
  },
];





const card = () => {
    return (
      
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Products / Cards</h1>
          <p className="text-sm text-gray-600">A simple demo grid of cards</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <span className="text-sm font-bold text-[#1877f2]">{c.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{c.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <button className="px-3 py-1 rounded-md bg-[#1877f2] text-white text-sm hover:bg-[#166fe5]">
                    Buy now
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* optional footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Showing <span className="font-medium">{cardsData.length}</span> demo items
        </div>
      </div>
    </div>
    );
};

export default card;