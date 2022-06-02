import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top">
            <div className="container-fluid">
                <div className="navbar-brand" href="#"><h3>TrueCapp</h3></div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item rounded  nav-link">
                            <Link to='/TrueCapp' >Home</Link>
                        </li>
                        <li className="nav-item rounded  nav-link">
                            <Link to='/products'>Productos</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <CartWidget />
        </nav>
    )

}
export default NavBar;