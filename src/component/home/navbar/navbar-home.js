import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../home/navbar/navbar-home.css"
import NAVBARBRAND from "../../../images/home/navbar-brand.png"

function NavbarHome(){
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" className="myNav">
          <Container>
            <div className="marginNav">
              <Navbar.Brand href="#" className="navBrand"><img src={NAVBARBRAND}/></Navbar.Brand>
            </div>
            <div className="marginNav">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <ul>
                    <li><a href="#">Bantuan</a></li>
                    <li> <a href="#">Tentang Kami</a></li>
                    <li> <a><Button href="/login">Masuk</Button></a></li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    )
}
export default NavbarHome;