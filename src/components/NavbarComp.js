import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class NavbarComp extends Component {
  state = {
    bg: "transparent",
    variant: 'dark'
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      this.setState({ bg: "dark", variant:'dark'  });
    } else {
      this.setState({ bg: "transparent", variant:'dark' });
    }
  };

  componentDidMount(){
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    return (
      <Navbar bg={this.state.bg} variant={this.state.variant} expand="lg" fixed="top">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            Sir Roberth Inc
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/ServiciosPage" className="nav-link">
                Servicios
              </Link>
              <Link to="/ContactoPage" className="nav-link">
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComp;
