import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Rowproduct from './Rowproduct'

function ProductComp(){
    return (
        
            <Container>
               <br/>
                <h3> Produk Terlaris</h3>
                <hr/>
                <Row>
                    <Col><Rowproduct/> </Col>
                    <Col><Rowproduct/> </Col>
                   <Col> <Rowproduct/> </Col>
                  
                    
                </Row>
                <hr/>
                <h3> Gratis Ongkir</h3>
                <Row>
                   <Col> <Rowproduct/> </Col>
                   <Col> <Rowproduct/> </Col>
                   <Col> <Rowproduct/> </Col>
                   </Row>
                   
            </Container>


    )
}

export default ProductComp;