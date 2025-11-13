import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ products, carts, tab, setTab }) {
  const colors = {
    home: "btn-success",
    calculator: "btn-warning",
    animation: "btn-danger",
    components: "btn-info",
    todos: "btn-secondary",
    products: "btn-primary",
    carts: "btn-dark",
  };

  const outlineColors = {
    home: "btn-outline-success",
    calculator: "btn-outline-warning",
    animation: "btn-outline-danger",
    components: "btn-outline-info",
    todos: "btn-outline-secondary",
    products: "btn-outline-primary",
    carts: "btn-outline-dark",
  };

  return (
    <div className="navbar-container d-flex gap-2">
      <Link to="/home">
        <button
          className={
            "btn " + (tab === "home" ? colors.home : outlineColors.home)
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>

      <Link to="/calculator">
        <button
          className={
            "btn " +
            (tab === "calculator"
              ? colors.calculator
              : outlineColors.calculator)
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>

      <Link to="/animation">
        <button
          className={
            "btn " +
            (tab === "animation" ? colors.animation : outlineColors.animation)
          }
          onClick={() => setTab("animation")}
        >
          Animation
        </button>
      </Link>

      <Link to="/components">
        <button
          className={
            "btn " +
            (tab === "components"
              ? colors.components
              : outlineColors.components)
          }
          onClick={() => setTab("components")}
        >
          Components
        </button>
      </Link>

      <Link to="/todos">
        <button
          className={
            "btn " + (tab === "todos" ? colors.todos : outlineColors.todos)
          }
          onClick={() => setTab("todos")}
        >
          Todos
        </button>
      </Link>

      <Link to="/products">
        <button
          className={
            "btn " +
            (tab === "products" ? colors.products : outlineColors.products)
          }
          onClick={() => setTab("products")}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to="/carts">
        <button
          className={
            "btn " + (tab === "carts" ? colors.carts : outlineColors.carts)
          }
          onClick={() => setTab("carts")}
        >
          Carts ({carts.length})
        </button>
      </Link>

     <Link to="/logout">
  <button className="btn btn-outline-danger">
    <i className="bi bi-box-arrow-right"></i> Logout
  </button>
</Link>



    </div>
  );
}

export default Navbar;
