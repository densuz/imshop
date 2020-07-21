import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavbarText,Container,Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom'



const NavbarKomp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand to ="/"className="nav-link">imReact</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/About"className="nav-link">About</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink to="/Blog"className="nav-link">Blog</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/Produk"className="nav-link">Produk</NavLink>
                        </NavItem>                    
                        </Nav>
                    <NavbarText>
                        <Button color="primary">
                        <i className="fa fa-shopping-cart" ></i>
                        <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                    

                    <NavbarText>Login / Register </NavbarText>
                </Collapse>
            </Navbar>
            </Container>
        </div>
    )
}

export default NavbarKomp;