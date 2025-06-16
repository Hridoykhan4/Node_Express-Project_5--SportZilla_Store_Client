import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <header className="dark:bg-black bg-red-100/30">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-299px)]">
        <section>
          <Outlet></Outlet>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
