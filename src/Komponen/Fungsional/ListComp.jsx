import React, {PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container, NavLink, Alert} from 'reactstrap'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super (props)
        this.state = {
            t_produk: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                t_produk: res.data.values 
            })
        })
    }

    render () {
        return (
            <Container>
                <h2>Data Produk</h2>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Produk</th>
                            <th>Nama Produk</th>
                            <th>Jenis Produk</th>
                            <th>Jumlah Produk</th>
                            <th>Satuan</th>
                            <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_produk.map(t_produk =>
                            <tr key={t_produk.id_produk}>
                                <td>{t_produk.kd_produk}</td>
                                <td>{t_produk.nama_produk}</td>
                                <td>{t_produk.jenis_produk}</td>
                                <td>{t_produk.jumlah}</td>
                                <td>{t_produk.satuan}</td>
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