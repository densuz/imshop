import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Jumbotron, Button, Container, Col } from 'reactstrap';
//import CardComp from './CardComp';
import { Link } from 'react-router-dom';
//import { CartContext } from '../../CartContex';
//import Produk from '../Class/Produk'


function HomePage() {
    
    return (
        <Container>
            <br/>
           
            <br />
            <Jumbotron>
                <h1 className="display-3 text-primary  text-center">iWEB Shop </h1>
                <p className="lead text-center">Solusi Terbaik belanja Online dari rumah .</p>
                <hr className="my-2" />
                <p className="text-center">Belanja Di iWeb Shop ,Biar Kami yang antar Pesanan Anda!</p>
                <p className="lead">
                <Button color="primary" className="fa fa-plus-circle">
                    <Link to="/Product" className="text-light"> Belanja Sekarang!</Link></Button>
                </p>
            </Jumbotron>
        </Container>

     

    )
}


export default HomePage;