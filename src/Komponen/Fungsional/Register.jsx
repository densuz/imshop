import React, { PureComponent } from "react";
import axios from 'axios';
import { Container, Alert, Input, Button, FormGroup, Col, Label, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

const api = 'http://localhost:1997'

export class Register extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nama: '',
            username: '',
            email: '',
            password: '',
            nohp: '',
            alamat: '',
            response: '',
            display: 'none'
        }


    }

    Adduser = () => {
        axios.post(api + '/auth/api/v1/register', {
            nama_user: this.state.nama_user,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            nohp: this.state.nohp,
            alamat: this.state.alamat
        })
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    // alert("Berhasil Mendaftar!");
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
                    // alert('Maaf,Gagal Mendaftar!');
                    debugger;
                    this.props.history.push('/Register')
                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <div class="container register-form">
                    <div class="form">
                        <div className="col-sm-6">
                            <div class="note">
                                <hr />
                                <p>Formulir Pendaftaran</p>
                            </div>

                            <Form className="form">
                                <Col>

                                    <b><Label for="nama_user">Nama</Label></b>
                                    <FormGroup row>

                                        <Col>
                                            <Input type="text" name="nama_user" id="validationDefaultnama_user" onChange={this.handleChange} value={this.state.nama_user} placeholder="Masukan Nama Lengkap" required />
                                        </Col>
                                    </FormGroup>
                                    <b><Label for="username">Username</Label></b>
                                    <FormGroup row>

                                        <Col>
                                            <Input type="text" name="username" id="validationDefaultusername" onChange={this.handleChange} value={this.state.username} placeholder="Masukan Username" required />
                                        </Col>

                                    </FormGroup>

                                    <b><Label for="email">Email</Label></b>
                                    <FormGroup row>

                                        <Col>
                                            <Input type="text" name="email" id="validationDefaultemail" onChange={this.handleChange} value={this.state.email} placeholder="Masukan  Email" required />
                                        </Col>

                                    </FormGroup>

                                    <b><Label for="password">Password</Label></b>
                                    <FormGroup row>

                                        <Col>
                                            <Input type="text" name="password" id="validationDefaultpassword" onChange={this.handleChange} value={this.state.password} placeholder="Masukan password" required />
                                        </Col>

                                    </FormGroup>
                                    <b><Label for="nama">No.Hp</Label></b>
                                    <FormGroup row>

                                        <Col>
                                            <Input type="text" name="nohp" id="validationDefaultnohp" onChange={this.handleChange} value={this.state.nohp} placeholder="Masukan No.hp Anda" required />
                                        </Col>

                                    </FormGroup>

                                    <b><Label for="alamat">Alamat</Label></b>
                                    <FormGroup row>

                                        <Col>
                                            <Input type="text" name="alamat" id="validationDefaultalamat" onChange={this.handleChange} value={this.state.alamat} placeholder="Masukan Alamat Sesuai KTP" required />
                                        </Col>

                                    </FormGroup>

                                </Col>

                                <Col>
                                    <FormGroup row>
                                        <span>
                                            <Col>
                                                <button type="button" onClick={this.Adduser} className="btn btn-success">Submit</button>
                                                <br />
                                                <Alert color="success" style={{ display: this.state.display }}>
                                                    {this.state.response}
                                                    <Link to='/Login'><Button color="secondary">Login</Button></Link>
                                                </Alert>
                                            </Col>
                                        </span>
                                        <Col>
                                            <Button color="danger">Reset</Button>{' '}
                                        </Col>
                                        <Col>
                                            <Link to='/mahasiswa'><Button color="secondary">Kembali</Button></Link>
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Label>Sudah Punya akun?
                                 <Link to="/login">  Masuk</Link>
                                    </Label>
                                    

                            </Form>
                        </div>
                    </div>
                </div>

            </Container>
        );
    }
}

export default Register;
