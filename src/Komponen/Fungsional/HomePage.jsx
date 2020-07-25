import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Jumbotron, Button, Container, Col } from 'reactstrap';
//import CardComp from './CardComp';
import { Link } from 'react-router-dom';
//import { CartContext } from '../../CartContex';
import Produk from '../Class/Produk'



function HomePage() {
    return (

     
        <Container>
            <br/>
           
            <br />
            <Jumbotron>
                <h1 className="display-3 text-primary ">iWEB Shop </h1>
                <p className="lead">Solusi Terbaik belanja Online dari rumah .</p>
                <hr className="my-2" />
                <p>Belanja Di iWeb Shop ,Biar Kami yang antar Pesanan Anda!</p>
                <p className="lead">
                    <Button color="primary" className="fa fa-plus-circle">
                        <Link to="/Product" className="text-light"> Belanja Sekarang!</Link></Button>
                </p>
            
            </Jumbotron>
           
           
                    <Container>
                        <Col>
                            <Produk nama="Realme Narzo" Harga="2.900.0000" stock="1" />
                            <Produk nama="Realme 5 Pro" Harga="3.700.0000" stock="8" />
                            <Produk nama="Razer Headset" Harga="7.900.0000" stock="10" />
                            <Produk nama="Laptop Toshiba" Harga="8.900.0000" stock="17" />
                            <Produk nama="Monitor SAMSUNG" Harga="3.700.0000" stock="13" />
                            <Produk nama="Mouse Razer " Harga="1.900.0000" stock="10" />
                        </Col>
                    </Container>

        </Container>

     

    )
}


export default HomePage;