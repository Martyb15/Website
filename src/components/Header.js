import { Navbar, NavbarBrand, Container} from "reactstrap";
import ProjectLogo from "../app/assets/img/logo.png";


const Header = () => {
    return(
        <Navbar dark color="primary" sticky="top" expand="md" className="navbar">
        <Container>
            <NavbarBrand href="/">
              <img src={ProjectLogo} alt="Logo" className="logo-img"/>
            </NavbarBrand>
          </Container>
        </Navbar>
    );
};

export default Header; 