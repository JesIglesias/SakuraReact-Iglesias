import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container  ">
      <nav className="navbar  navbar-expand-lg bg-success bg-opacity-50 fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-semibold fs-4" to="/">
            Sakura
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  justify-content-evenly flex-grow-1 pe-3">
              <li>
                <Link className="nav-link fw-semibold" to="/category/remeras">
                  Remeras
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link fw-semibold"
                  to="/category/pantalones"
                >
                  Pantalones
                </Link>
              </li>
              <li>
                <Link className="nav-link fw-semibold" to="/category/vestidos">
                  Vestidos
                </Link>
              </li>
            </ul>
          </div>
          <li className="nav-link">
            <Link className="nav-link " to="/">
              <CartWidget />
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
