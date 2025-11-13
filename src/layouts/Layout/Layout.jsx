import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout({ products, carts, tab, setTab }) {
  return (
    <div>
      <Header />
      {/* ส่ง props ลง Navbar */}
      <Navbar products={products} carts={carts} tab={tab} setTab={setTab} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
