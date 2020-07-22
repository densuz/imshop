import React from 'react'
import { Label, Input, Button, Form, Container } from 'reactstrap'
import Axios from 'axios';

const api = 'http://localhost:1997'

class LoginComp extends React.Component {
        constructor(props) {
                super(props);
                this.handleEmailChange = this.handleEmailChange.bind(this);
                this.handlePasswordChange = this.handlePasswordChange.bind(this);
                this.state = {
                        email: '',
                        password: ''
                };
        }

        loginuser = () => {
                Axios.post(api + '/login', {
                        email: this.state.email,
                        password: this.state.password
                })
                        .then(json => {
                                if (json.data.status === 200) {
                                        console.log(json.data.status);
                                        // alert("Berhasil Login");
                                        this.setState({
                                                response: json.data.values,
                                                display: 'block'
                                        })
                                }
                                else {
                                        // alert('Login Gagal');
                                        debugger;
                                        this.props.history.push('/Login')
                                }
                        })
        }
        handleEmailChange(e) {
                this.setState({ email: e.target.value })
        }
        handlePasswordChange(e) {
                this.setState({ password: e.target.value })

        }

        signIn() {
                alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
        }
        render() {
                return (
                        <Container>
                                <Form className="Form-signin">
                                        <h2 className="Form-signin-heading"> Please sign in </h2>
                                        <Label for="Inputemail" className="sr-only"> Email address
                                         </Label>
                                        <Label for="Inputemail" className="sr-only">Email address</Label>
                                        <Input type="email" onChange={this.handleEmailChange} id="Inputemail" className="form-control" placeholder="Email address" required autofocus />
                                        <Label for="InputPassword" className="sr-only">Password</Label>
                                        <Input type="password" onChange={this.handlePasswordChange} id="InputPassword" className="form-control" placeholder="Password" required />
                                        <Button className="btn btn-lg btn-primary btn-block" onClick={this.loginuser} type="Button">Sign in</Button>
                                </Form>
                        </Container>
                )
        }
}

export default LoginComp;