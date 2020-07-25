import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
//import CardComp from './CardComp';
import { NavLink} from 'react-router-dom';
function AboutComp() {

    return (
        <div>
            <Container>
                <Jumbotron>
                    <h1 className="display-3 text-secondary">About </h1>
                    <hr className="my-2" />
                    <label className="text-justify ">Hello, My name is Deni Susanto </label>
                    <p>this is an example of an uas project that I made.
                    Sorry, because it's not optimal yet.</p>
                    <p className="lead">
                        <Button color="primary" className="fa fa-envelope ">Hubungi
                        <NavLink to ="/Contact" ></NavLink>
                        </Button>
                    </p>
                </Jumbotron>
            </Container>

        </div>
    )
}

export default AboutComp