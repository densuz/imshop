import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Link } from 'react-router-dom';
import { Container, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';


const api = "http://localhost:1997"

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            kode_barang: this.props.location.state.kode_barang,
            nama_barang: this.props.location.state.nama_barang,
            harga: this.props.location.state.harga,
            jumlah_barang: this.props.location.state.jumlah_barang,
            satuan: this.props.location.state.satuan,
           
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    ubahbarang = (id_barang) => {
        const data = qs.stringify({
            id_barang: id_barang,
            kode_barang: this.state.kode_barang,
            nama_barang: this.state.nama_barang,
            harga: this.state.harga,
            jumlah_barang: this.state.jumlah_barang,
            satuan: this.state.satuan,


        });
        axios.put(api + '/ubahbarang', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })
    }


    render() {
        return (
            <Container>
                <h4>Update Data barang</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label for="kode_barang">Kode barang</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="kode_barang" onChange={this.handleChange} value={this.state.kode_barang} placeholder="Masukan Kode barang" />
                            </Col>
                        </FormGroup>
                        <Label for="nama_barang">Nama</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nama_barang" onChange={this.handleChange} value={this.state.nama_barang} placeholder="Masukan Nama barang" />
                            </Col>
                        </FormGroup>
                        <Label for="harga">Jenis barang</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="harga" onChange={this.handleChange} value={this.state.harga} placeholder="Masukan Harga" />
                            </Col>
                        </FormGroup>
                        <Label for="jumlah_barang">Jumlah</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="jumlah_barang" onChange={this.handleChange} value={this.state.jumlah_barang} placeholder="Masukan jumlah barang" />
                            </Col>
                        </FormGroup>
                        <Label for="satuan">Satuan barang</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="satuan" onChange={this.handleChange} value={this.state.satuan} placeholder="Masukan satuan barang" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col>
                                <button type="button" onClick={()=>this.ubahbarang(this.state.id_barang)} className="btn btn-success">Update</button>
                            </Col>
                            <Col>
                                <Button color="danger">Reset</Button>{' '}
                            </Col>
                            <Col>
                                <Link to='/'><Button color="secondary">Kembali</Button></Link>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        );
    }
}

export default EditComp;