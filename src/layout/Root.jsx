import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <header className="dark:bg-black bg-red-100/30">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-299px)]">
        <section>
          {navigation.state === "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
