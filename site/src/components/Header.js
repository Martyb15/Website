import { useState } from "react";
import {
  Navbar, 
  NavbarBrand, 
  Container,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import ProjectLogo from "../app/assets/img/logo.png";
import { NavLink } from "react-router-dom";
import UserLoginForm from "../features/user/UserLoginForm";

// Add some custom CSS in your stylesheet (e.g., Header.css or index.css)
// comments style --- boxed / 'react-card' 
import '../Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <Navbar dark color="secondary" sticky="top" expand="md" className="navbar">
      <NavbarBrand href="/" className="ms-3 d-flex align-items-center">
        <img src={ProjectLogo} alt="Logo" className="logo-img" />
        <h1 className="ms-2 mb-0">Martin Barrios</h1>
      </NavbarBrand>

    <NavbarToggler navbar onClick={() => setMenuOpen(!menuOpen)} />
    <Collapse isOpen={menuOpen} navbar >
      <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/directory">
              <i className="fa fa-list fa-lg" /> Directory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
        </Nav>
        <UserLoginForm />
    </Collapse>
    </Navbar>
  );
};

export default Header;