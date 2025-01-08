import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Header.css';
const Header = ({ isAuthenticated }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 text-primary fw-bold" to="/">Fleuriste</Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-menu ${menuVisible ? 'visible' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/plus">Plus</Link>
            </li>
            {!isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/register">Sign Up</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/logout">Logout</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/panier">ajouter au Panier</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
