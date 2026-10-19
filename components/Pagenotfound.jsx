import { Link } from "react-router-dom";

export default function Pagenotfound() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center bg-pink-50 px-5 text-center">
      <p className="text-6xl">🐾</p>
      <h1 className="mt-4 text-4xl font-bold text-pink-700">404 - Page Not Found</h1>
      <p className="mt-3 text-stone-600">Sorry, we couldn't find that page.</p>
      <Link to="/" className="mt-6 rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700">
        Back to Home
      </Link>
    </section>
  );
}
