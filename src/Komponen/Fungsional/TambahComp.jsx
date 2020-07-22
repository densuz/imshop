import React, { PureComponent } from 'react'
import { Container, Col, Form, Alert, FormGroup, Label, Input, Button, } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

//import Blog from './Blog'


const api = 'http://localhost:1997'


class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            kode_barang: '',
            nama_barang: '',
            harga: '',
            jumlah_barang: '',
            satuan: '',
            response: '',
            display: 'none'
        }
    }
    
    tambahbarang = () => {
        axios.post(api + '/tambahbarang', {
            kode_barang: this.state.kode_barang,
            nama_barang: this.state.nama_barang,
            harga: this.state.harga,
            jumlah_barang: this.state.jumlah_barang,
            satuan: this.state.satuan
        })
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    // alert("barang telah ditambahkan");
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
                    // alert('barang gagal tersimpan');
                    debugger;
                    this.props.history.push('/tambahbarang')
                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <Container>
            <br/>
                <Col>
                    <Link to='/listbarang'><Button color="secondary" className="fa fa-arrow-left"></Button></Link>
                </Col>
                <br />
                <b><h4 class='text-center' >Tambah Data Barang</h4></b>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <div class="tengah">
                    <Form className="form">
                        <Col>
                            <b><Label for="kode_barang">Kode Barang</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="kode_barang" id="validationDefaultkode_barang" onChange={this.handleChange} value={this.state.kode_barang} placeholder="Masukan Kode barang" required />
                                </Col>
                            </FormGroup>
                            <b><Label for="nama_barang">Nama Barang</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="nama_barang" id="validationDefaultnama_barang" onChange={this.handleChange} value={this.state.nama_barang} placeholder="Nama Barang" required />
                                </Col>
                            </FormGroup>
                            <b><Label for="harga">Harga</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="harga" id="validationDefaultharga" onChange={this.handleChange} value={this.state.harga} placeholder="Rp. " required />
                                </Col>
                            </FormGroup>
                            <b><Label for="jumlah_barang">Jumlah Barang</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="jumlah_barang" id="validationDefaultjumlah_barang" onChange={this.handleChange} value={this.state.jumlah_barang} placeholder="Jumlah Barang" required />
                                </Col>
                            </FormGroup>
                            <b><Label for="satuan">Satuan</Label></b>
                            <FormGroup row>
                                <Col>
                                    <Input type="text" name="satuan" id="validationDefaultsatuan" onChange={this.handleChange} value={this.state.satuan} placeholder="pcs,pack,dll" required />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <span>
                                    <Col>
                                        <button type="button" onClick={this.tambahbarang} className="btn btn-success fa fa-paper-plane">Submit</button>
                                    </Col>
                                </span>
                                <Col className="col-sm">
                                    <Button className="fa fa-trash" color="danger">Reset</Button>{' '}
                                </Col>

                            </FormGroup>
                        </Col>

                    </Form>
                </div>
            </Container >

        )
    }
}

export default TambahComp