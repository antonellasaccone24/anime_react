import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap"; 
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom"; 
import './estilos/Menu.css'; 

export default class Menu extends React.Component {
    render() {
        return (
             <>
                <Navbar collapseOnSelect expand="sm" className="text-uppercase mainMenu navbar-dark">
                    <h1 className="navbar-brand" id="logo">
                        <img src="img/logo.svg" alt="Anime React Logo" />
                        <span>AnimeReact</span>
                    </h1>
                    <Navbar.Toggle aria-controls="navScroll" data-bs-target="#navbarScroll" />
                    <NavbarCollapse id="navbarScroll">
                        <Nav>
                            <NavLink eventKey="1" as={Link} to="/">Inicio</NavLink>
                            <NavLink eventKey="2" as={Link} to="/series">Series</NavLink>
                            <NavLink eventKey="3" as={Link} to="/quotes">Quotes</NavLink>
                            <NavLink eventKey="4" as={Link} to="/newsletter">Newsletter</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Navbar>
             </>
        );
    }
}