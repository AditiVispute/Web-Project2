import { useRef, useState } from "react";
import axios from "axios";

export default function Adduser() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const placeRef = useRef(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function showValues() {
    console.log("Name:", nameRef.current?.value);
    console.log("Age:", ageRef.current?.value);
    console.log("Place:", placeRef.current?.value);
  }

  async function addUser(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setMessage("");
    setError("");

    const user = {
      name: nameRef.current.value.trim(),
      age: Number(ageRef.current.value),
      place: placeRef.current.value.trim(),
    };

    try {
      const response = await axios.post("http://localhost:3000/api/users", user);
      setMessage("User added successfully!");
      console.log("Server response:", response.data);
      form.reset();
    } catch (err) {
      console.error("Unable to add user:", err);
      setError("Could not add user. Check that the backend is running and /api/users is available.");
    }
  }

  return (
    <section className="min-h-[65vh] bg-pink-50 px-5 py-12">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-7 shadow-lg sm:p-9">
        <p className="text-center text-4xl">🐾</p>
        <h1 className="mt-2 text-center text-3xl font-bold text-pink-700">Paw Palace</h1>
        <h2 className="mt-2 text-center text-xl font-semibold text-stone-800">Add User</h2>

        <form onSubmit={addUser} className="mt-6 flex flex-col gap-4">
          <label className="font-medium text-stone-700">
            Name
            <input ref={nameRef} type="text" placeholder="Enter name" required className="mt-2 w-full rounded-lg border border-pink-200 p-3 outline-none focus:ring-2 focus:ring-pink-400" />
          </label>
          <label className="font-medium text-stone-700">
            Age
            <input ref={ageRef} type="number" min="1" placeholder="Enter age" required className="mt-2 w-full rounded-lg border border-pink-200 p-3 outline-none focus:ring-2 focus:ring-pink-400" />
          </label>
          <label className="font-medium text-stone-700">
            Place
            <input ref={placeRef} type="text" placeholder="Enter place" required className="mt-2 w-full rounded-lg border border-pink-200 p-3 outline-none focus:ring-2 focus:ring-pink-400" />
          </label>
          <button type="button" onClick={showValues} className="rounded-lg bg-stone-600 p-3 font-semibold text-white transition hover:bg-stone-700">
            Show Values in Console
          </button>
          <button type="submit" className="rounded-lg bg-pink-600 p-3 font-semibold text-white transition hover:bg-pink-700">
            Add User
          </button>
        </form>

        {message && <p role="status" className="mt-4 rounded-lg bg-green-50 p-3 text-green-800">{message}</p>}
        {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}
      </div>
    </section>
  );
}
