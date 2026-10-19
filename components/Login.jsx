import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    window.alert("Login form submitted. Connect an authentication API to verify these details.");
  }

  return (
    <section className="min-h-[65vh] bg-pink-50 px-5 py-12">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-7 shadow-md sm:p-9">
        <div className="text-center text-4xl">🐾</div>
        <h1 className="mt-3 text-center text-3xl font-bold text-pink-700">Welcome Back</h1>
        <p className="mt-2 text-center text-stone-600">Log in to Paw Palace</p>
        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
          <label className="font-medium text-stone-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="mt-2 w-full rounded-lg border border-pink-200 p-3 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </label>
          <label className="font-medium text-stone-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              className="mt-2 w-full rounded-lg border border-pink-200 p-3 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </label>
          <button type="submit" className="rounded-lg bg-pink-600 p-3 font-semibold text-white transition hover:bg-pink-700">
            Login
          </button>
        </form>
        <p className="mt-4 text-xs leading-5 text-stone-500">
          Demo form only: connect your authentication backend to implement real login.
        </p>
      </div>
    </section>
  );
}
