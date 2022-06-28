import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {auth} from '../../services/firebase'
import {getAuth, signOut} from 'firebase/auth'

export const NavBar = () => {
  const SignOutUser = (e) => {
    //e.preventDefault()
   
  //  console.log('{auth.currentUser.email}')

    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-indigo-900">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link to='/'><h3>TrueCapp</h3></Link>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                categorias
              </a>
              
              <ul className="dropdown-menu dropdown-menu-dark mt-2" aria-labelledby="navbarDarkDropdownMenuLink">
                <ul className='submenu dropdown-menu'>Instrumentos Musicales
                <li><a className="dropdown-item" >Submenu item 1</a></li>
            <li><a className="dropdown-item" >Submenu item 2</a></li>
            </ul>
                <li>
                  <a className="submenu dropdown-menu" >Instrumentos Musicales</a>
                  <ul>
                    
                    </ul>
                    </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to='/category/controllers'>Controllers</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to='/category/synths'>Sintetizadores</Link>
                  </a>
                </li>
                <li><a className="dropdown-item">
                  <Link to='/category/shoes'>Shoes</Link>
                </a></li>
                <li><a className="dropdown-item" >Cars</a></li>

              </ul>

            </li>

          </ul>

        </div>

      </div>
      <div className='login_icon_wrapper'>
        <FontAwesomeIcon icon={faUserCircle} className="user_login_icon" />
       { auth ===true
         ? <Link to='/login'>Login</Link> 
         : <p onClick={SignOutUser}>SignOut</p>
       }

      {/* <p>{auth.currentUser.email}</p> */}
     {/* { auth.currentUser.email} */}
        
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;
