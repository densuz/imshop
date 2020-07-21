import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { type } from 'os'

const api = 'http://localhost:1997'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_barang: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampilsemuabarang').then(res => {
            this.setState({
                barang: res.data.values
            })
        })
    }

    Deletebarang = (kode_barang) => {
        const { t_barang } = this.state
        const data = qs.stringify({
            kode_barang: kode_barang
        })

        axios.delete(api + '/hapusbarang',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    t_barang: t_barang.filter(t_barang => t_barang.kode_barang !== kode_barang),
                    display: 'block'
                })
                this.props.history.push('/list')
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
                <h2> Data Barang</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/barang/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Barang</th>
                            <th>Nama Barang</th>
                            <th>Harga(Rp. )</th>
                            <th>Jumlah</th>
                            <th>Gambar</th>
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
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barang/edit',
                                                state: {
                                                    id_barang: t_barang.id_barang,
                                                    kode_barang: t_barang.kode_barang,
                                                    nama_barang: t_barang.nama_barang,
                                                    harga: t_barang.harga,
                                                    jumlah_barang: t_barang.jumlah_barang,
                                                    satuan: t_barang.satuan
                                                }
                                            }
                                        }>
                                        <Button> Edit </Button>

                                    </Link>
                                    <span> </span>
                                        <Button onClick={() => this.Deletebarang(t_barang.id_barang)} color="danger"> Delete </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}
export default ListComp;