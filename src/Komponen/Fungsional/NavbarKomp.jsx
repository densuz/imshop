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
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../CartContex';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand to ="/"className="nav-link">imWebShop</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Product"className="nav-link" >Produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/About"className="nav-link">About</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink to="/barang"className="nav-link">Barang</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact"className="nav-link">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Hooks"className="nav-link">Hooks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/blog"className="nav-link">Blog</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="primary">
                        <i className="fa fa-shopping-cart" ></i>
                        <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                    

                    <NavbarText><a href="/Login" data-toggle="tooltip" title="Login Account"><i class="fa fa-lock" aria-hidden="true"></i>Login</a></NavbarText>
                </Collapse>
            </Navbar>
            </Container>
        </div>
    )
}

export default NavbarComp;