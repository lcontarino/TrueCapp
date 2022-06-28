import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bd-navbar">
            <div className="container-fluid">
                <div className="navbar-brand" href="#"><h3>TrueCapp</h3></div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                categorias
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">
                                    <Link to='/category/controllers'>Controllers</Link>
                                </a></li>
                                <li><a class="dropdown-item" href="#">
                                <Link to='/category/shoes'>Shoes</Link>
                                </a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item rounded  nav-link">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav-item rounded  nav-link">
                            <Link to='/category/controllers'>Controllers</Link>
                        </li>
                        <li className="nav-item rounded  nav-link">
                            <Link to='/category/shoes'>Shoes</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <li className="nav-item rounded nav-link">
                <Link to='/login'>ingresa</Link>
            </li>
            <li className="nav-item rounded nav-link">
                <Link to='/register'>registrate</Link>
            </li>
            <CartWidget />
        </nav>
    )

}
export default NavBar;