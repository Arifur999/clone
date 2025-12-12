import React from "react";
import { FaUsers, FaShoppingCart, FaChartLine, FaGlobe } from "react-icons/fa";

export default function StatsOverview() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center mb-8">
          Overview & Analytics
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FaUsers className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-lg font-semibold">Total Users</h2>
                <p className="text-gray-600 text-sm">1,248 Registered</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FaShoppingCart className="text-green-600 text-4xl" />
              <div>
                <h2 className="text-lg font-semibold">Products</h2>
                <p className="text-gray-600 text-sm">312 Items</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FaChartLine className="text-purple-600 text-4xl" />
              <div>
                <h2 className="text-lg font-semibold">Daily Visits</h2>
                <p className="text-gray-600 text-sm">2,395 Visitors</p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FaGlobe className="text-red-600 text-4xl" />
              <div>
                <h2 className="text-lg font-semibold">Countries</h2>
                <p className="text-gray-600 text-sm">26 Regions</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
