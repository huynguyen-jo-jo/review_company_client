import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function navBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">LOGO Group 8</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Trang chủ</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Đăng xuất</Nav.Link>
              <NavDropdown title="Chào bạn" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Thông tin cá nhân
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
