import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[65vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
