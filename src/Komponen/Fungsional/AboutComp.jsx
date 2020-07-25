import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
//import CardComp from './CardComp';
import { NavLink} from 'react-router-dom';
function AboutComp() {

    return (
        
        <Container>
            <br/>
            <div class="card text-left">
            <div class="card-header">PEMROGRAMAN WEBSITE</div>
        <div class="card-body">
          <h5 class="card-title">Nama: DENI SUSANTO</h5>
          <p class="card-text"></p>
          <Container fluid>
            <p className="lead">NIM: 201701019</p>
            <p className="lead">SISTEM INFORMASI : A</p>
            
            
          </Container>
        </div>

        </div>
        </Container>
    )
}

export default AboutComp