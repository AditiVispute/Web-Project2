import Product from "./Product";

const categories = ["Dog Food", "Cat Food", "Bird Food", "Fish Food", "Pet Toys", "Pet Accessories", "Pet Grooming"];

const products = [
  {
    id: 1,
    name: "Pedigree Dog Food",
    price: 799,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=700",
    description: "Daily food for your furry friend.",
  },
  {
    id: 2,
    name: "Cat Food",
    price: 499,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=700",
    description: "A tasty meal for happy cats.",
  },
  {
    id: 3,
    name: "Dog Chew Toy",
    price: 299,
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=700",
    description: "Playtime made more fun.",
  },
  {
    id: 4,
    name: "Pet Grooming Brush",
    price: 249,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700",
    description: "Help keep your pet's coat neat.",
  },
  {
    id: 5,
    name: "Pet Food Bowl",
    price: 199,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700",
    description: "A useful everyday feeding bowl.",
  },
  {
    id: 6,
    name: "Pet Carrier",
    price: 999,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700",
    description: "For comfortable trips together.",
  },
  {
    id: 7,
    name: "Bird Food",
    price: 199,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=700",
    description: "Food for your feathered friend.",
  },
  {
    id: 8,
    name: "Fish Aquarium",
    price: 1499,
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=700",
    description: "Bring a little underwater life home.",
  },
];

export default function Home() {
  return (
    <div id="home" className="bg-pink-50/70">
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-pink-700">Welcome to Paw Palace</p>
          <h1 className="text-4xl font-extrabold leading-tight text-stone-800 sm:text-5xl">
            Happy pets, <span className="text-pink-700">happy homes.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
            Find food, toys, grooming essentials, and everyday favourites for the pets you love.
          </p>
          <a href="#products" className="mt-6 inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700">
            Explore Products
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000"
            alt="A dog and cat together"
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-5">
        <h2 className="text-center text-2xl font-bold text-pink-700">Shop by Category</h2>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <a key={category} href="#products" className="rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-pink-500 hover:bg-pink-100">
              {category}
            </a>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-7 text-center">
          <p className="font-semibold uppercase tracking-widest text-pink-600">Our collection</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-800">Pet Essentials</h2>
          <p className="mt-2 text-stone-600">Little things that make your pet's day better.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              path={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 pb-12">
        <div className="rounded-2xl bg-white p-7 text-center shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-pink-700">A little more love for every pet</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-stone-600">
            Paw Palace brings together pet essentials to help make caring for your companion easier and more joyful.
          </p>
        </div>
      </section>
    </div>
  );
}
