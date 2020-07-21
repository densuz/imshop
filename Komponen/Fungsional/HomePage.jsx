import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
//import CardComp from './CardComp';
import { Link } from 'react-router-dom';
//import { CartContext } from '../../CartContex';
function HomePage() {
   
    return (
        <div className="background:transparent !important">
            <Container>
                <Jumbotron>
                    <h1 className="display-3">iWEB Shop </h1>
                    <p className="lead">Solusi Terbaik belanja Online dari rumah .</p>
                    <hr className="my-2" />
                    <p>Belanja Di iWeb Shop ,Biar Kami yang antar Pesanan Anda!</p>
                    <p className="lead">
                        <Button color="primary" className="fa fa-plus-circle">
                            <Link to ="/Product"className="text-light"> Belanja Sekarang!</Link></Button>
                    </p>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default HomePage;