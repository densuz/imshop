import React, { useReducer,useContext, } from 'react';
import {
    Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { CartContext } from '../../CartContex';
import { Link } from 'react-router-dom'
import Produk from '../Class/Produk'


const initialState = {
    jumlah: 1,
    hargasatuan: 1000,
    hargatotal: 0
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurangi': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }
        default:
            return state

    }
}

function Rowproduct(props) {

    const [count] = useReducer(reducer, initialState)



    return (
        <Container>
            <Col>
                <hr />
                <CardImg top width="100%" src="https://i0.wp.com/gizmologi.id/wp-content/uploads/2019/10/Realme-xt-spesifikasi-500x500.jpeg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.item}</CardTitle>
                    <CardSubtitle>Rp. {count.hargasatuan}</CardSubtitle>
                    <CardText>Smartphone Android gaming dan High Camera</CardText>
                    <Button color="danger">
                        <Link to={
                            {
                                pathname: '/detailproduct',
                            }
                        }>Detail</Link>
                    </Button>
                </CardBody>
                <Container>
                        <Col>
                            <Produk nama="Realme Narzo" Harga="2.900.0000" stock="2" />
                           
                            
                        </Col>
                    </Container>
            </Col>

        </Container>
    );
}


export default Rowproduct;