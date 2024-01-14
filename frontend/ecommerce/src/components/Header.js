import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">Ecommerce Cart </Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="navbar-link active">Home <i className="fa-solid fa-house"></i></Nav.Link>
                </LinkContainer>
               
              </li>
              <li className="nav-item">
                <LinkContainer to="/cart">
                <Nav.Link className="nav-link">
                  Cart
                </Nav.Link>
                </LinkContainer>
              </li>

              <li className="nav-item dropdown">
              <LinkContainer to="/signup">
                <Nav.Link  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
              
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  New User?
                </Nav.Link>
                </LinkContainer>
                <div className="dropdown-menu">
                <LinkContainer to="/login">
                  <Nav.Link  className="dropdown-item" href="#">
                    Login
                  </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                  <Nav.Link  className="dropdown-item" href="#">
                    Signup
                  </Nav.Link>
                  </LinkContainer>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
