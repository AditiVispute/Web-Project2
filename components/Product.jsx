export default function Product({ name, price, path, description }) {
  return (
    <article className="overflow-hidden rounded-xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={path}
        alt={name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-stone-800">{name}</h3>
        {description && <p className="mt-1 text-sm text-stone-600">{description}</p>}
        <p className="mt-3 text-lg font-semibold text-pink-700">₹{price}</p>
        <button
          type="button"
          onClick={() => window.alert(`${name} selected!`)}
          className="mt-4 w-full rounded-lg bg-pink-600 px-4 py-2 font-semibold text-white transition hover:bg-pink-700"
        >
          View Product
        </button>
      </div>
    </article>
  );
}
