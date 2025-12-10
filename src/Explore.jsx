function Explore() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Explore Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-8">
          This is a demo page for practice and future features
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="text-3xl font-bold mt-2">128</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-sm text-gray-500">Active Today</h3>
            <p className="text-3xl font-bold mt-2">34</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-sm text-gray-500">New Logins</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-lg font-semibold mb-2">Feature One</h2>
            <p className="text-sm text-gray-600 mb-4">
              This is a dummy feature description. Later you can connect API.
            </p>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-lg font-semibold mb-2">Feature Two</h2>
            <p className="text-sm text-gray-600 mb-4">
              Another demo card for UI practice.
            </p>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-lg font-semibold mb-2">Feature Three</h2>
            <p className="text-sm text-gray-600 mb-4">
              Use this section to show any content you want.
            </p>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
