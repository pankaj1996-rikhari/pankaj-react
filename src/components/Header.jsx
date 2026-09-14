import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header sticky-top bg-white shadow-sm">
      <div className="container">
      <nav className="navbar navbar-expand-xl navbar-light container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="sitename m-0">
            <strong>Pankaj</strong>{" "}
            <span style={{ color: "var(--accent-color)", fontWeight: "bold" }}>
              Rikhari
            </span>
          </h1>
        </NavLink>

        {/* Hamburger / Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/service" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item d-flex gap-2 ms-xl-3 mt-2 mt-xl-0">
              <NavLink className="btn btn-secondary" to="/sign-up">
                Sign Up
              </NavLink>
              <NavLink className="btn btn-primary" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Header;
