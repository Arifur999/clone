import { useEffect, useState } from "react";

function VisitorLog() {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const res = await fetch("https://fb-server-one.vercel.app/api/logs");
      const data = await res.json();

      if (data.success) {
        setLogs(data.logs);
      } else {
        alert("Failed to load logs");
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center mb-6">Visitor Logs</h1>
        <p className="text-center text-gray-600 mb-6">
          All login attempts (email + IP + time)
        </p>

        {logs.length === 0 ? (
          <p className="text-center text-gray-500">No Logs Found</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">IP Address</th>
                <th className="p-3 border">Time</th>
              </tr>
            </thead>

            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-100">
                  <td className="p-3 border">{log.id}</td>
                  <td className="p-3 border">{log.email}</td>
                  <td className="p-3 border">{log.ip}</td>
                  <td className="p-3 border">
                    {new Date(log.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
}

export default VisitorLog;
