import React, {PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container, NavLink, Alert} from 'reactstrap'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super (props)
        this.state = {
            t_barang: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampilsemuabarang').then(res=>{
            this.setState({
                t_barang: res.data.values 
            })
        })
    }

    render () {
        return (
            <Container>
                <h2>Data barang</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/barang/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Barang</th>
                            <th>Nama Barang</th>
                            <th>Jenis Barang</th>
                            <th>Jumlah Barang</th>
                            <th>Satuan</th>
                            <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_barang.map(t_barang =>
                            <tr key={t_barang.id_barang}>
                                <td>{t_barang.kode_barang}</td>
                                <td>{t_barang.nama_barang}</td>
                                <td>{t_barang.harga}</td>
                                <td>{t_barang.jumlah_barang}</td>
                                <td>{t_barang.satuan}</td>
                                <td>Edit | Delete</td>
                            </tr>

                            )}
                    </tbody>

                </Table>
            </Container>
        )
    }
} 

export default ListComp;