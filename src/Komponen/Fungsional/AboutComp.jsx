import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';

function AboutComp() {
    
    return (
        <div>
            <Container>
            <Jumbotron>
                <h1 className="display-3">About </h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            </Container>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Belajar WEB - ReactJs" tanggal="24/06/2020" /></Col>
                    <Col><CardComp id="2" judul="Belajar WEB - Golang" tanggal="25/06/2020" /></Col>
                    <Col><CardComp id="3" judul="Belajar -WEB - PHP" tanggal="26/06/2020" /></Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutComp