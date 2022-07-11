import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../services/firebase'
import { getAuth, signOut } from 'firebase/auth'
import { LoginUsers } from "../Login/Login";


export const NavBar = () => {
  const [actUser, setactUser] = useState('')
  const logout = ()=>{
    signOut(auth);
    
  }
  
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
       // console.log("Estas Logueado con: ", firebaseUser);
        setactUser(firebaseUser.email)
    });
  },[]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gray-900">
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

                <li>
                  <a className="dropdown-item">
                    <Link to='/category/controllers'>Controllers</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link to='/category/phones'>Celulares</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link to='/category/tablets'>Tablets</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link to='/category/synths'>Sintetizadores</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link to='/category/shoes'>Shoes</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >Cars</a>
                </li>

              </ul>

            </li>

          </ul>

        </div>

      </div>
      <div className='login_icon_wrapper'>
        <FontAwesomeIcon icon={faUserCircle} className="user_login_icon" />
        { actUser ?
        <div className="float-start"><p>{actUser}</p>
        <p onClick={()=> (logout(), setactUser(!actUser))}>logout</p>
        </div>
        
        : 
        <Link to='/login'><p>Login</p></Link>}
            
           

      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;
