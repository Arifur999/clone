function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New Login Detected",
      message: "A user just logged in from a new device.",
      time: "2 minutes ago",
      type: "info",
    },
    {
      id: 2,
      title: "New Product Added",
      message: "A new product has been added to the database.",
      time: "10 minutes ago",
      type: "success",
    },
    {
      id: 3,
      title: "High Traffic Alert",
      message: "Your site is receiving unusually high traffic.",
      time: "1 hour ago",
      type: "warning",
    },
    {
      id: 4,
      title: "System Update",
      message: "Backend server was restarted successfully.",
      time: "Yesterday",
      type: "info",
    },
  ];

  const badgeColor = (type) => {
    if (type === "success") return "bg-green-100 text-green-700";
    if (type === "warning") return "bg-yellow-100 text-yellow-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        
        <h1 className="text-3xl font-bold mb-2">Notifications</h1>
        <p className="text-gray-500 mb-6">
          Recent activities and system messages
        </p>

        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(
                  n.type
                )}`}
              >
                {n.type.toUpperCase()}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-sm text-gray-600">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Notifications;
