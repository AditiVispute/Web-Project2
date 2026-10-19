import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

export default function Showuser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      // Backend returns { dataset: [...] }; support plain arrays too.
      const records = Array.isArray(data)
        ? data
        : Array.isArray(data.dataset)
          ? data.dataset
          : Array.isArray(data.users)
            ? data.users
            : [];
      setUsers(records);
    } catch (err) {
      console.error("Unable to fetch users:", err);
      setError(
        err.response
          ? `Could not load users (HTTP ${err.response.status}). Check the backend and MongoDB connection.`
          : "Could not connect to the Paw Palace API. Start the backend and MongoDB, then refresh."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function deleteUser(id) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setError("");
    setNotice("");
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotice("User deleted successfully.");
      await fetchUsers();
    } catch (err) {
      console.error("Unable to delete user:", err);
      setError(err.response?.data?.message || "Could not delete this user.");
    }
  }

  return (
    <section className="min-h-[65vh] bg-pink-50 px-5 py-12">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-md sm:p-9">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-pink-700">Show Users</h1>
            <p className="text-stone-600">User records saved in the Paw Palace database.</p>
          </div>
          <button onClick={fetchUsers} className="rounded-lg bg-pink-600 px-4 py-2 font-semibold text-white hover:bg-pink-700">
            Refresh
          </button>
        </div>

        {loading && <p className="py-6 text-stone-600">Loading users...</p>}
        {error && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">{error}</p>}
        {notice && <p role="status" className="mb-4 rounded-lg bg-green-50 p-4 text-green-800">{notice}</p>}

        {!loading && !error && (
          users.length === 0 ? (
            <p className="rounded-lg bg-pink-50 p-4 text-stone-700">No users found yet. Add a user to see records here.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-pink-100 text-stone-800">
                    <th className="border border-pink-200 p-3">ID</th>
                    <th className="border border-pink-200 p-3">Name</th>
                    <th className="border border-pink-200 p-3">Age</th>
                    <th className="border border-pink-200 p-3">Place</th>
                    <th className="border border-pink-200 p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id ?? user.id ?? index} className="odd:bg-white even:bg-pink-50/50">
                      <td className="border border-pink-100 p-3">{user._id ?? user.id ?? index + 1}</td>
                      <td className="border border-pink-100 p-3">{user.name ?? "—"}</td>
                      <td className="border border-pink-100 p-3">{user.age ?? "—"}</td>
                      <td className="border border-pink-100 p-3">{user.place ?? user.city ?? "—"}</td>
                      <td className="border border-pink-100 p-3">
                        <button onClick={() => deleteUser(user._id ?? user.id)} disabled={!(user._id ?? user.id)} className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </section>
  );
}
