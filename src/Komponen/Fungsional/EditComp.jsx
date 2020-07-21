import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Link } from 'react-router-dom';
import { Container, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';


const api = "http://localhost:3001"

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: this.props.location.state.id_produk,
            kd_produk: this.props.location.state.kd_produk,
            nama_produk: this.props.location.state.nama_produk,
            jenis_produk: this.props.location.state.jenis_produk,
            jumlah: this.props.location.state.jumlah,
            harga: this.props.location.state.satuan,
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    ubahproduk = (id_produk) => {
        const data = qs.stringify({
            id_produk: id_produk,
            kd_produk: this.state.kd_produk,
            nama_produk: this.state.nama_produk,
            jenis_produk: this.state.jenis_produk,
            jumlah: this.state.jumlah,
            harga: this.state.harga,
            satuan: this.state.satuan,


        });
        axios.put(api + '/ubah', data)
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
                <h4>Update Data Produk</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label for="kd_produk">Kode Produk</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="kd_produk" onChange={this.handleChange} value={this.state.kd_produk} placeholder="Masukan Kode Produk" />
                            </Col>
                        </FormGroup>
                        <Label for="nama_produk">Nama</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nama_produk" onChange={this.handleChange} value={this.state.nama_produk} placeholder="Masukan Nama Produk" />
                            </Col>
                        </FormGroup>
                        <Label for="jenis_produk">Jenis Produk</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="jenis_produk" onChange={this.handleChange} value={this.state.jenis_produk} placeholder="Masukan Jenis Produk" />
                            </Col>
                        </FormGroup>
                        <Label for="jumlah">Jumlah</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="jumlah" onChange={this.handleChange} value={this.state.jumlah} placeholder="Masukan jumlah Produk" />
                            </Col>
                        </FormGroup>
                        <Label for="satuan">Satuan Produk</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="satuan" onChange={this.handleChange} value={this.state.satuan} placeholder="Masukan satuan Produk" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col>
                                <button type="button" onClick={()=>this.ubahproduk(this.state.id_produk)} className="btn btn-success">Update</button>
                            </Col>
                            <Col>
                                <Button color="danger">Reset</Button>{' '}
                            </Col>
                            <Col>
                                <Link to='/Product'><Button color="secondary">Kembali</Button></Link>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        );
    }
}

export default EditComp;