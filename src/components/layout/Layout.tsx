import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
