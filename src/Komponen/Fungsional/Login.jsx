import React, { PureComponent } from "react";
import axios from 'axios';
import { Container } from 'reactstrap';
import '../Fungsional/CSS/style.css';
import { Button, Input, Label, Alert, Form, FormGroup, Col  } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Register from "./Register";
//import Dashboard from "./Dashboard"

const api = 'http://localhost:1997'


export class Login extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            response: '',
            display: 'none',
            
        }
    }



    loginuser = () => {
        axios.post(api + '/auth/api/v1/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    // alert("Login Berhasil !");
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
                    // alert('FAILED! Username atau Password anda Salah');
                    debugger;
                    this.props.history.push('/Dashboard')
                }
            })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };




    render() {
        return (
            <Container>
                <br />
                <div class="container login-form">
                    <div className="row justify-content-center">
                        <div className="col-md-5">

                            <h2 class="text-center">Login Sistem</h2>
                            <br />
                            <Alert color="success" style={{ display: this.state.display }}>
                                {this.state.response}
                            </Alert>
                            <Form className="form" onSubmit={this.handleSubmit}>
                                <Col>
                                    <b><Label for="email">Email</Label></b>
                                    <FormGroup row>
                                        <Col>
                                            <Input type="text" name="email" id="validationDefaultemail" onChange={this.handleChange} value={this.state.email} placeholder="Masukan email" required />
                                        </Col>
                                    </FormGroup>

                                    <b><Label for="password">Password</Label></b>
                                    <FormGroup row>
                                        <Col>
                                            <Input type="text" name="password" id="validationDefaultpassword" onChange={this.handleChange} value={this.state.password} placeholder="Masukan password" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <div class="form-check">
                                    <Input type="checkbox" className="form-check-Input" id="Check1" />
                                    <Label className="form-check-Label" for="Check1">Check me out</Label>
                                </div>
                                <Button type="Button" onClick={this.loginuser} className="btn btn-success">Submit</Button>
                                <Alert color="success" style={{ display: this.state.display }}>
                                    {this.state.response}
                                </Alert>
                            </Form>
                            <br/>
                            <Label>Belum Memiliki akun?
                                 <Link to="/Register">  Register</Link>
                                    </Label>
                            <br />
                            <div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            
        );
    }
}

export default Login;