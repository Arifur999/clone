import { useEffect, useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://fb-server-one.vercel.app/api/users");
      const data = await res.json();

      if (data.success) {
        setUsers(data.users);
      } else {
        alert("Failed to fetch users");
      }
    } catch (err) {
      console.error(err);
      alert("server error");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      <div className="bg-gray-700 shadow rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Email</th>
              {/* <th className="p-3 border">Password</th> */}
              <th className="p-3 border">Created At</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="text-center bg-gray-800">
                  <td className="p-3 border">{user.id}</td>
                  <td className="p-3 border">{user.email}</td>
                  {/* <td className="p-3 border">{user.password}</td> */}
                  <td className="p-3 border">{user.created_at}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
