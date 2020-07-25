import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Container,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../CartContex';
import { keranjangContext } from '../../App';



const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { value, setValue } = useContext(CartContext)

    const countContext = useContext(keranjangContext)

    return (
        <div>
            <Container>
                <Navbar color="light" light expand="md">
                    <NavbarBrand to="/" className="nav-link">imWebShop</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto color: #e3f2fd;" >
                            <NavItem>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/product" className="nav-link" >Produk</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact" className="nav-link fa fa-help">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>
                            <Button color="primary btn-md">
                                <NavLink to="/tagihan" className="fa fa-shopping-cart " ></NavLink>
                                <span className="badge badge-light">{value}</span>
                            </Button>
                        </NavbarText>
                        <span> | </span>
                        <NavbarText><a href="/Login" data-toggle="tooltip" title="Login Account">
                            <i class="fa fa-lock" aria-hidden="true">
                            </i>Login</a>
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavbarComp;